import cartActions from "./cart.js";
// import getdata from "./getIMGData.js";

async function createcard(data, userchoose) {
  
  const slider = document.querySelector(`.${userchoose}`);
  const wrapper = slider.querySelector(".swiper-wrapper");
  const titleData = data.name;
  const descriptionData = data.description;
  const priceData = data.price;
  const category = data.category;
  const productID = data.id;
  // const imagesURL = await getdata;
  // const imgData = imagesURL[productID - 1];
  //   ==========================
  const cardWraper = document.createElement("div");
  cardWraper.classList.add("cardWraper", "swiper-slide");
  const card = document.createElement("div");
  card.classList.add("card");
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("cardImageContainer");
  const image = document.createElement("img");
  // image.setAttribute("src", imgData);
  image.setAttribute("src", "../images/chocolatecake.jpg");
  image.classList.add("cardimage");
  const title = document.createElement("h3");
  title.innerText = titleData;
  title.classList.add("title");
  const description = document.createElement("p");
  description.innerText = descriptionData;
  description.classList.add("disceription");
  const priceDiv = document.createElement("div");
  priceDiv.classList.add("priceRate");
  const price = document.createElement("p");
  price.classList.add("price");
  price.innerText = priceData + "   تومان";
  const rateArea = document.createElement("div");
  rateArea.classList.add("ratearea");
  const rateNum = document.createElement("p");
  // ========================  ===============================rate Number
  rateNum.innerText = "4.35";
  rateNum.classList.add("rateNum");
  const btnArea = document.createElement("div");
  btnArea.classList.add("buyAdd");
  const buyBtn = document.createElement("button");
  buyBtn.classList.add("buyitem");
  const btnTxt = document.createElement("p");
  btnTxt.innerText = "خرید";
  btnTxt.classList.add("buyBtnTxt");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeitem");
  const removebtnIMG = document.createElement("img");
  removebtnIMG.setAttribute("src", "../images/trash.svg");
  removebtnIMG.classList.add("removebtnIMG");
  buyBtn.dataset.id = productID;
  buyBtn.dataset.category = category;
  removeBtn.dataset.id = productID;
  removeBtn.dataset.category = category;
  //=================================append

  wrapper.appendChild(cardWraper);
  cardWraper.appendChild(card);
  card.appendChild(imageContainer);
  imageContainer.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(priceDiv);
  priceDiv.appendChild(price);
  priceDiv.appendChild(rateArea);
  rateArea.appendChild(rateNum);
  card.appendChild(btnArea);
  btnArea.appendChild(buyBtn);
  buyBtn.appendChild(btnTxt);
  btnArea.appendChild(removeBtn);
  removeBtn.appendChild(removebtnIMG);
  cartActions.changeBtnUI(buyBtn);
}

export default createcard;
