import apiRequest from "./utils/api-request.js";
import displayError from "./utils/display-error.js";
import signOut from "./utils/sign-out.js";

class App {

  constructor() {
    /* Initialise private member variables. */
    this._reportErrorForm = document.querySelector("#report-error");
    this._reportErrorButton = document.querySelector("#report-error-button");
    this._reportErrorList = document.querySelector("#report-error-list");

    this._user = JSON.parse(window.sessionStorage.getItem("user"));

    /* Bind event handlers. */
    this._getErrors = this._getErrors.bind(this);
    this._addError = this._addError.bind(this);
    this._deleteError = this._deleteError.bind(this);
  }

  setup() {
    /* Sign out if the user isn't authenticated. So unsecure but ¯\_(ツ)_/¯. */
    if (!this._user) {
      signOut();     
    }

    /* Add event listeners. */
    this._reportErrorForm.addEventListener("submit", this._addError);
    
    window.addEventListener("load", this._getErrors);
  }

  /* Adds all of the errors to the DOM. */
  async _getErrors() {
    this._reportErrorList.textContent = "";

    const { errors } = await apiRequest("GET", "/exams/errors");

    for (const error of errors) {
      const errorListItem = this._createErrorItem(error);

      this._reportErrorList.appendChild(errorListItem);
    }
  }

  /* Add new error to the DB. */
  async _addError(e) {
    e.preventDefault();

    const errorForm = e.currentTarget;
    const errorDescription = document.querySelector(".page-error");
    const error = {
      subject: errorForm.subject.value,
      description: errorForm.description.value
    };

    try {
      await apiRequest("POST", "/exams/errors", error);
      await this._getErrors();

      errorForm.reset();
      errorDescription.textContent = "";
    } catch (err) {
      console.error(err);
      
      displayError(errorDescription, err);
    }
  }

  /* Delete error from the DB. */
  async _deleteError(e) {
    const id = e.currentTarget.closest("li").id;

    try {
      await apiRequest("DELETE", `/exams/errors/${id}`);
      await this._getErrors();
    } catch (err) {
      console.error(err);
    }
  }

  /* Create the DOM Node for the Error Item. */
  _createErrorItem({ id, subject, description }) {
    const errorListItem = document.createElement("li");
    const errorListItemRadiobox = document.createElement("input");
    const errorListItemSubject = document.createElement("h3");
    const errorListItemDescription = document.createElement("p");

    errorListItem.id = id;
    errorListItemRadiobox.type = "radio";
    errorListItemRadiobox.addEventListener("change", this._deleteError);
    errorListItemSubject.textContent = subject;
    errorListItemDescription.textContent = description;
    
    errorListItem.appendChild(errorListItemRadiobox);
    errorListItem.appendChild(errorListItemSubject);
    errorListItem.appendChild(errorListItemDescription);

    return errorListItem;
  }
}

const app = new App();

app.setup();