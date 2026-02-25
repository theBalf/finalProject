// import secretKey from "../../not2share/pexelAPI.js";

// const pextelAkey = secretKey.pexel;
// console.log("asasfffasasas", pextelAkey);

async function getImagesData() {
  let imageLists = [];
  const response = await fetch(
    "https://api.pexels.com/v1/search?query=cake&per_page=80",
    {
      headers: { Authorization: 
        '"A8wnmGbjJ6yz0Krgx1RGuNnmSiuOZ2G3djzZqSQOMGerjGke8k4ODuZ8"'
       },
    }
  );
  const data = await response.json();
  console.log(data);
  const photos = data.photos;
  photos.forEach((photo) => {
    const url = photo.src.small;
    console.log(url);
    imageLists.push(url);
  });

  return imageLists;
}
const getdata = getImagesData();
export default getdata;
