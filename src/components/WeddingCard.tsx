import React from "react";
import { weddingData } from "../data/weddingData";
import PhotoGallery from "./PhotoGallery";

const WeddingCard: React.FC = () => {
  return (
    <>
      <div className="wedding-card">
        <div className="card-header">
          <h1 className="couple-name">
            {weddingData.couple.groom} & {weddingData.couple.bride}
          </h1>
          <div className="divider"></div>
          <div className="invitation-text">
            <p>В некотором царстве,</p>
            <p>В нашем государстве,</p>
            <p>Жили-были Дмитрий да Юлия.</p>
            <p>Да так крепко друг друга полюбили,</p>
            <p>Что решили больше не испытывать судьбу,</p>
            <p>А стать мужем и женой.</p>
            <p>И зовут они вас, гости дорогие,</p>
            <p>На праздник любви и счастья.</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="card-body">
          <div className="event-details">
            <h2>Дата и время</h2>
            <p className="date">{weddingData.iventDate}</p>
            <p className="time">в {weddingData.time}</p>
            <div className="divider"></div>

            <h2>Место волшебное</h2>
            <p className="location">{weddingData.location.name}</p>
            <p className="address">{weddingData.location.address}</p>
            <div className="divider"></div>

            <h2>Цветовая палитра для нарядов гостей дорогих </h2>
            <div className="color-palette">
              <div className="color-swatches">
                {/* Ряд 1 */}
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#6a2a3a" }}
                  data-title="Глубокий бордо"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#c62828" }}
                  data-title="Насыщенный-красный"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#6e4d4dff" }}
                  data-title="Коричневый"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#b39183ff" }}
                  data-title="Бежевый"
                ></div>

                {/* Ряд 2 */}
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#8a9a6a" }}
                  data-title="Оливковый"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#b2b2a0" }}
                  data-title="Серо-бежевый"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#f0d0c0" }}
                  data-title="Светло-персиковый"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#f0e0d0" }}
                  data-title="Кремовый"
                ></div>
              </div>
              <p className="dress-code">{weddingData.dressCode}</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="invitation-text">
          <p>Ждём вас с радостью великой!</p>
          <p>Ваши Дмитрий да Юлия</p>
        </div>
      </div>
      <PhotoGallery />
    </>
  );
};

export default WeddingCard;
