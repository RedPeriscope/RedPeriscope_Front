import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Main/>} />
		</Routes>
	);
};

export default Routers;
