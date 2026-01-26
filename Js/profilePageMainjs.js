function logOut() {
  let isLogIn = "false";
  localStorage.setItem("loginStatus", isLogIn);
  window.close()
}
const logoutBTN = document.querySelector(".logoutBTN");
logoutBTN.addEventListener("click", logOut);
