async function getProducts() {
  const api = 'http://localhost:3000/products';
  const res = await fetch(api);
  const products = await res.json();

  await products.forEach(async (product) => {
    const productsContainer = document.getElementById('products');

    const response = await fetch(
      `http://localhost:3000/users/${product.owner}`,
    );
    const user = await response.json();

    const productEl = document.createElement('div');
    productEl.innerHTML = `
        <div class="d-flex justify-content-space-evenly mb-2 border p-2">
        <img class="w-25 img-fluid me-2 d-md-block d-none" src="../../../${product.image}" alt="prodcut" />
        <div class="d-flex d-flex align-items-center">
        <div class="left">
        <p class="display-4">${product.title}</p>
        <p class="display-5">Price: ${product.price} birr</p>
        <p>Seller:  ${user.firstname} ${user.lastname}</p>
        <a href=""><button class="btn btn-primary">Buy</button></a>
        <a href="./product-detail.html" id="exploreBtn" ><button class="btn btn-primary">Expand Items</button></a>
        </div>
        </div>
        </div>
        `;

    productEl.querySelector('#exploreBtn').addEventListener('click', () => {
      localStorage.setItem('productId', product._id);
    });
    productsContainer.appendChild(productEl);
  });
}

getProducts();
