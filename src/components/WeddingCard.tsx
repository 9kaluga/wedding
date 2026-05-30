import React from "react";
import { weddingData } from "../data/weddingData";
import PhotoGallery from "./PhotoGallery";

const WeddingCard: React.FC = () => {
  return (
    <div className="wedding-card">
      <div className="card-header">
        <h1 className="couple-name">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </h1>
        <div className="divider"></div>
        <p className="invitation-text">
          Приглашаем вас на свадьбу! <br />
          Чтобы разделить с нами этот важный момент в нашей жизни
        </p>
      </div>

      <PhotoGallery />

      <div className="card-body">
        <div className="event-details">
          <h2>Дата и время</h2>
          <p className="date">{weddingData.date}</p>
          <p className="time">в {weddingData.time}</p>

          <h2>Место проведения</h2>
          <p className="location">{weddingData.location.name}</p>
          <p className="address">{weddingData.location.address}</p>

          <h2>Одежда</h2>
          <p className="dress-code">{weddingData.dressCode}</p>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
