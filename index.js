
const open = document.querySelector('#open');
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');

open.addEventListener('click', function () {

    toggle.classList.toggle('nav-toggle')
    const navToggle = document.querySelector('.nav-toggle');
    if (nav.classList.contains('bg-light')) {
        navToggle.style.backgroundColor = "rgba(226, 224, 224, 0.158)";
        // console.log('light')
    }
    else {
        navToggle.style.backgroundColor = "black";
        navToggle.style.color = "white";
        // console.log('dark')
    }


})




