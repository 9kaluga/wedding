import React from "react";

const PhotoGallery: React.FC = () => {
  const photoNames = [
    { id: 1, alt: "Фото жениха" },
    { id: 2, alt: "Фото невесты" },
    { id: 3, alt: "Фото влюбленной пары" },
  ];

  return (
    <div className="photo-gallery">
      {/* <h2>Наши фото</h2> */}
      <div className="gallery-grid">
        {photoNames.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img
              src={`/wedding/photo-${photo.id}.jpg`}
              alt={photo.alt}
              className="photo-placeholder"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
