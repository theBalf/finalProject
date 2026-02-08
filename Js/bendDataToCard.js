import createcard from "./createcard.js";
function bend(data,userchoose) {
  data.forEach((element) => {
    createcard(element,userchoose);
  });
}
export default bend;
