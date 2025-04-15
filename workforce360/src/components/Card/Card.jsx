import React from 'react';
import './Card.css';
import { FaBeer } from 'react-icons/fa'; // Ví dụ sử dụng icon từ Font Awesome

const Card = ({ icon, text, iconBackgroundColor }) => {
  return (
    <div className="card custom-card">
      <div className="card-body">
        <div
          className="icon-container"
          style={{ backgroundColor: iconBackgroundColor }}
        >
          <div className="card-icon">{icon}</div>
        </div>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
