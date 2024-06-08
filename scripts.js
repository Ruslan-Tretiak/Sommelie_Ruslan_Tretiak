document.addEventListener('DOMContentLoaded', function() {
    // Використання SweetAlert2 для модального вікна
    document.getElementById('buy-ticket-btn').addEventListener('click', function() {
        Swal.fire({
            title: 'Select a date for your ticket',
            html: '<div id="calendar-container"></div>',
            width: 800,
            showCancelButton: true,
            didOpen: function() {
                var calendarEl = document.createElement('div');
                calendarEl.setAttribute('id', 'calendar');
                document.getElementById('calendar-container').appendChild(calendarEl);

                var calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth',
                    events: [
                        {
                            title: 'Introduction to Wine Tasting',
                            start: '2024-06-10',
                            backgroundColor: '#9fe2aa',
                            borderColor: '#9fe2aa'
                        },
                        {
                            title: 'Exploring Red Wines',
                            start: '2024-06-15',
                            backgroundColor: '#9fe2aa',
                            borderColor: '#9fe2aa'
                        }
                        // Додайте інші події тут
                    ],
                    dateClick: function(info) {
                        var event = calendar.getEvents().find(e => e.startStr === info.dateStr);
                        if (event) {
                            // Перехід на оплату через Vipps
                            window.location.href = 'https://vipps-payment-url.com';
                        }
                    },
                    eventDidMount: function(info) {
                        var tooltip = document.createElement('div');
                        tooltip.className = 'event-tooltip';
                        tooltip.innerText = info.event.title;
                        info.el.appendChild(tooltip);

                        info.el.addEventListener('mouseover', function() {
                            tooltip.style.display = 'block';
                        });

                        info.el.addEventListener('mouseout', function() {
                            tooltip.style.display = 'none';
                        });
                    }
                });
                calendar.render();
            }
        });
    });
});
