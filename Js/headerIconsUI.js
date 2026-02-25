import cartManager from "./cart.js";
import { loginAction, accountAction } from "./login.js";

function pageHeaderUI() {
  function headerIconsAction() {
    let usersession = JSON.parse(sessionStorage.getItem("user"));
    console.log("signUser", usersession);
    let isLOGIN = JSON.parse(localStorage.getItem("loginStatus"));
    console.log("loginstatus", isLOGIN);
    cartManager.cartIconCreate();

      const profileIcon = document.querySelector(".profile");
      profileIcon.addEventListener("click", (e) => {
        e.preventDefault();
console.log("test");

        loginAction.openForm(document.querySelector(".loginPage"));
      });
      document.querySelector(".closelogin").addEventListener("click", (e) => {
        e.preventDefault();
        loginAction.closeForm(document.querySelector(".loginPage"));
      });
      document
        .querySelector(".createAcountBtn")
        .addEventListener("click", (e) => {
          e.preventDefault();
          loginAction.closeForm(document.querySelector(".loginPage"));
          loginAction.openForm(document.querySelector(".signupPage"));
        });
      document.querySelector(".closeSignup").addEventListener("click", () => {
        loginAction.closeForm(document.querySelector(".signupPage"));
      });
      document.querySelector(".signupForm").addEventListener("submit", (e) => {
        e.preventDefault();
        accountAction.register();
      });
      document.querySelector(".loginBtn").addEventListener("click", (e) => {
        e.preventDefault();
        accountAction.login();
      });
      //
    const cartPageFunction = cartManager.cartPageFunctions();
    const cartAction = cartPageFunction.cartActions();

    const cartIcon = document.querySelector(".shopcart");
    cartIcon.addEventListener("click", () => {
      cartAction.openCart();
    });
  }
  return { headerIconsAction };
}

const headerIconsActionexport = pageHeaderUI();

export default headerIconsActionexport;
