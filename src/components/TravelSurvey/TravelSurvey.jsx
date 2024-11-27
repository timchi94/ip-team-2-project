import { surveyData } from "./survey_json";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./TravelSurvey.scss"; // Import your custom Sass styles

function TravelSurvey() {
  const [currentPage, setCurrentPage] = useState(0);

  // Initialize the form values based on the surveyData
  const initialValues = surveyData.reduce((acc, section) => {
    section.questions.forEach((question) => {
      acc[question.name] = null; // Default value null for ratings or selections
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

  const progressWidth = `${(currentPage / (surveyData.length - 1)) * 100}vw`;

  return (
    <div className="survey-container">
      <h2>Travel Preferences Survey</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => (
          <Form>
            <div className="survey-section">
              <h3 className="survey-section__title">
                {surveyData[currentPage].section}
              </h3>
              {surveyData[currentPage].questions.map((question, questionIndex) => {
                // Check if the question is a "Yes/No" question
                const isYesNoQuestion = question.type === "radio";

                return (
                  <div key={questionIndex} className="survey-question">
                    <label className="survey-question__title">{question.label}</label>
                    <div className="survey-question__rating">
                      {isYesNoQuestion ? (
                        // Render Yes/No radio buttons for the "Yes/No" questions
                        question.options.map((option) => (
                          <label key={option} className="survey-rating__button">
                            <Field
                              type="radio"
                              name={question.name}
                              value={option}
                              className="survey-rating__input"
                              onChange={() => setFieldValue(question.name, option)}
                            />
                            {option}
                          </label>
                        ))
                      ) : (
                        // Render the rating buttons (1-5) for other questions
                        [1, 2, 3, 4, 5].map((rating) => (
                          <label
                            key={rating}
                            className={`survey-rating__button ${values[question.name] === rating ? "survey-rating__button--active" : ""
                              }`}
                          >
                            <Field
                              type="radio"
                              name={question.name}
                              value={rating}
                              className="survey-rating__input"
                              onChange={() => setFieldValue(question.name, rating)}
                            />
                            {rating}
                          </label>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="survey-navigation">
              {currentPage > 0 && (
                <button type="button" onClick={handlePrevious} className="survey-button">
                  Previous
                </button>
              )}
              {currentPage < surveyData.length - 1 ? (
                <button type="button" onClick={handleNext} className="survey-button">
                  Next
                </button>
              ) : (
                <button type="submit" className="survey-button">
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>

      {/* Progress bar at the bottom */}
      <div className="progress-bar" style={{ width: progressWidth }} />
    </div>
  );
}

export default TravelSurvey;