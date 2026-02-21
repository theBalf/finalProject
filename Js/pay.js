import cartManager from "./cart.js";

  const { renderCart } = cartManager.cartPageFunctions();
  const items = renderCart();

  const container = document.getElementById("invoiceItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const discountEl = document.getElementById("discount");
  const finalPriceEl = document.getElementById("finalPrice");
  const emptyMessage = document.getElementById("emptyMessage");

  let totalPrice = 0;
  let finalPrice = 0;

  if (!items.length) {
    emptyMessage.innerText = "سبد خرید شما خالی است";
  } else {
    items.forEach(item => {
      const rawPrice = item.price * item.count;
      const discounted = item.price * (1 - item.discount) * item.count;

      totalPrice += rawPrice;
      finalPrice += discounted;

      const div = document.createElement("div");
      div.classList.add("invoice-item");

      div.innerHTML = `
        <img src="${item.image_url}" />
        <div>
          <p>${item.name}</p>
          <small>تعداد: ${item.count}</small>
        </div>
        <strong>${discounted} تومان</strong>
      `;

      container.appendChild(div);
    });

    const discountValue = totalPrice - finalPrice;

    totalPriceEl.innerText = totalPrice + " تومان";
    discountEl.innerText = discountValue + " تومان";
    finalPriceEl.innerText = finalPrice + " تومان";
  }

  window.goBack = function () {
    window.history.back();
  }

  window.payNow = function () {
    if (!items.length) {
      alert("سبد خرید خالی است");
      return;
    }

    alert("پرداخت با موفقیت انجام شد ✅");
    localStorage.removeItem("cart");
   
  }