const password = document.getElementsByClassName('password')[0];
const showToggle = document.getElementsByClassName('show-toggle')[0];
showToggle.addEventListener('click', toggleShow);

let show = false;

function toggleShow() {
  show = !show;
  toggleType(show)
}

function toggleType(visible)  {
  password.type = visible ? 'text' : 'password';
  showToggle.textContent = visible ? "Hide" : "Show";
}
