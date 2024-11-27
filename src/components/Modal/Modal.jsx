import React from "react";
import "./Modal.scss";

const Modal = ({ onClose, onCompleteLater }) => {
	return (
		<div className="modal-overlay">
			<div className="modal-card">
				<div className="modal__text-container">
					<div className="modal-body">
						<div className="modal-header">
							<h4>5 minutes</h4>
						</div>
						<div className="modal-title">
							{" "}
							<h2>Make sure your dream trip is truly your dream trip!</h2>
						</div>

						<p>
							Answer our survey’s 5 quick questions to help us find and
							recommend a personalized experience list for you to enjoy!
						</p>
					</div>
					<div className="modal-footer">
						<button className="btn complete-now-btn">Complete Now</button>
						<button className="btn maybe-later-btn" onClick={onClose}>
							Maybe Later
						</button>
					</div>
				</div>
				<img
					className="modal__image"
					src="src/assets/7-Sustainable-travel-experiences-to-try-Woman-On-Boat-sritanan-Gettyimages-HERO.renditionimage.1700.850.jpg"
				></img>
			</div>
		</div>
	);
};

export default Modal;
