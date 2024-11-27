import React from "react";
import "./JustExperiencePage.scss";
import image from "../assets/image 9.png";
import { useNavigate } from "react-router-dom"

const JustExperiencePage = () => {
    const navigate = useNavigate();
    return (
        <div className="perfect-listing">
            {/* Split Content Section */}
            <div className="content">
                {/* Left Side: Circular Faces */}
                <div className="left-section">
                    <img src={image} alt="Faces" className="circle-background" />
                </div>

                {/* Right Side: Icon */}
                <div className="right-section">
                    <div className="icon-background">
                        <span className="icon">🎓</span>
                    </div>
                </div>
            </div>

            {/* Text and Buttons */}
            <div className="text-section">
                <h1>Learn how to create the perfect listing</h1>
                <p>
                    Match with a super host, or take our quick 5 minute experience
                    university to make sure your listing gets seen. You can also complete
                    this later.
                </p>

                {/* Buttons */}
                <div className="buttons">
                    <button className="button-outline">Start on your own</button>
                    <button className="button-dark">Match with a super host</button>
                    <button
                        className="button-primary"
                        onClick={() => navigate("/experience/1")} 
                        Experience university>Experience university</button>
                </div>
            </div>
        </div>
    );
};

export default JustExperiencePage;
