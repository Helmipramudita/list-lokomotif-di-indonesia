import React, { useState } from "react";
import "./LokomotifItem.css";

const LokomotifItem = ({ lokomotif }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="lokomotif-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <img
          src={lokomotif.imageUrl}
          alt={lokomotif.name}
          className="lokomotif-image"
        />
      </div>
      <h2>{lokomotif.name}</h2>
      <p className="type">
        <strong>Type:</strong> {lokomotif.types.join(", ")}
      </p>
      <p className="description">{lokomotif.description}</p>
      <div className={`hover-popup ${isHovered ? "active" : ""}`}>
        <div className="stats">
          <div className="stat-item">
            <strong>Produsen:</strong> {lokomotif.stats["Tahun Produksi"]}
          </div>
          <div className="stat-item">
            <strong>Tahun Operasi:</strong> {lokomotif.stats["Tahun Operasi"]}
          </div>
          <div className="stat-item">
            <strong>Tenaga:</strong> {lokomotif.stats["Tenaga"]}
          </div>
          <div className="stat-item">
            <strong>Kecepatan Max:</strong> {lokomotif.stats["Kecepatan Max"]}
          </div>
          <div className="stat-item">
            <strong>Berat Kosong:</strong> {lokomotif.stats["Berat Kosong"]} kg
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokomotifItem;
