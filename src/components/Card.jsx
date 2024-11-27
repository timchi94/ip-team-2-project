import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
	const { title, distance, rating, price, date, image } = data;

	return (
		<div className="card">
			<Link to={"/browse"}>
				<img src={image} alt={title} className="card-image" />
				<div className="card-content">
					<h3 className="card-title">{title}</h3>
					<div className="card-title-container">
						<p className="card-distance">{distance}</p>
						<p className="card-rating">★ {rating}</p>
						<p className="card-date">{date}</p>
						<p className="card-price">{price}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
