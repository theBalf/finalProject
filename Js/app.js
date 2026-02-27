// ست کردن محصول با URL Param و DOM

import data from "./db.js";
import cartManager from "./cart.js";
// تعریف المنت های موجود در html
const big = document.querySelector(".big"); //title
const small = document.querySelector(".small"); //category
const text = document.querySelector(".text"); //description
const priceNum = document.querySelector(".priceNum"); //price
const buy = document.querySelector(".buy"); //buy

///////////////////////////////////////////
function addToCart(id, category) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existanceProduct = cart.find(
    (item) => item.id === id && item.category === category
  );

  if (existanceProduct) {
    existanceProduct.count += 1;
  } else {
    cart.push({ category, id, count: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

///////////////////////////////////////////
// خواندن اطلاعات و تعریف مقادیر
const query = new URLSearchParams(window.location.search);

const paramId = query.get("id");
const paramCategory = query.get("category");
const mainData = data.data;
const categoryofProduct = paramCategory + "s";
const product = mainData[categoryofProduct].find((P) => P.id == paramId);
// اجرای محصول در صفحه
const title = product.name;
const category = product.category;
const description = product.description;
const price = product.price;
console.log(title, category, description, price);
big.innerText = title;
small.innerText = category;
text.innerText = description;
priceNum.innerText = price;
buy.addEventListener("click", (e) => {
  e.preventDefault();
  addToCart(paramId, paramCategory);
    window.history.back();
});
// انتخاب المنت‌های مورد نیاز
const sizes = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const shoes = document.querySelectorAll(".shoe");
const gradients = document.querySelectorAll(".gradient");
const shoeBg = document.querySelector(".shoeBackground");

let prevColor = "blue";
let animationEnd = true;

// تغییر سایز انتخاب شده
function changeSize() {
  sizes.forEach((size) => size.classList.remove("active"));
  this.classList.add("active");
}

// تغییر رنگ محصول
function changeColor() {
  if (!animationEnd) return;
  let primary = this.getAttribute("primary");
  let color = this.getAttribute("color");
  let shoe = document.querySelector(`.shoe[color="${color}"]`);
  let gradient = document.querySelector(`.gradient[color="${color}"]`);
  let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

  if (color == prevColor) return;

  colors.forEach((c) => c.classList.remove("active"));
  this.classList.add("active");

  document.documentElement.style.setProperty("--primary", primary);

  shoes.forEach((s) => s.classList.remove("show"));
  shoe.classList.add("show");

  gradients.forEach((g) => g.classList.remove("first", "second"));
  gradient.classList.add("first");
  prevGradient.classList.add("second");

  prevColor = color;
  animationEnd = false;

  gradient.addEventListener("animationend", () => {
    animationEnd = true;
  });
}

// اضافه کردن رویداد به سایزها و رنگ‌ها
sizes.forEach((size) => size.addEventListener("click", changeSize));
colors.forEach((c) => c.addEventListener("click", changeColor));

// تنظیم ارتفاع برای موبایل
let x = window.matchMedia("(max-width: 1000px)");

function changeHeight() {
  if (x.matches) {
    let shoeHeight = shoes[0].offsetHeight;
    shoeBg.style.height = `${shoeHeight * 0.9}px`;
  } else {
    shoeBg.style.height = "475px";
  }
}

changeHeight();

window.addEventListener("resize", changeHeight);
