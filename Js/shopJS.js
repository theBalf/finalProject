import createcard from "../Js/bendDataToCard.js";
import data from "./db.js";
import scrollH from "./horizentalScroll.js";
import cartManager from "./cart.js";
import headerIconsUI from "./headerIconsUI.js";
import darkmode from "./darkmode.js";

headerIconsUI.headerIconsAction();
darkmode;

// ================================== bar actions
createcard(data.data.cakes, "cakeshop");
createcard(data.data.desserts, "dessertshop");
createcard(data.data.cookies, "sweetshop");
createcard(data.data.candles, "decoration");
createcard(data.data.balloons, "decoration");

document.querySelectorAll(".shopcard").forEach(scrollH);

const mainContainer = document.querySelector(".main");
cartManager.clickActions(mainContainer);
