import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import TravelSurvey from "./components/TravelSurvey/TravelSurvey";
import SurveyScaffolding from "./pages/SurveyScaffolding";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/browse" element={<Browse />}></Route>
					<Route path="/survey" element={<TravelSurvey />}></Route>
					<Route path="/survey/1" element = {<SurveyScaffolding />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
