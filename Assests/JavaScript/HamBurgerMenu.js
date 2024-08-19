// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('#center-nav');

menu.onclick = () => {
    menu.classList.toggle('add');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('add'); 
    navBar.classList.remove('active');
}
