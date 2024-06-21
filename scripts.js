document.addEventListener('DOMContentLoaded', function () {
    // Burger Menu Script
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

    // Tasting Event Script
    var tastingEvents = document.querySelectorAll('.tasting-event');

    tastingEvents.forEach(function(event) {
        event.addEventListener('click', function() {
            window.location.href = 'get-your-ticket.html?id=' + event.id;
        });
    });

    // Modal Script
    var modal = document.getElementById("ticket-modal");
    var btn = document.getElementById("buy-ticket-btn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
