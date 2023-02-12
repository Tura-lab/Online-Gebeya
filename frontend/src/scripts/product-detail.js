async function getProduct(productId) {
  const api = 'http://localhost:3000/products';
  const res = await fetch(`${api}/${productId}`);
  const product = await res.json();

  console.log(product);

  const response = await fetch(`http://localhost:3000/users/${product.owner}`);

  const user = await response.json();

  const productContainer = document.getElementById('product');

  const productEl = document.createElement('div');
  productEl.innerHTML = `
        <div class="p-2 border">
    
            <h1 class="display-5">${product.title}</h1>
            <h5>Price: ${product.price}</h5>
            <h5>Seller: ${user.firstname} ${user.lastname}</h5>
    
            <img style="max-width: 450px;" class="img-fluid d-md-block d-none" src="../../../${product.image}" alt="prodcut-image">
    
            <div class="buttons d-flex justify-content-end mt-2">
                <button class="btn btn-primary me-2">Contact Seller</button>
                <button class="btn btn-primary">Buy</button>
            </div>
    
        </div>
        `;
  productContainer.appendChild(productEl);
}

const productId = localStorage.getItem('productId');

getProduct(productId);
