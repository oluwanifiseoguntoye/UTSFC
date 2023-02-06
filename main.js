$(function(){
    $('.carousel').carousel()
})

let button = document.querySelector('.navbar-toggler');
let menu = document.querySelector('.collapse');

button.addEventListener('click', function() {
  menu.classList.toggle('show');
});


