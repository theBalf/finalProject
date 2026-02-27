import shopcardAction from "../Js/bendDataToCard.js";
import data from "./db.js";
import cartManager from "./cart.js";
import headerIconsUI from "./headerIconsUI.js";
import darkmode from "./darkmode.js";
import { initSwiper } from "./swiperInit.js";
import spa from "./productSPA.js"

headerIconsUI.headerIconsAction();
darkmode;

// ================================== bar actions
const mainContainer = document.querySelector(".main");

shopcardAction.extend("cakeMorecard", data.data.cakes, "cakeshop");
shopcardAction.extend("dessertMorecard", data.data.desserts, "dessertshop");
shopcardAction.extend("sweetMorecard", data.data.cookies, "sweetshop");
shopcardAction.extend(
  "decorationMorecard",
  data.data.decorations,
  "decoration"
);
spa()
initSwiper();
cartManager.clickActions(mainContainer);
// //////////////////////////////////////////////

