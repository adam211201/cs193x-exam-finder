/* Add error message to DOM if there is an issue with API request. */
const displayError = (parentElement, err) => {
  parentElement.textContent = "";

  const loginErrorDescription = document.createElement("p");

  loginErrorDescription.textContent = `${err}`;

  parentElement.appendChild(loginErrorDescription);
}

export default displayError;