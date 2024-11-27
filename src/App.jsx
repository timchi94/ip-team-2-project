import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import TravelSurvey from "./components/TravelSurvey/TravelSurvey";
import ExperiencePage from "./pages/ExperiencePage2";
import ExperiencePage2 from "./pages/ExperiencePage2";
import JustExperiencePage from "./pages/JustExperiencePage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/browse" element={<Browse />}></Route>
					<Route path="/survey" element={<TravelSurvey />}></Route>
					<Route path="/experience" element={<JustExperiencePage />}></Route>
					<Route path="/experience/2" element={<ExperiencePage2/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
