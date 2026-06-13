import React from "react";
import { weddingData } from "../data/weddingData";

const MapSection: React.FC = () => {
  const { coordinates } = weddingData.location;
  const [lat, lon] = coordinates;
  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${lat}%2C${lon}&z=18&l=map&pt=${lat},${lon},pm2rdm`;

  return (
    <div className="map-section">
      <h2>Расположение терема на карте, где собирается честной народ</h2>
      <iframe
        title="location-map"
        width="100%"
        height="400px"
        src={mapUrl}
        frameBorder="0"
        style={{ borderRadius: "8px" }}
      />
      <p className="map-address">{weddingData.location.address}</p>
    </div>
  );
};

export default MapSection;
