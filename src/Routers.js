import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Allplan from "./page/Allplan";
import PlanDetail from "./page/PlanDetail";
import Register from "./page/Register";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Main/>} />
			<Route path="/all" element={<Allplan />} />
			<Route path="/detail" element={<PlanDetail />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};

export default Routers;
