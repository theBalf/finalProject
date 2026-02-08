export default function enableHscroll(element) {
  element.addEventListener("wheel", function (e) {
    e.preventDefault();
    element.scrollLeft += e.deltaY;
  });
}
