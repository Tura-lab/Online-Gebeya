const api = 'localhost:3000/users';

const signUpButton = document.getElementById('signUp');

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');

async function signUp() {
  const url = `${api}/signup`;

  const data = {
    firstname: firstname.innerText,
    lastname: lastname.innerText,
    email: email.innerText,
    password: firstname.innerText,
    phone: firstname.innerText,
    created: new Date()
  }

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  const res = await response.json()

  console.log(res)

  return res;
}
