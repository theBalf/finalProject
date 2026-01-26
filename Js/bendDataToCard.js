import createcard from "./createcard.js";
function bend(data) {
  // const list = extendshop ? data :data.slice(0,4);
  data.forEach((element) => {
    createcard(element);
  });
}
export default bend;
