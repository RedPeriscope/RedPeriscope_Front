import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client"; // React 18에서 createRoot를 가져옵니다.

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
