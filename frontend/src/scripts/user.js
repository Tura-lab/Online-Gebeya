const api = 'http://localhost:3000/users';

const signUpButton = document.getElementById('signUp');
console.log(signUpButton);
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');

const signInButton = document.getElementById('signInButton');
const passwordS = document.getElementById('passwordS');
const emailS = document.getElementById('emailS');


if (signInButton) {
  signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    signIn();
  });
}


if (signUpButton) {
  signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    signUp();
  });
}

async function signIn() {
  const url = `${api}/signin`;

  const data = {
    email: emailS.value,
    password: passwordS.value,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: await JSON.stringify(data),
  });

  const res = await response.json();


  if (response.status === 201) {
    localStorage.setItem('jwtTOKEN', res.accessMessage);
  }

  return res;
}

async function signUp() {
  console.log('Signing upppppppppppp');
  const url = `${api}/signup`;

  const data = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
    phoneNumber: phone.value,
    created: new Date(),
  };

  console.log(localStorage.getItem('jwtTOKEN'))

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: await JSON.stringify(data),
  });

  const res = await response.json();

  if (response.status === 201) {
    return window.location.replace(
      'http://localhost:5500/Frontend/src/sign-in.html',
    );
  }

  return res;
}
