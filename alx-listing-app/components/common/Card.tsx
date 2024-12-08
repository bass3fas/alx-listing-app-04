import React from 'react';

export interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h2 className="text-lg font-bold">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;
