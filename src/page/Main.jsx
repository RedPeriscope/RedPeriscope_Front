import React from "react";
import { styled } from "styled-components";
import SimpleSlider from "../components/SimpleSlider";
import NavBar from "../components/NavBar";
import CategoryBar from "../components/CategoryBar";


const Main = () => {
	const backgroundImageUrl = require("../img/mainBackgroundImg.png");

	return (
		<Container backgroundImageUrl={backgroundImageUrl}>
			<MainContent>
				<NavBar />
				<CategoryBarDiv />
				<CategoryBarDiv />
				<CategoryBarDiv />
				<PlanDiv>
					<CategoryBarDiv />
					<PlanList>
						<SimpleSlider />
					</PlanList>
					<ButtonDiv>
						<SeeAllButton>전체보기</SeeAllButton>
					</ButtonDiv>
				</PlanDiv>
			</MainContent>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${(props) => props.backgroundImageUrl});
	background-size: contain;
	background-repeat: no-repeat;
`;

const MainContent = styled.div`
	width: 100%;
	height: 100vh;
	border: 1px solid;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const CategoryBarDiv = styled.div`
	width: 90%;
	height: 5vh;
	background-color: white;
	border: 1px solid;
`;

const PlanDiv = styled.div`
	width: 100%;
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border: 1px solid;
`;

const PlanList = styled.div`
	width: 90%;
	height: 55vh;
	display: flex;
`;

const ButtonDiv = styled(CategoryBarDiv)`
	height: 8vh;
	display: flex;
	justify-content: flex-end; /* 버튼을 오른쪽으로 정렬 */
	align-items: center;
`;

const SeeAllButton = styled.button`
	background-color: #007bff;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
`;

export default Main;
