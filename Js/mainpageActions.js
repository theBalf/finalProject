import headerIconsUI from "./headerIconsUI.js";
import darkmode from "./darkmode.js";

import cartManager from "./cart.js";

function mainpageActions() {
  function UIActions() {
    const mainContainer = document.querySelector(".header");
    cartManager.clickActions(mainContainer);
    headerIconsUI.headerIconsAction();
  }
  return { UIActions };
}
const mainpageAction = mainpageActions();
export default mainpageAction;
