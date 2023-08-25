import React from "react";
import { styled } from "styled-components";
import SimpleSlider from "../components/SimpleSlider";
import NavBar from "../components/NavBar";
import CategoryBar from "../components/CategoryBar";
import SelectedCategoryBar from "../components/SelectedCategoryBar";

const Main = () => {
	const backgroundImageUrl = require("../img/mainBackgroundImg.png");

	return (
		<Container backgroundImageUrl={backgroundImageUrl}>
			<MainContent>
				<NavBar />
				<CategoryBarDiv>
					<CategoryType>
						지역 |
					</CategoryType>
					<CategoryBar displayProperty="location" />
				</CategoryBarDiv>
				<CategoryBarDiv>
				<CategoryType>
						기간 |
					</CategoryType>
					<CategoryBar displayProperty="duration" />
				</CategoryBarDiv>
				<CategoryBarDiv>
				<CategoryType>
						테마 |
					</CategoryType>
					<CategoryBar displayProperty="theme" />
				</CategoryBarDiv>
				<PlanDiv>
					<CategoryBarDiv>
						<SelectedCategoryBar />
					</CategoryBarDiv>
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
	height: 8vh;
	display: flex;
	justify-content: flex-start;
`;

const CategoryType = styled.div`
	width: 10%;
	height: 8vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	color: white;
	font-weight: bold;

`

const PlanDiv = styled.div`
	width: 100%;
	height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
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
	background-color: white;
	color: black;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5), inset 0px 0px 10px rgba(0, 0, 0, 0.2);
	border: none;
	font-size: 20px;
	padding: 5px 15px;
	margin-bottom: 20px;
	border-radius: 5px;
	cursor: pointer;
`;

export default Main;
