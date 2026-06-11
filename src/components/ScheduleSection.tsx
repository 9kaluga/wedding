const ScheduleSection = () => {
  const events = [
    {
      time: "15:15",
      date: "18.09.2026",
      title: "Роспись",
      place: "ЗАГС",
      guests: "Молодожёны и родственники",
    },
    {
      time: "16:30",
      date: "18.09.2026",
      title: "Трансфер",
      place: "ЗАГС",
      guests: "Отправление из ЗАГСа в терем",
    },
    {
      time: "17:30",
      date: "18.09.2026",
      title: "Welcome",
      place: "Терем",
      guests:
        "Хлебом и солью встречаем чесной народ, закуски, аперитив, церемония и вручение подарков",
    },
    {
      time: "18:00",
      date: "18.09.2026",
      title: "СВАДЕБНЫЙ ПИР",
      place: "Терем",
      guests: "Танцы и забавы, время тостов и поздравлений",
    },
    {
      time: "24:00",
      date: "18.09.2026",
      title: "Завершение праздничного вечера",
      place: "Терем",
      guests: "Прощание",
    },
  ];

  return (
    <section className="schedule-section">
      <h2 className="schedule-title">СВАДЕБНОЕ РАСПИСАНИЕ</h2>
      <div className="schedule-grid">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`schedule-item animate-item`}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <div className="time-block">
              <span className="time">{event.time}</span>
              <span className="date">{event.date}</span>
            </div>
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-place">{event.place}</p>
              <p className="event-guests">{event.guests}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;
