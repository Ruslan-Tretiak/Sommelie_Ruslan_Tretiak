// script.js

document.addEventListener('DOMContentLoaded', function() {
    var tastingEvents = document.querySelectorAll('.tasting-event');

    tastingEvents.forEach(function(event) {
        event.addEventListener('click', function() {
            window.location.href = 'get-your-ticket.html?id=' + event.id;
        });
    });
});
