import React from "react";

const TipsSection: React.FC = () => {
  return (
    <div
      className="tips-section"
      style={{
        backgroundColor: "#fffaf0",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        margin: "30px 0",
        borderLeft: "4px solid #d32f2f",
      }}
    >
      <h2
        style={{
          color: "#8b0000",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "1.8rem",
          fontFamily: "Georgia, serif",
        }}
      >
        По секрету от молодых:
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              color: "#d32f2f",
              marginBottom: "10px",
              fontSize: "1.3rem",
            }}
          >
            Что при себе надобно иметь:
          </h3>
          <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#333" }}>
            <li>Улыбку, что светлее солнышка;</li>
            <li>Настроеньице радостное;</li>
            <li>Аппетит богатырский;</li>
            <li>500 рубликов в кармане, на выкупы да конкурсы разные!</li>
          </ul>
        </div>

        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              color: "#d32f2f",
              marginBottom: "10px",
              fontSize: "1.3rem",
            }}
          >
            Чего делать воспрещается:
          </h3>
          <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#333" }}>
            <li>Скучать;</li>
            <li>В сторонку грустить;</li>
            <li>Голодными быть;</li>
            {/* <li>Без плясок уходить!</li> */}
          </ul>
        </div>

        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              color: "#d32f2f",
              marginBottom: "10px",
              fontSize: "1.3rem",
            }}
          >
            Что позволено:
          </h3>
          <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#333" }}>
            <li>Пировать;</li>
            <li>Воспоминания счастливые ловить;</li>
            <li>Добрые фотографии для памяти с нами творить;</li>
          </ul>
        </div>
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              color: "#d32f2f",
              marginBottom: "10px",
              fontSize: "1.3rem",
            }}
          >
            На заметку:
          </h3>
          <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#333" }}>
            <li>
              Вместо букета будем рады бутылке вина с запиской-пожеланием. Её мы
              откроем на годовщину!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
