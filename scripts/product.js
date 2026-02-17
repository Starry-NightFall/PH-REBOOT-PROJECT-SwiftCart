const categoryContainer = document.getElementById("category-container");
const productContainer = document.getElementById("product-container");

const loadCategory = async () => {
  const url = `https://fakestoreapi.com/products/categories`;
  const categories = await (await fetch(url)).json();
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.setAttribute("id", `${category}-btn`);
    btn.classList = "btn focus:btn-primary rounded-xl";
    btn.innerText = `${category}`;
    categoryContainer.appendChild(btn);
  });
};

const loadAllProducts = async () => {
  const url = `https://fakestoreapi.com/products`;
  const products = await (await fetch(url)).json();
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
            src="${product.image}"
            class="w-full p-14"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${product.title}</h2>
          <p class="font-bold text-xl">$ ${product.price}</p>
          <div class="card-actions justify-between">
            <button class="btn">Details</button>
            <button class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    `;
    productContainer.appendChild(div);
  });
};

loadCategory();
loadAllProducts();
