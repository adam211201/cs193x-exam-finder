/* Handle user signing out. */
const signOut = () => {
  window.localStorage.clear();
  window.location.href = "/";
}

export default signOut;