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
      time: "17:30",
      date: "18.09.2026",
      title: "Церемония",
      place: "Дом",
      guests: "Молодожёны, друзья и родственники",
    },
    {
      time: "18:00",
      date: "18.09.2026",
      title: "Фуршет",
      place: "Дом",
      guests: "Еда, алкоголь, песни и пляски",
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
