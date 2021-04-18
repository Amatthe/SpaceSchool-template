'use strict';

// DOM element selectors
const navbarMenuButtonElement = document.querySelector('#navbar-menu-btn');
const navbarMenuElement = document.querySelector('#navbar-menu');

// Toggle menu animation
navbarMenuButtonElement.addEventListener('click', () => {
    navbarMenuElement.classList.toggle('navbar-menu-revealed');
})