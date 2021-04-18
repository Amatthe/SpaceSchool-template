'use strict';

// MENU COMPONENT
// DOM element selectors
const navbarMenuButtonElement = document.querySelector('#navbar-menu-btn');
const navbarMenuElement = document.querySelector('#navbar-menu');

// Toggle menu animation
navbarMenuButtonElement.addEventListener('click', () => {
    navbarMenuElement.classList.toggle('navbar-menu-revealed');
});

// FORM COMPONENT
// Animated form logo element selectors
const logoContainerElement = document.querySelector('#logo-container');
const logoExhaustElement = document.querySelector('#logo-exhaust');

// Form control elements
const sendElement = document.querySelector('#odeslat');
const inputElements = ['#jmeno', '#email', '#zprava'];
const checkboxElements = ['#gdpr'];

// Check form before sending
sendElement.addEventListener('click', () => {
    
    // Reset filled/checked element counter
    let counter = 0;

    // Check if every input element has text in it
    inputElements.forEach((element) => {
        if (document.querySelector(element).value === '') {
            document.querySelector(element).classList.add('contact-input-alert');   
        }
        else {
            document.querySelector(element).classList.remove('contact-input-alert'); 
            counter ++ ;
        }                    
    });

    // Check if every mandatory checkbox is checked
    checkboxElements.forEach((element) => {
        if (document.querySelector(element).checked) { 
            counter ++ ; 
        }  
        else {
            document.querySelector(element).classList.add('gdpr-alert');
            setTimeout(() => {document.querySelector(element).classList = ''}, 1000)
        }                 
    });
    
    // Form-sent animation
    if (counter === inputElements.length + checkboxElements.length) {
        logoContainerElement.classList = 'form-send-animate';
        setTimeout(() => {logoContainerElement.classList = ''}, 3000);         
    }

});