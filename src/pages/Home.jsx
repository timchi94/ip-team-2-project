import React from "react";
import "./Home.scss";
import Card from "../components/Card";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { useState, useEffect } from "react";

const Home = () => {
	const navigate = useNavigate();

	// State to control modal visibility
	const [isModalVisible, setModalVisible] = useState(false);

	const location = useLocation();
	const surveyComplete = location.state?.surveyComplete;

	useEffect(() => {
		// Check if the modal has been shown before in the current session
		const modalShown = sessionStorage.getItem("modalShown");

		if (!modalShown) {
			// Show modal if it hasn't been displayed yet
			setModalVisible(true);
			// Set a flag in session storage to prevent future displays
			sessionStorage.setItem("modalShown", "true");
		}
	}, []);

	const closeModal = () => {
		setModalVisible(false);
	};

	const mockData = [
		{
			id: 1,
			title: "Indian River, Michigan, US",
			distance: "124 km away",
			rating: 4.97,
			price: "$503 CAD night",
			date: "Dec. 3–8",
			image: "src/assets/pexels-bertellifotografia-2980955.jpg", // Replace with actual URLs
		},
		{
			id: 2,
			title: "Campbellsport, Wisconsin, US",
			distance: "439 km away",
			rating: 4.93,
			price: "$410 CAD night",
			date: "Dec. 3–8",
			image: "src/assets/pexels-jplenio-2816284.jpg",
		},
		{
			id: 3,
			title: "Innisfil, Canada",
			distance: "450 km away",
			rating: 4.87,
			price: "$210 CAD night",
			date: "Dec. 1–6",
			image: "src/assets/pexels-sebastian-palomino-933481-1862402.jpg",
		},
		{
			id: 4,
			title: "Elkhart Lake, Wisconsin, US",
			distance: "413 km away",
			rating: 4.92,
			price: "$355 CAD night",
			date: "Dec. 9–15",
			image: "src/assets/pexels-betchtyblades-2480608.jpg",
		},
		{
			id: 5,
			title: "Evart, Michigan, US",
			distance: "288 km away",
			rating: 4.92,
			price: "$215 CAD night",
			date: "Jan. 5–10",
			image: "src/assets/pexels-bianeyre-1560065.jpg",
		},
		{
			id: 6,
			title: "Aspen, Colorado, US",
			distance: "1,200 km away",
			rating: 4.89,
			price: "$480 CAD night",
			date: "Jan. 12–17",
			image: "src/assets/pexels-ali-muftuogullari-1151175-2282445.jpg",
		},
		{
			id: 7,
			title: "Banff, Alberta, Canada",
			distance: "900 km away",
			rating: 4.95,
			price: "$350 CAD night",
			date: "Feb. 1–6",
			image: "src/assets/pexels-isabella-mendes-107313-1795508.jpg",
		},
		{
			id: 8,
			title: "Lake Tahoe, California, US",
			distance: "2,500 km away",
			rating: 4.84,
			price: "$420 CAD night",
			date: "Feb. 10–15",
			image: "src/assets/pexels-pixabay-314937.jpg",
		},
		{
			id: 9,
			title: "Quebec City, Quebec, Canada",
			distance: "540 km away",
			rating: 4.88,
			price: "$290 CAD night",
			date: "Mar. 3–8",
			image: "src/assets/pexels-stuthnagyniki-1694360.jpg",
		},
		{
			id: 10,
			title: "Sedona, Arizona, US",
			distance: "2,000 km away",
			rating: 4.91,
			price: "$310 CAD night",
			date: "Mar. 12–17",
			image: "src/assets/pexels-fotios-photos-3820420.jpg",
		},
		{
			id: 11,
			title: "Charleston, South Carolina, US",
			distance: "1,800 km away",
			rating: 4.93,
			price: "$330 CAD night",
			date: "Apr. 1–6",
			image: "https://via.placeholder.com/400",
		},
		{
			id: 12,
			title: "Victoria, British Columbia, Canada",
			distance: "3,000 km away",
			rating: 4.9,
			price: "$400 CAD night",
			date: "Apr. 10–15",
			image: "https://via.placeholder.com/400",
		},
		{
			id: 13,
			title: "Newport, Rhode Island, US",
			distance: "600 km away",
			rating: 4.86,
			price: "$275 CAD night",
			date: "May 5–10",
			image: "https://via.placeholder.com/400",
		},
		{
			id: 14,
			title: "Bar Harbor, Maine, US",
			distance: "700 km away",
			rating: 4.94,
			price: "$260 CAD night",
			date: "May 12–17",
			image: "https://via.placeholder.com/400",
		},
		{
			id: 15,
			title: "Whistler, British Columbia, Canada",
			distance: "2,800 km away",
			rating: 4.97,
			price: "$450 CAD night",
			date: "Jun. 1–6",
			image: "https://via.placeholder.com/400",
		},
	];

	return (
		<div className="home__position">
			<div className="home">

				<header className="home-header">
					<div className="airbnb__logo-container">
						<svg
							enable-background="new 0 0 1991.3 2143.2"
							viewBox="0 0 1991.3 2143.2"
							xmlns="http://www.w3.org/2000/svg"
							className="airbnblogo"
						>
							<path
								d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z"
								fill="#ff385c"
							/>
						</svg>{" "}
						<h1 className="airbnb-title">airbnb</h1>
					</div>
					<div className="airbnb__field">
						<p>Stays</p>
						<p>Experiences</p>
						<div className={`airbnb__survey-container ${surveyComplete ? "airbnb__survey-container--complete" : ""}`}>
							<Link to="survey"><button className="airbnb__survey">S</button></Link>
							{surveyComplete && (
								<div>
									<p className="airbnb__complete">thank you</p>
									<span className="airbnb__complete--span">Your response has been saved</span>
								</div>
							)}
						</div>
					</div>
					<div>
						<img src="src/assets/Screenshot 2024-11-26 203741.png"></img>
					</div>
				</header>

				<div className="airbnb__search">
					<img src="src/assets/Screenshot 2024-11-26 203429.png"></img>
				</div>

				<nav>
					<ul className="filters">
						<img className="filters__image" src="src/assets/Screenshot 2024-11-26 203909.png"></img>
					</ul>
				</nav>
				<main className="home-grid">
					{mockData.map((item) => (
						<Card key={item.id} data={item} />
					))}
				</main>
			</div>
		</div>
	);
};

export default Home;
