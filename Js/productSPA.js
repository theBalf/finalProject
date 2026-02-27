export default function productSPA() {
  const cardWraper = document.querySelectorAll(".cardWraper");

  cardWraper.forEach((card) => {
    card.addEventListener("click", (e) => {
      const btn = document.querySelector(".buyAdd");
      if (e.target.closest(".buyAdd")) return;

      const id = e.currentTarget.dataset.id;
      const category = e.currentTarget.dataset.category;

      const params = new URLSearchParams();
      params.set("id", id);
      params.set("category", category);
      window.location.href = `product.html?id=${id}&category=${category}`;
    });
  });
}
