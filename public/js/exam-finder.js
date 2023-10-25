import apiRequest from "./utils/api-request.js";
import signOut from "./utils/sign-out.js";
import loadPDF from "./utils/pdf-init.js";

class App {

  constructor() {      
    /* Initialise private member variables. */
    this._examFinderForm = document.querySelector("#exam-finder");
    this._examFinderSignOut = document.querySelector("#exam-finder-sign-out");

    this._user = JSON.parse(window.sessionStorage.getItem("user"));

    /* Bind event handlers. */
    this._getExam = this._getExam.bind(this);
    this._addFavouriteExamPaper = this._addFavouriteExamPaper.bind(this);
  }

  setup() {
    /* Sign out if the user isn't authenticated. So unsecure but ¯\_(ツ)_/¯. */
    if (!this._user) {
      signOut();     
    }
    
    /* Add event listeners. */
    this._examFinderSignOut.addEventListener("click", this._onSignOut);
    
    const examFinderSelects = this._examFinderForm.querySelectorAll("select");
    for (const select of examFinderSelects) {
      select.addEventListener("change", this._getExam);
    }

    window.addEventListener("load", this._getExam);
  }

  /* Retrieve exam from the DB and show its links. */
  async _getExam(e) {
    e.preventDefault();

    const { language, certificate, level, subject, year } = this._examFinderForm;

    const examObj = await apiRequest("GET", `/exams?language=${language.value}&certificate=${certificate.value}&level=${level.value}&subject=${subject.value}&year=${year.value}`);
    
    /* Realistically, if the PDF.js was working on my local web app, the following ~25 lines of code would be removed. */
    const examViewer = document.querySelector("#exam-panel-links");

    examViewer.textContent = "";
    examViewer.style.display = "flex";
    examViewer.style.flexDirection = "column";
    examViewer.style.alignItems = "center";
    examViewer.style.gap = "1rem";

    const examPaper = document.createElement("a");
    const examMarkingScheme = document.createElement("a");
    const examFavourite = document.createElement("button");

    examPaper.textContent = `${language.value} | ${certificate.value} | ${level.value} | ${subject.value} | ${year.value} | exam`;
    examPaper.href = `${examObj.examPaper}`;
    examPaper.target = "_blank";

    examMarkingScheme.textContent = `${language.value} | ${certificate.value} | ${level.value} | ${subject.value} | ${year.value} | marking scheme`;
    examMarkingScheme.href = `${examObj.markingScheme}`;
    examMarkingScheme.target = "_blank";
    
    examFavourite.textContent = "Favourite";
    examFavourite.style.cursor = "pointer";
    examFavourite.addEventListener("click", (e) => {
      this._addFavouriteExamPaper(examObj);
    });

    examViewer.appendChild(examPaper);
    examViewer.appendChild(examMarkingScheme);
    examViewer.appendChild(examFavourite);

    /* This code is commented out as the link I am requesting is blocked by CORS.
     * I believe it would work if I was hosting the web app on the internet.
     */    
    // await loadPDF(examViewer, examObj.examPaper);
  }

  /* Add favourite exam paper. */
  async _addFavouriteExamPaper(examObj) {
    const { id } = this._user;

    try {
      await apiRequest("POST", `/users/${id}/favourites`, { examId: examObj.id });
    } catch (err) {
      alert(err);
    }
  }
}

const app = new App();

app.setup();