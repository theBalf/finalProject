import toaster from "./toastify.js";
import serverData from "./db.js";

function cartActions() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let foundProduct = null;
  function getProductNumbers() {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    return cartFromStorage.reduce((sum, item) => sum + item.count, 0);
  }
  function cartIconCreate() {
    const wraper = document.querySelector(".iconsWraper");
    if (!wraper) return;
    if (wraper.querySelector(".cartPack")) return;

    const cartPackDiv = document.createElement("div");
    cartPackDiv.classList.add("cartPack");
    const cartImg = document.createElement("img");
    cartImg.setAttribute("src", "../images/shopping.png");
    cartImg.classList.add("shopcart");
    const cartProductnumbers = document.createElement("div");
    cartProductnumbers.classList.add("cartProductnumbers");
    let cartbadge = getProductNumbers();
    cartProductnumbers.innerText = cartbadge;
    if (cartbadge > 0) cartProductnumbers.style.display = "flex";
    const profileImg = document.createElement("img");
    profileImg.classList.add("profile");
    profileImg.setAttribute("src", "../images/account.png");
    // =============================apend
    wraper.appendChild(cartPackDiv);
    cartPackDiv.appendChild(cartImg);
    cartPackDiv.appendChild(cartProductnumbers);
    wraper.appendChild(profileImg);
  }
  function updateProductnumberUI() {
    const cartNumberDiv = document.querySelector(".cartProductnumbers");
    const count = getProductNumbers();
    if (cartNumberDiv) {
      cartNumberDiv.innerText = count;
    }
    if (count > 0) {
      cartNumberDiv.style.display = "flex";
    } else {
      cartNumberDiv.style.display = "none";
    }
  }
  function changeBtnUI(btn) {
    foundProduct = cart.find(
      (item) =>
        item.id === btn.dataset.id && item.category === btn.dataset.category
    );
    const card = btn.closest(".buyAdd");
    const removeBtn = card.querySelector(".removeitem");
    if (foundProduct) {
      btn.classList.add("active");
      btn.innerText = foundProduct.count;
      const addIcon = document.createElement("img");
      addIcon.setAttribute("src", "../images/add.svg");
      btn.appendChild(addIcon);
      removeBtn.classList.add("active");
      const removeBtnIMG = removeBtn.querySelector(".removebtnIMG");
      if (foundProduct.count > 1) {
        removeBtnIMG.src = "../images/remove.svg";
      } else {
        removeBtnIMG.src = "../images/trash.svg";
      }
    } else {
      btn.classList.remove("active");
      btn.innerText = "خرید";
      removeBtn.classList.remove("active");
    }
  }
  function removeFromCart(id, category) {
    console.log("remove worked");

    const index = cart.findIndex(
      (item) => item.id === id && item.category === category
    );

    if (index === -1) {
      return;
    }
    if (cart[index].count > 1) {
      cart[index].count -= 1;
    } else {
      cart.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cart));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateProductnumberUI();
  }
  function clickActions(container) {
    function addToCart(id, category) {
      const existanceProduct = cart.find(
        (item) => item.id === id && item.category === category
      );

      toaster.toaster();

      if (existanceProduct) {
        existanceProduct.count += 1;
      } else {
        cart.push({ category, id, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));

      updateProductnumberUI();
    }

    // add click action
    container.addEventListener("click", (e) => {
      const product = e.target;
      const buyBtn = product.closest(".buyitem");
      const removeBtn = product.closest(".removeitem");
      if (buyBtn) {
        const { id, category } = buyBtn.dataset;
        addToCart(id, category);
        changeBtnUI(buyBtn);

        return;
      }
      if (removeBtn) {
        const { id, category } = removeBtn.dataset;

        removeFromCart(id, category);
        const card = removeBtn.closest(".buyAdd");
        const buyButton = card.querySelector(".buyitem");
        changeBtnUI(buyButton);
      }
    });
    //   e.preventDefault();
    //   const product = e.target;
    //   const btn = product.closest(".buyitem");
    //   if (!btn) return;
    //   // =====================================
    //   const { id, category } = btn.dataset;

    //   addToCart(id, category);
    //   changeBtnUI(btn);

    // // remove click action

    // container.addEventListener("click", (e) => {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   const product = e.target;
    //   const btn = product.closest(".removeitem");
    //   if (!btn) return;
    //   const { id, category } = btn.dataset;

    //   removeFromCart(id, category);
    //   changeBtnUI(btn);
    // });
    return { addToCart, removeFromCart };
  }
  function cartPageFunctions() {
    function renderCart() {
      let cartProuctsToRender = [];
      cart.forEach((element) => {
        const cartcategory = element.category;
        const categories = cartcategory + "s";
        const cartid = JSON.parse(element.id);
        console.log("products", cartcategory);

        const cartProduct = serverData.data[categories].find(
          (item) => item.id == cartid
        );
        const productWithCount = {
          ...cartProduct,
          count: element.count,
        };

        cartProuctsToRender.push(productWithCount);
      });
      return cartProuctsToRender;
    }
    function cartActions() {
      const cartPage = document.querySelector(".cartContainer");
      const itemSection = document.querySelector(".bendingSpace");

      function openCart() {
        closeCart();
        cartPage.style.display = "flex";
        const items = renderCart();
        const submitBtn = document.querySelector(".btn-checkout");
        if (!items.length > 0) {
          cartPage.classList.remove("empty");
          cartPage.classList.add("empty");
          submitBtn.disabled = true;
          itemSection.innerHTML = "";
          return;
        } else if (items && items.length > 0) {
          submitBtn.disabled = false;
          itemSection.innerHTML = "";
          cartPage.classList.remove("empty");
          itemSection.addEventListener("click", itemReduction);
          createCartItemsUI();
        }
      }

      function closeCart() {
        const closeIcon = document.querySelector(".closeIconForCart");
        closeIcon.addEventListener("click", () => {
          cartPage.style.display = "none";
          window.location.reload();
        });
        
        const keepShopping = document.querySelector(".btn-continue");
        keepShopping.addEventListener("click", () => {
          cartPage.style.display = "none";
          window.location.reload();
        });
      }
      function toPay() {}
      return { openCart, closeCart, toPay };
    }
    function itemReduction(e) {
      const removeBtn = e.target.closest(".cartItemRemove");

      if (!removeBtn) return;

      const itemWraper = removeBtn.closest(".itemWraper");

      const id = itemWraper.dataset.id;
      const category = itemWraper.dataset.category;
      // const count = itemWraper.dataset.count;
      console.log("before remove test");
      removeFromCart(id, category);

      const itemSection = document.querySelector(".bendingSpace");
      itemSection.innerHTML = "";
      createCartItemsUI();
    }
    function createCartItemsUI() {
      const items = renderCart();
      let totalPrice = 0;
      let finalPrice = 0; //جمع قیمت همه آیتم ها با تخفیف
      const itemSection = document.querySelector(".bendingSpace");
      const totalPriceTxt = document.querySelector(".totalPrice");
      const finalPriceTxt = document.querySelector(".finalPrice");
      const clientBenefitTxt = document.querySelector(
        ".clientBenefitVariableTxt"
      );
      const benefitText = document.querySelector(".clientBenefit");

      items.forEach((item) => {
        console.log(item);
        const itemName = item.name;
        const itemPrice = item.price;
        const itemImg = item.image_url;
        const itemStock = item.stock;
        const discount = item.discount;
        const count = item.count;
        const totalRawPrice = itemPrice * count;
        const totalItemPrice = itemPrice * (1 - discount) * count;
        totalPrice += totalRawPrice;
        finalPrice += totalItemPrice;
        const itemWraper = document.createElement("div");
        itemWraper.classList.add("itemWraper");
        const hr = document.createElement("hr");
        const img = document.createElement("img");
        img.setAttribute("src", itemImg);
        img.classList.add("itemImg");
        const name = document.createElement("h3");
        name.innerText = itemName;
        name.classList.add("itemName");
        const countItem = document.createElement("p");
        countItem.innerText = count;
        countItem.classList.add("itemCount");
        const price = document.createElement("p");
        price.innerText = totalItemPrice;
        price.classList.add("itemPrice");
        const removeIcon = document.createElement("img");
        removeIcon.setAttribute("src", "../images/remove.svg");
        if (count === 1) {
          removeIcon.setAttribute("src", "../images/trash.svg");
        }
        // ///////////////تست راه حل سوم
        itemWraper.dataset.id = item.id;
        itemWraper.dataset.category = item.category;
        itemWraper.dataset.count = count;
        console.log("itemWraper.dataset", itemWraper.dataset);

        // ///////////////تست راه حل سوم
        removeIcon.classList.add("cartItemRemove");
        itemSection.appendChild(itemWraper);
        itemSection.appendChild(hr);
        itemWraper.appendChild(img);
        itemWraper.appendChild(name);
        itemWraper.appendChild(countItem);
        itemWraper.appendChild(price);
        itemWraper.appendChild(removeIcon);
      });
      if (cart.length === 0) {
        const cartPage = document.querySelector(".cartContainer");
        cartPage.classList.remove("empty");
        cartPage.classList.add("empty");
        finalPriceTxt.innerText = "سبد خالی رایگانه";
      }
      const clientBenefit = totalPrice - finalPrice;
      console.log("clientBenefit", cart.length);
      // ////////////////////// cart total shop price and discount and benefits for client

      if (!clientBenefit || !cart.length) {
        totalPriceTxt.classList.remove("hidden");
        clientBenefitTxt.classList.remove("hidden");
        benefitText.classList.remove("hidden");
        totalPriceTxt.classList.add("hidden");
        clientBenefitTxt.classList.add("hidden");
        benefitText.classList.add("hidden");
      } else if (clientBenefit || cart.length) {
        totalPriceTxt.classList.remove("hidden");
        clientBenefitTxt.classList.remove("hidden");
        benefitText.classList.remove("hidden");
      }
      totalPriceTxt.innerText = `${totalPrice}  تومان`;
      finalPriceTxt.innerText = `${finalPrice}  تومان`;
      clientBenefitTxt.innerText = `${clientBenefit}  تومان`;
      console.log("clientBenefit", clientBenefit);

      // ////////////////////// cart total shop price and discount and benefits for client //// ends
    }

    return { renderCart, createCartItemsUI, cartActions };
  }

  return {
    cartIconCreate,
    clickActions,
    updateProductnumberUI,
    changeBtnUI,
    cartPageFunctions,
  };
}

const cartManager = cartActions();
export default cartManager;
