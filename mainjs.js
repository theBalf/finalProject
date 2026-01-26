import { loginAction, accountAction } from "./Js/login.js";

document.querySelector(".profile").addEventListener("click", () => {
  loginAction.openForm(document.querySelector(".loginPage"));
});
document.querySelector(".closelogin").addEventListener("click", () => {
  loginAction.closeForm(document.querySelector(".loginPage"));
});
document.querySelector(".createAcountBtn").addEventListener("click", (e) => {
  e.preventDefault();
  loginAction.closeForm(document.querySelector(".loginPage"));
  loginAction.openForm(document.querySelector(".signupPage"));
  console.log("clicked");
});
document.querySelector(".closeSignup").addEventListener("click", () => {
  loginAction.closeForm(document.querySelector(".signupPage"));
});

document.querySelector(".signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  accountAction.register();
});
const usersession = JSON.parse(sessionStorage.getItem("user"));
console.log("signUser", usersession);
const isLOGIN = JSON.parse(localStorage.getItem("loginStatus"));
console.log("loginstatus", isLOGIN);

document.querySelector(".loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  accountAction.login();
});
//======================================dark mode
const darkToggle = document.getElementById("checkbox");

darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  // sace status
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

//on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  darkToggle.checked = true;
}

