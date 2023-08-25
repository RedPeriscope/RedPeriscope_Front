import React, { useEffect } from "react";
import { styled } from "styled-components";
import NavBar from "../components/NavBar";
import { AiOutlineCalendar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { FiMap } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";
import { BiWon } from "react-icons/bi";
import SelectedCategoryBar from "../components/SelectedCategoryBar";
import NavBar2 from "../components/NavBar2";
import axios from "axios";

const PlanDetail = () => {
	useEffect(() => {
		// 데이터를 비동기적으로 가져오는 함수
		async function fetchData() {
			try {

				// Axios GET 요청을 보낼 때 request body를 설정
				const response = await axios.get(
					"https://dd0709.pythonanywhere.com/trip/1/",
				);

				console.log(response);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		// fetchData 함수 호출
		fetchData();
	}, []); // category가 변경될 때마다 호출

	return (
		<Container>
			<NavBar2 />
			<DetailContainer>
				<Title>
					<SelectedCategoryBar />
					<TitleText />
					<TitleInfo />
				</Title>
				<ImageBox />
				<Description />
				<Label>
					<AiOutlineCalendar /> 모집 기한
				</Label>
				<Details />
				<Label>
					<CgProfile /> 예상 모집 인원
				</Label>
				<Details />
				<Label>
					<BiWon /> 예상 비용(1인당)
				</Label>
				<Details />
				<Label>
					<GrLocation /> 방문 장소
				</Label>
				<LargerDetails />
				<Label>
					<FiMap /> 예상 숙소 지역
				</Label>
				<Details />
				<Label>
					<BiHeadphone /> 오프너 자기소개
				</Label>
				<LargerDetails />
			</DetailContainer>
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
	background-size: contain;
	background-repeat: no-repeat;
`;

const DetailContainer = styled.div`
	width: 80%;
	height: 2300px;
	align-items: center;
	border-radius: 10px;
	border: 0.5px solid skyblue;
	margin: 100px;
`;

const Title = styled.div`
	height: 200px;
	border-radius: 10px;
	align-items: center;
	margin: 20px;
	box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
	display: flex;
	flex-direction: column;
	padding: 5px 10px;
`;

const TitleText = styled.div`
	width: 100%;
	height: 300px;
	border: 1px solid;
`;

const TitleInfo = styled.div`
	width: 100%;
	height: 100px;
	border: 1px solid;
`;

const ImageBox = styled.div`
	height: 500px;
	border: 1px solid;
	border-radius: 10px;
	align-items: center;
	margin: 20px;
`;

const Description = styled.div`
	height: 400px;
	align-items: center;
	margin: 20px;
	border-radius: 10px;
	box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
`;

const Label = styled.div`
	font-weight: 800px;
	margin: 20px;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Details = styled.div`
	border-radius: 10px;
	margin: 20px;
	height: 70px;
	box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
`;

const LargerDetails = styled.div`
	border-radius: 10px;
	margin: 20px;
	height: 200px;
	box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const Button1 = styled.button`
	width: 100px;
	height: 30px;
	color: skyblue;
	background-color: white;
	border: 1px solid skyblue;
	border-radius: 5px;
`;

const Button2 = styled.button`
	width: 100px;
	height: 30px;
	color: white;
	background-color: skyblue;
	border: 1px solid skyblue;
	border-radius: 5px;
`;

export default PlanDetail;
