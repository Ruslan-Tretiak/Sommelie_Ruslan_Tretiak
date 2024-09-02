document.addEventListener('DOMContentLoaded', function () {
    // Burger Menu Script
    const burgerMenu = document.getElementById('burger-menu');
    const modalMenu = document.getElementById('modal-menu');
    const closeMenu = document.querySelector('.close-menu');

    // Відкриття модального меню при натисканні на кнопку бургер-меню
    burgerMenu.addEventListener('click', function () {
        modalMenu.style.display = 'block';
    });

    // Закриття модального меню при натисканні на кнопку закриття
    closeMenu.addEventListener('click', function () {
        modalMenu.style.display = 'none';
    });

    // Закриття модального меню при кліку за його межами
    window.addEventListener('click', function (event) {
        if (event.target == modalMenu) {
            modalMenu.style.display = 'none';
        }
    });

    // Tasting Event Script
    var tastingEvents = document.querySelectorAll('.tasting-event');

    tastingEvents.forEach(function(event) {
        event.addEventListener('click', function() {
            // Відкриття модального вікна при натисканні на івент
            var modal = document.getElementById("ticket-modal");
            modal.style.display = "block";

            // Зміна URL без перезавантаження сторінки
            window.history.pushState({}, '', 'get-your-ticket.html?id=' + event.id);
        });
    });

    // Modal Script для кнопки "Buy Your Ticket"
    var modal = document.getElementById("ticket-modal");
    var btn = document.getElementById("buy-ticket-btn");
    var span = document.getElementsByClassName("close")[0];

    // Відкриття модального вікна при натисканні на кнопку "Buy Your Ticket"
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    // Закриття модального вікна при натисканні на кнопку закриття
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Закриття модального вікна при кліку за його межами
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Додавання функціоналу для відкриття поштового клієнта при натисканні на кнопки в модальному вікні
    var tastingButtons = document.querySelectorAll('.tasting-btn');

    tastingButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var subject;
            var body;

            if (button.id === 'tasting1') {
                subject = 'Reservasjon for Wine of Ukraine 07.09.2024';
                body = 'Eg er interessert i å reservere plass til vinsmakingen "Wine of Ukraine" den 07.09.2024.';
            } else if (button.id === 'tasting2') {
                subject = 'Reservasjon for All About Sparkling Wines 14.09.2024';
                body = 'Eg er interessert i å reservere plass til vinsmakingen "All About Sparkling Wines" den 14.09.2024.';
            }

            window.location.href = `mailto:thetretiakruslan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    });
});







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
//             // Open the modal
//             var modal = document.getElementById("ticket-modal");
//             modal.style.display = "block";

//             // Change the URL without reloading the page
//             window.history.pushState({}, '', 'get-your-ticket.html?id=' + event.id);
//         });
//     });

//     // Modal Script
//     var modal = document.getElementById("ticket-modal");
//     var btn = document.getElementById("buy-ticket-btn");
//     var span = document.getElementsByClassName("close")[0];

//     // Open the modal when clicking the "Buy Your Ticket" button
//     if (btn) {
//         btn.onclick = function() {
//             modal.style.display = "block";
//         }
//     }

//     // Close the modal when clicking the "close" button
//     if (span) {
//         span.onclick = function() {
//             modal.style.display = "none";
//         }
//     }

//     // Close the modal when clicking outside of the modal content
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
    
// });
