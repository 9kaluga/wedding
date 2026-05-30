import React from "react";

const PhotoGallery: React.FC = () => {
  const photos = [
    { id: 1, alt: "Фото жениха и невесты" },
    { id: 2, alt: "Совместное фото" },
    { id: 3, alt: "Фото влюбленной пары" },
  ];

  return (
    <div className="photo-gallery">
      <h2>Наша история любви</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <div className="photo-placeholder">
              <span>Фото {photo.id}</span>
            </div>
            <p>{photo.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
