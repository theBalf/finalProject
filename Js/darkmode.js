function darkmodeToggle() {
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
}
const darkmode = darkmodeToggle();
export default darkmode;
