import React, { useState } from "react";
import "./ExperiencePage2.scss";
import { surveyData } from "../components/TravelSurvey/survey_json";

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

const ExperiencePage2 = () => {
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
      <h1>Which of these best describes your experiences?</h1>
      <p className="subtitle">
        Make sure to provide extra details for why your experience is special!
      </p>

      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${
              selectedCategory === category.id ? "selected" : ""
            }`}
            onClick={() => handleCategorySelect(category.id)}
          >
            <span className="icon">{category.icon}</span>
            <p>{category.label}</p>
          </div>
        ))}
      </div>

      <div className="special-detail">
        <label htmlFor="specialDetail">
          What's special about this experience
        </label>
        <input
          type="text"
          id="specialDetail"
          placeholder="Example (Tours): Experience Rome from the perspective of a local."
          value={specialDetail}
          onChange={(e) => setSpecialDetail(e.target.value)}
        />
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
                    <button type="submit" className="survey-button survey-button--next">
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </footer>
    </div>
  );
};

export default ExperiencePage2;
