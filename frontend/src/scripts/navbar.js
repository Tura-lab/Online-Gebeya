// let api = 'http://localhost:3000/users';

const profile = document.getElementById('profile');
const removables = document.getElementsByClassName('removable');

const user = localStorage.getItem('currentUserName');

console.log(user, 44444);

if (user) {
  profile.innerText = user;
  for (let removable of removables) {
    removable.style.display = 'none';
  }
}

const signOutBtn = document.getElementById('logoutButton');

async function logout() {
  console.log("Logging out")
  // const response = await fetch(`${api}/logout`);

  localStorage.removeItem('jwtTOKEN');
  localStorage.removeItem('currentUserName');
  localStorage.removeItem('currentUserId');

  location.reload();

  return await res.json();
}

signOutBtn.addEventListener('click', (e) => {
  console.log('ajkhdfjkhakjdshfjkahdsjkf')
  e.preventDefault();
  logout();
});