import React from "react";
import "./Card.css";

const Card = ({ data }) => {
	const { title, distance, rating, price, date, image } = data;

	return (
		<div className="card">
			<img src={image} alt={title} className="card-image" />
			<div className="card-content">
				<h3 className="card-title">{title}</h3>
				<p className="card-distance">{distance}</p>
				<p className="card-rating">★ {rating}</p>
				<p className="card-date">{date}</p>
				<p className="card-price">{price}</p>
			</div>
		</div>
	);
};

export default Card;
