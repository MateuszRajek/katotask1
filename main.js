const avatar = document.querySelector('.avatar');
const menu = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.close-menu__btn')

avatar.addEventListener('click', function() {
    menu.classList.toggle('active');
});

closeMenuBtn.addEventListener('click', function() {
    menu.classList.remove('active');
})