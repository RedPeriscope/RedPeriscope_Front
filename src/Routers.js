import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Allplan from "./page/Allplan";
import PlanDetail from "./page/PlanDetail";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Main/>} />
			<Route path="/all" element={<Allplan />} />
			<Route path="/detail" element={<PlanDetail />} />
		</Routes>
	);
};

export default Routers;
