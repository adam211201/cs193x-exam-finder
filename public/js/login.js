import apiRequest from "./utils/api-request.js";
import displayError from "./utils/display-error.js";

class App {

  constructor() {
    /* Initialise private member variables. */
    this._loginForm = document.querySelector("#login");

    /* Bind event handlers. */
    this._onLogin = this._onLogin.bind(this);
  }

  setup() {
    /* Clear any previous session storage. */
    window.sessionStorage.clear();

    /* Add event listeners. */
    this._loginForm.addEventListener("submit", this._onLogin);
  }

  /* Handler function for when we try to log in. */
  async _onLogin(e) {
    e.preventDefault();

    const loginForm = e.currentTarget;
    const errorDescription = document.querySelector(".page-error");
    const loginDetails = {
      username: loginForm.username.value,
      password: loginForm.password.value
    };

    try {
      const { user, apiKey } = await apiRequest("POST", "/users/login", loginDetails);

      window.sessionStorage.setItem("user", JSON.stringify(user));
      window.sessionStorage.setItem("apiKey", apiKey);
      window.location.href = "exam-finder.html";
    } catch (err) {
      console.error(err);

      displayError(errorDescription, err);
    }
  }
}

const app = new App();

app.setup();