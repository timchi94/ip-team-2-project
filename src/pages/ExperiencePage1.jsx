import React, { useState } from "react";
import "./ExperiencePage2.scss";
import { surveyData } from "../components/TravelSurvey/survey_json";
import { Navigate, useNavigate } from "react-router-dom";

const categories = [
	{ id: 1, icon: "", label: "Food & Drink" },
	{ id: 2, icon: "🎭", label: "Entertainment" },
	{ id: 3, icon: "🎨", label: "Art & Culture" },
	{ id: 4, icon: "🚩", label: "Tours" },
	{ id: 5, icon: "⚽", label: "Sporting Events" },
	{ id: 6, icon: "👀", label: "Sightseeing" },
	{ id: 7, icon: "🧘", label: "Wellness" },
	{ id: 8, icon: "🌳", label: "Nature & Outdoors" },
];

const ExperiencePage1 = () => {
	const navigate = useNavigate;
	const [currentPage, setCurrentPage] = useState(0);

	const initialValues = surveyData.reduce((acc, section) => {
		section.questions.forEach((question) => {
			acc[question.name] = null;
		});
		return acc;
	}, {});

	const handleSubmit = (values) => {
		console.log("Survey Results:", values);
	};

	const handleNext = () => {
		if (currentPage < surveyData.length - 1) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevious = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	const progressWidth = `${(currentPage / (surveyData.length - 1)) * 100}%`;
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [specialDetail, setSpecialDetail] = useState("");

	const handleCategorySelect = (id) => {
		setSelectedCategory(id);
	};

	return (
		<div className="experience-page">
			<p className="subtitle">Step 1</p>

			<div className="special-detail">
				<h2 className="special-detail__padding">
					Tell us about your experience
				</h2>{" "}
				<p>
					In this process, we will ask you what your experience is, what you are
					providing and how guests will interact with your listing.
				</p>
			</div>
			<footer className="survey-footer">
				<div className="progress-bar" style={{ width: progressWidth }} />
				<div className="footer-content">
					<div className="page-status">
						Page {currentPage + 1} of {surveyData.length}
					</div>
					<div className="survey-navigation">
						{currentPage > 0 && (
							<button
								type="button"
								onClick={handlePrevious}
								className="survey-button survey-button--previous"
							>
								Previous
							</button>
						)}
						{currentPage < surveyData.length - 1 ? (
							<button
								type="button"
								onClick={handleNext}
								className="survey-button survey-button--next"
							>
								Next
							</button>
						) : (
							<button
								type="submit"
								className="survey-button survey-button--next"
							>
								Submit
							</button>
						)}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default ExperiencePage1;
