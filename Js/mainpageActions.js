import headerIconsUI from "./headerIconsUI.js";
import darkmode from "./darkmode.js";

function mainpageActions() {
  function UIActions() {
    headerIconsUI.headerIconsAction();
    darkmode;
  }
  return {UIActions}
}
const mainpageAction = mainpageActions();
export default mainpageAction;
