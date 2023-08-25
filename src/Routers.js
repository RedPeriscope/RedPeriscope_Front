import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Allplan from "./page/Allplan";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Main/>} />
			<Route path="/all" element={<Allplan />} />
		</Routes>
	);
};

export default Routers;
