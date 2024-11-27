import { surveyData } from "./survey_json";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./TravelSurvey.scss"; // Import your custom Sass styles

function TravelSurvey() {
  const [currentPage, setCurrentPage] = useState(0);

  const initialValues = surveyData.reduce((acc, section) => {
    section.questions.forEach((question) => {
      acc[question.name] = null; // Default value null for all questions
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

  return (
    <div className="survey-container">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => (
          <Form>
            <div className="survey-section">
              <h3 className="survey-section__title">
                {surveyData[currentPage].section}
              </h3>
              {surveyData[currentPage].questions.map((question, index) => {
                const isYesNoQuestion = question.type === "radio";

                return (
                  <div key={index} className="survey-question">
                    <label className="survey-question__title">
                      {question.label}
                    </label>
                    <div className="survey-question__input">
                      {isYesNoQuestion ? (
                        question.options.map((option) => (
                          <label
                            key={option}
                            className={`survey-rating__button ${values[question.name] === option
                                ? "survey-rating__button--active"
                                : ""
                              }`}
                          >
                            <Field
                              type="radio"
                              name={question.name}
                              value={option}
                              className="survey-rating__input"
                              onChange={() =>
                                setFieldValue(question.name, option)
                              }
                            />
                            {option}
                          </label>
                        ))
                      ) : (
                        <div className="survey-slider">
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="1"
                            value={values[question.name] || 3}
                            onChange={(e) =>
                              setFieldValue(question.name, parseInt(e.target.value, 10))
                            }
                            className="survey-slider__input"
                          />
                          <div className="survey-slider__values">
                            {[1, 2, 3, 4, 5].map((value) => (
                              <span
                                key={value}
                                className={`survey-slider__value ${values[question.name] === value
                                    ? "survey-slider__value--active"
                                    : ""
                                  }`}
                              >
                                {value}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
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
          </Form>
        )}
      </Formik>
    </div>
  );
}


export default TravelSurvey;