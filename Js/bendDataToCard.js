import createcard from "./createcard.js";
function shopcardActions() {
  let extendShop = false;
  function extend(target, data, userchoose) {
    const morecard = document.querySelector(`.${target}`);
    bend(data, userchoose);
    morecard.addEventListener("click", () => {
      const container = document.querySelector(`.${userchoose}`);
      const wraper = container.querySelectorAll(".cardWraper");
      console.log("container", container);
      container.querySelectorAll(".card").forEach((card) => card.remove());
      wraper.forEach((card) => card.remove());
      extendShop = !extendShop;
      container.classList.toggle("extended", extendShop);
      const txt = morecard.querySelector("p");
      console.log(txt);
      if (extendShop) {
        txt.innerText = "بستن کشو";
      } else {
        txt.innerText = "دیدن همه";
      }
      bend(data, userchoose);
    });
  }
  function bend(data, userchoose) {
    if (!extendShop) {
      data.slice(0, 3).forEach((element) => {
        createcard(element, userchoose);
      });
    }
    if (extendShop) {
      data.forEach((element) => {
        createcard(element, userchoose);
      });
    }
  }
  return { bend, extend };
}
const shopcardAction = shopcardActions();
export default shopcardAction;
