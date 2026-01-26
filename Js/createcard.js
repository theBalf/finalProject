function createcard(data) {
  const slider = document.querySelector(".Cakesliderwraper");
  const imgData = data.image_url;
  const titleData = data.name;
  const descriptionData = data.description;
  const priceData = data.price;
  //   ==========================
  const cardWraper = document.createElement("div");
  cardWraper.classList.add("cardWraper");
  const card = document.createElement("div");
  card.classList.add("card");
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("cardImageContainer");
  const image = document.createElement("img");
  image.setAttribute("src", imgData);
  image.classList.add("cardimage");
  const title = document.createElement("p");
  title.innerText = titleData;
  title.classList.add("title");
  const description = document.createElement("p");
  description.innerText = descriptionData;
  description.classList.add("disceription");
  const priceDiv = document.createElement("div");
  priceDiv.classList.add("priceRate");
  const price = document.createElement("p");
  price.classList.add("price");
  price.innerText = priceData;
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
  //=================================append

  slider.appendChild(cardWraper);
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
}


export default createcard;
