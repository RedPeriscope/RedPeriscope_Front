import React from "react";
import { styled } from "styled-components";
import CategoryBar from "../components/CategoryBar";

const Main = () => {

	return (
		<Container>
			<CategoryBar displayProperty="location" />
			<CategoryBar displayProperty="duration" />
			<CategoryBar displayProperty="theme" />
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: gray;
`;

export default Main;