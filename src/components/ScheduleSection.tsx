const ScheduleSection = () => {
  const events = [
    {
      time: "Час, когда солнце в зените (15:15)",
      date: "18.09.2026",
      title: "Связывание судеб венцом брака",
      place: "В тереме государственном (ЗАГС)",
      guests: "Молодожёны, родители да родственники",
    },
    {
      time: "Когда солнце на исходе дня (16:30)",
      date: "18.09.2026",
      title: "Путь к терему празднечному (Трансфер)",
      place: "Из терема государственного (ЗАГС)",
      guests: "Отъезд в терем праздничный",
    },
    {
      time: "Когда солнце клонится к закату (17:30)",
      date: "18.09.2026",
      title: "Приём гостей",
      place: "В тереме празднечном",
      guests: "Хлебом-солью встречаем добрых людей",
    },
    {
      time: "Когда вечерняя заря светится (18:00)",
      date: "18.09.2026",
      title: "Великий Свадебный Пир",
      place: "В тереме празднечном",
      guests: "Танцы и забавы, время тостов да поздравлений",
    },
    {
      time: "Когда звёзды на небе сияют (22:00)",
      date: "18.09.2026",
      title: "Прощание с пиром",
      place: "В тереме празднечном",
      guests: "Прощальные слова гостям да разъезд по домам",
    },
    {
      time: "Время, когда обеденный звон раздаётся (13:00)",
      date: "19.09.2026",
      title: "День восстановления после пира",
      place: "В бане да за столом",
      guests: "Пиво, шашлык, банька-парилка да задушевные беседы",
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
