import React from "react";
import { weddingData } from "../data/weddingData";

const MapSection: React.FC = () => {
  // const mapUrl = `https://yandex.ru/map-widget/v1/?um=constructor%3A3d5f7e2c4b1a0f9e8d7c6b5a4f3e2d1c&source=constructor`;
  // https://yandex.ru/maps/51/samara/?feedback=address%2Fadd&feedback-context=toponym.building_without_address&from=mapframe&ll=50.377345%2C53.300305&source=mapframe&um=constructor%3A3d5f7e2c4b1a0f9e8d7c6b5a4f3e2d1c&utm_source=mapframe&z=20
  const { coordinates } = weddingData.location;
  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${coordinates[0]}%2C${coordinates[1]}&z=15&l=map`;

  return (
    <div className="map-section">
      <h2>Как нас найти</h2>
      <iframe
        title="location-map"
        width="100%"
        height="400px"
        src={mapUrl}
        frameBorder="0"
        style={{ borderRadius: "8px" }}
      ></iframe>
      <p className="map-address">{weddingData.location.address}</p>
    </div>
  );
};

export default MapSection;
