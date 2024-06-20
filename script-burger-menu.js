
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const modalMenu = document.getElementById('modal-menu');
    const closeMenu = document.querySelector('.close-menu');

    burgerMenu.addEventListener('click', function () {
        modalMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', function () {
        modalMenu.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalMenu) {
            modalMenu.style.display = 'none';
        }
    });
});
