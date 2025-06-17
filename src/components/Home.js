import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-overlay">
        <h1 className="home-title">🔮 Поиски волшебной палочки</h1>
        <p className="home-description">
          Ты попал в Хогвартс. Где-то среди его залов и тайн спрятана волшебная палочка Гарри Поттера.
          <br />
          Перемещайся по комнатам, исследуй и найди её, прежде чем кто-то другой её обнаружит!
        </p>
        <p className="home-rules">
          <strong>Правила игры:</strong>
          <ul>
            <li>Переходи по комнатам с помощью ссылок.</li>
            <li>Осматривай каждую комнату — палочка может быть где угодно.</li>
            <li>Если найдёшь палочку — ты выиграл!</li>
          </ul>
        </p>
        <Link to="/great-hall" className="start-button">Начать игру</Link>
      </div>
    </div>
  );
}

export default Home;
