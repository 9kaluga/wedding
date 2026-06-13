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
          <p className="invitation-text">
            В некотором царстве, <br />
            в нашем государстве,
            <br />
            жили-были Дмитрий да Юлия.
            <br />
            Да так крепко друг друга полюбили,
            <br />
            что решили больше не испытывать судьбу, <br />
            а стать мужем и женой.
            <br />
            И зовут они вас, гости дорогие,
            <br />
            на праздник любви и счастья.
            <br />
          </p>
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

            <h2>Стиль и цветовая палитра нарядов гостей дорогих </h2>
            <p className="dress-code">{weddingData.dressCode}</p>
            <div className="color-palette">
              <div className="color-swatches">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#ddddb7ff" }}
                  title="Бежевый"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#98623bff" }}
                  title="Коричневый"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#ba3c3cff" }}
                  title="Красный"
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#7a9153ff" }}
                  title="Зелёный"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <p className="invitation-text">
          Ждём вас с радостью великой! <br />
          Ваши Дмитрий да Юлия
        </p>
      </div>
      <PhotoGallery />
    </>
  );
};

export default WeddingCard;
