document.addEventListener("DOMContentLoaded", function() {
  const calendarEl = document.getElementById("calendar");
  const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

  $(calendarEl).fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },
    events: eventos,
    dateClick: function(info) {
      const selectedDate = info.dateStr;
      const events = calendar.getEvents().filter(event => {
        return event.start.toISOString().split("T")[0] === selectedDate;
      });

      const eventTitles = events.map(event => event.title);
      alert("Fecha seleccionada: " + selectedDate + "\nEventos: " + eventTitles.join(", "));
    }
  });
});
