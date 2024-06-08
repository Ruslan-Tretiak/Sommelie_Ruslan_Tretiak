// Отримуємо елементи модального вікна
var modal = document.getElementById("ticket-modal");
var btn = document.getElementById("buy-ticket-btn");
var span = document.getElementsByClassName("close")[0];

// Коли користувач натискає кнопку, відкривається модальне вікно
btn.onclick = function() {
    modal.style.display = "block";
    // Ініціалізація календаря Pikaday при відкритті модального вікна
    new Pikaday({
        field: document.getElementById('calendar-input'),
        format: 'D MMM YYYY',
        onSelect: function() {
            console.log(this.getMoment().format('Do MMMM YYYY'));
        }
    });
}

// Коли користувач натискає на <span> (x), закривається модальне вікно
span.onclick = function() {
    modal.style.display = "none";
}

// Коли користувач натискає будь-де поза модальним вікном, закривається модальне вікно
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
