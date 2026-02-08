function cartActions() {
  const cart = [];
  let productNumbers = cart.length;
  function cartIconCreate() {
    const wraper = document.querySelector(".iconsWraper");
    const cartPackDiv = document.createElement("div");
    cartPackDiv.classList.add("cartPack");
    const cartImg = document.createElement("img");
    cartImg.setAttribute("src", "../images/shopping.png");
    cartImg.classList.add("shopcart");
    const cartProductnumbers = document.createElement("div");
    cartProductnumbers.classList.add("cartProductnumbers");
    cartProductnumbers.innerText = productNumbers;

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
    if (cartNumberDiv) {
      cartNumberDiv.innerText = productNumbers;
    }
    if (cart.length > 0) {
      cartNumberDiv.style.display = "flex"; 
    }
  }
  function clickActions(container) {
    function addToCart(id, category) {
      const existanceProduct = cart.find(
        (item) => item.id === id && item.category === category
      );
      if (existanceProduct) {
        existanceProduct.count += 1;
      } else {
        cart.push({ category, id, count: 1 });
      }
      productNumbers = cart.reduce((total, item) => total + item.count, 0);

      updateProductnumberUI();
      console.log("cart here", cart);
    }
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".buyitem");
      if (!btn) return;
      e.preventDefault();

      // =====================================
      const { id, category } = btn.dataset;
      addToCart(id, category);
      // rest of codes

      // ===================
    });
    return { addToCart };
  }

  return { cartIconCreate, clickActions };
}

const cartManager = cartActions();
export default cartManager;
