var events = [
  {
    title: "Auffrischung Mathematik - Teil 1",
    start: "2023-10-04T10:30:00",
    end: "2023-10-04T12:00:00",
    url: "https://ia.lu-dev.de/#/page/auffrischung%20mathematik%2F23-10-04"
  },
  {
    title: "Auffrischung Mathematik - Teil 2",
    start: "2023-10-05T10:30:00",
    end: "2023-10-05T12:00:00",
    url: "https://ia.lu-dev.de/#/page/auffrischung%20mathematik%2F23-10-05",
    classNames: ["incomplete-page"]
  },
  {
    title: "Auffrischung Mathematik - Teil 3",
    start: "2023-10-06T10:30:00",
    end: "2023-10-06T12:00:00",
    classNames: ["missing-page"]
  },
  {
    title: "Mathematik für Informatiker 1",
    start: "2023-10-09T13:00:00",
    end: "2023-10-09T14:30:00",
    classNames: ["missing-page"]
  },
  {
    title: "Grundlagen und Diskrete Strukturen",
    start: "2023-10-10T09:00:00",
    end: "2023-10-10T10:30:00",
    url: "https://ia.lu-dev.de/#/page/grundlagen%20und%20diskrete%20strukturen%2F23-10-10"
  },
  {
    title: "Übung: Programmierung und Algorithmen",
    start: "2023-10-10T11:00:00",
    end: "2023-10-10T12:30:00",
    classNames: ["missing-page"]
  },
  {
    title: "Rechnerorganisation",
    start: "2023-10-10T13:00:00",
    end: "2023-10-10T14:30:00",
    classNames: ["cancelled-event"]
  },
  {
    title: "Programmierung und Algorithmen",
    start: "2023-10-11T11:00:00",
    end: "2023-10-11T12:30:00",
    classNames: ["missing-page"]
  },
  {
    title: "Mathematik für Informatiker 1",
    start: "2023-10-11T15:00:00",
    end: "2023-10-11T16:30:00",
    classNames: ["missing-page"]
  },
  {
    title: "Übung: Grundlagen und Diskrete Strukturen",
    start: "2023-10-11T17:15:00",
    end: "2023-10-11T18:45:00",
    classNames: ["missing-page"]
  },
  {
    title: "Rechnerorganisation",
    start: "2023-10-12T13:00:00",
    end: "2023-10-12T14:30:00",
    classNames: ["missing-page"]
  },
  {
    title: "Programmierung und Algorithmen",
    start: "2023-10-12T17:00:00",
    end: "2023-10-12T18:30:00",
    classNames: ["missing-page"]
  },
  {
    title: "Grundlagen und Diskrete Strukturen",
    start: "2023-10-13T09:00:00",
    end: "2023-10-13T10:30:00",
    url: "https://ia.lu-dev.de/#/page/grundlagen%20und%20diskrete%20strukturen%2F23-10-13"
  },
  {
    title: "Übung: Mathematik für Informatiker 1",
    start: "2023-10-13T11:00:00",
    end: "2023-10-13T12:30:00",
    classNames: ["missing-page"]
  }, 
];

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    weekNumbers: true,
    navLinks: true,
    selectable: true,
    locale: 'de',
    firstDay: 1,
    height: 'auto',
    multiMonthMinWidth: '500',

    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay",
    },
    events: events,
  });

  calendar.render();
});
