import React from "react";
import { styled } from "styled-components";

const Main = () => {

	return (
		<Container>
			hi
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