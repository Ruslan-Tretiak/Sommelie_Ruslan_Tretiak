// document.addEventListener('DOMContentLoaded', function () {
//     // Burger Menu Script
//     const burgerMenu = document.getElementById('burger-menu');
//     const modalMenu = document.getElementById('modal-menu');
//     const closeMenu = document.querySelector('.close-menu');

//     burgerMenu.addEventListener('click', function () {
//         modalMenu.style.display = 'block';
//     });

//     closeMenu.addEventListener('click', function () {
//         modalMenu.style.display = 'none';
//     });

//     window.addEventListener('click', function (event) {
//         if (event.target == modalMenu) {
//             modalMenu.style.display = 'none';
//         }
//     });

//     // Tasting Event Script
//     var tastingEvents = document.querySelectorAll('.tasting-event');

//     tastingEvents.forEach(function(event) {
//         event.addEventListener('click', function() {
//             window.location.href = 'get-your-ticket.html?id=' + event.id;
//         });
//     });

//     // Modal Script
//     var modal = document.getElementById("ticket-modal");
//     var btn = document.getElementById("buy-ticket-btn");
//     var span = document.getElementsByClassName("close")[0];

//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// });






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
            // Open the modal
            var modal = document.getElementById("ticket-modal");
            modal.style.display = "block";

            // Change the URL without reloading the page
            window.history.pushState({}, '', 'get-your-ticket.html?id=' + event.id);
        });
    });

    // Modal Script
    var modal = document.getElementById("ticket-modal");
    var btn = document.getElementById("buy-ticket-btn");
    var span = document.getElementsByClassName("close")[0];

    // Open the modal when clicking the "Buy Your Ticket" button
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    // Close the modal when clicking the "close" button
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close the modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
