import React from "react";
import Routers from "./Routers";
import GlobalStyle from "./GlobalStyles";
import { RecoilRoot } from "recoil";

const App = () => {
	return (
		<RecoilRoot>
			<div>
				<GlobalStyle />
				<Routers />
			</div>
		</RecoilRoot>
	);
};

export default App;
