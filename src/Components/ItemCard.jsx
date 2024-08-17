import React from 'react';
import './ItemCard.css';

const ItemCard = ({ title }) => {
    return (
        <div className="item-card">
            <div className="icon">🎓</div>
            <div className="title">{title}</div>
            <div className="overlay">Kirmoqchi bo'lsangiz ustiga bosing</div>
        </div>
    );
};

export default ItemCard;