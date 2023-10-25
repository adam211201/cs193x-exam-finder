import apiRequest from "./utils/api-request.js";
import signOut from "./utils/sign-out.js";

class App {

  constructor() {
    /* Initialise private member variables. */
    this._favouritesList = document.querySelector("#favourites-list");

    this._user = JSON.parse(window.sessionStorage.getItem("user"));

    /* Bind event handlers. */
    this._getFavourites = this._getFavourites.bind(this);
  }

  setup() {
    /* Sign out if the user isn't authenticated. So unsecure but ¯\_(ツ)_/¯. */
    if (!this._user) {
      signOut();     
    }

    /* Add event listeners. */
    window.addEventListener("load", this._getFavourites);
  }

  /* Adds all of the favourite papers to the DOM. */
  async _getFavourites() {
    this._favouritesList.textContent = "";

    const { id } = JSON.parse(window.sessionStorage.getItem("user"));
    const { favourites } = await apiRequest("GET", `/users/${id}/favourites`);

    for (const id of favourites) {
      const { exam } = await apiRequest("GET", `/exams/${id}/`);

      const favouritePaper = this._createFavouritePaperItem(exam);

      this._favouritesList.appendChild(favouritePaper);
    }
  }

  /* Create the DOM Node for the Favourite Paper Item. */
  _createFavouritePaperItem({ id, language, certificate, level, subject, year, papers }) {
    const favouritePaperItem = document.createElement("li");
    const favouritePaperItemSubject = document.createElement("h3");
    const favouritePaperItemDescription = document.createElement("p");
    const favouritePaperItemExamPaper = document.createElement("a");
    const favouritePaperItemMarkingScheme = document.createElement("a");

    favouritePaperItemExamPaper.style.marginRight = "10px";
    favouritePaperItemExamPaper.textContent = "Exam";
    favouritePaperItemExamPaper.href = `${papers.exam}`;
    favouritePaperItemExamPaper.target = "_blank";

    favouritePaperItemMarkingScheme.textContent = "Marking Scheme";
    favouritePaperItemMarkingScheme.href = `${papers.markingScheme}`;
    favouritePaperItemMarkingScheme.target = "_blank";

    favouritePaperItem.id = id;
    favouritePaperItemSubject.textContent = subject;
    favouritePaperItemDescription.textContent = `${language} - ${certificate} - ${level} - ${year}`;
    
    favouritePaperItem.appendChild(favouritePaperItemSubject);
    favouritePaperItem.appendChild(favouritePaperItemDescription);
    favouritePaperItem.appendChild(favouritePaperItemExamPaper);
    favouritePaperItem.appendChild(favouritePaperItemMarkingScheme);

    return favouritePaperItem;
  }
}

const app = new App();

app.setup();