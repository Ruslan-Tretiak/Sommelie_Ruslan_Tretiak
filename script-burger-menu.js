document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const modalMenu = document.getElementById('modal-menu');
    const closeModal = document.querySelector('.close-menu');

    burgerMenu.addEventListener('click', function() {
        modalMenu.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modalMenu.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalMenu) {
            modalMenu.style.display = 'none';
        }
    });
});



