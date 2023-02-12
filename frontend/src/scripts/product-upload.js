const api = 'http://localhost:3000/products';

const uploadButton = document.getElementById('uploadButton');

const title = document.getElementById('title');
const price = document.getElementById('price');
const image = document.getElementById('image');



uploadButton.addEventListener('click', (e) => {
  e.preventDefault();
  uploadProduct();
});

async function uploadProduct() {
  const url = `${api}/create`;

  const formData = new FormData();
    formData.append('image', image.files[0]);
    formData.append('title', title.value);
    formData.append('price', price.value);


  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtTOKEN')}`
    },
    body: formData,
  });

  console.log(formData)

  const res = await response.json();

  console.log(res);

  return res
}
