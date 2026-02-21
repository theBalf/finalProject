console.log("linked");

function toastCheck() {
  const toast = document.querySelector(".toast");

  if (toast) {
    return true;
  } else {
    return false;
  }
}

function ToasterExports() {
  function toaster() {
    // const toastTarget = document.querySelector(`.${target}`);
    // toastTarget.addEventListener("click", (e) => {
    const ToastFrame = document.createElement("div");
    ToastFrame.innerHTML = `
     <div class="toastContent">
     <p>محصول اضافه شد</p>
     <button class="openCart">مشاهده</button>
  </div>
    `;

    console.log("toasted..............");
    if (toastCheck()) {
      return;
    }
    Toastify({
      node: ToastFrame,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      className: "toast",
      style: {},
      onClick: function () {}, // Callback after click
    }).showToast();
    // });
  }
  return { toaster };
}

const toasterFunc = ToasterExports();
export default toasterFunc;
