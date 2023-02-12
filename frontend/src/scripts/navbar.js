const profile = document.getElementById('profile')
const removables = document.getElementsByClassName('removable')

const user = localStorage.getItem('currentUserName');

console.log(user, 44444)

if (user) {
    profile.innerText = user
    for (let removable of removables) {
        removable.style.display = 'none'
    }
}

