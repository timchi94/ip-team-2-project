import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Browse from "./pages/Browse";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/browse" element={<Browse />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
