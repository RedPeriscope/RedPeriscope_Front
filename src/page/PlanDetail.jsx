import React, { useEffect, useState } from "react";
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
	const [item, setItem] = useState([]);

	useEffect(() => {
		// 데이터를 비동기적으로 가져오는 함수
		async function fetchData() {
			try {
				// Axios GET 요청을 보낼 때 request body를 설정
				const response = await axios.get(
					"https://dd0709.pythonanywhere.com/trip/1/"
				);
				setItem(response.data);
				console.log(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		// fetchData 함수 호출
		fetchData();
	}, []); // category가 변경될 때마다 호출
	const imgUrl = require("../img/PlanImage.png");

	return (
		<Container>
			<NavBar2 />
			<DetailContainer>
				<Title>
					<SelectedCategoryBar />
					<TitleText>수원 행동궁 여행</TitleText>
					<TitleInfo>김민재 2023-08-26</TitleInfo>
				</Title>
				<ImageBox>
					<img src={imgUrl} alt="Plan" style={{ objectFit: "cover", width:"100%", height:"100%"}} />
				</ImageBox>
				<Description>
					[수원 환상 힐링 패키지] 당신을 지친 일상에서 힐링의 여정으로
					초대합니다. 수원의 조용한 자연 속에서 힐링을 찾을 수 있는 이 패키지는
					온전히 당신에게 집중할 수 있는 시간을 선사합니다. 아침 해돋이를
					맞이하며 산책을 즐기고, 푸른 호수의 물결 소리를 들으며 마음을
					정화하세요. 온천 스파와 명상 프로그램을 통해 신체와 마음을 따뜻하게
					녹여내어 완벽한 힐링을 경험할 수 있습니다.{"\n"} [수원 히스토리 어드벤처
					패키지] 수원은 조선 왕조의 역사적인 유산을 지키는 곳입니다. 이
					패키지에서는 화려한 경복궁과 후원, 그리고 아름다운 화성에서 그 역사의
					흔적을 찾아보세요. 전통적인 한복을 입고 성곽을 걷는 독특한 경험도
					놓치지 마세요. 지식 있는 가이드와 함께하는 투어로 수원의 역사를 깊이
					이해하며 멋진 시간을 보낼 수 있을 것입니다. [수원 맛의 여정 패키지]
					수원은 다양한 맛과 음식 문화로 여러분을 맞이합니다. 이 패키지는 현지
					음식 전문 가이드와 함께 수원의 맛을 탐험하는 여정을 제안합니다. 풍성한
					국내 최고의 음식 시장에서 재료를 골라 직접 요리하고, 현지 주민들과
					함께 식사하는 독특한 경험을 즐기세요. 수원의 다채로운 맛을 만끽하며
					미소와 추억을 나눌 수 있을 것입니다. 수원 여행에서 여러분을 반겨주는
					패키지 중 하나를 선택하여 특별한 경험을 누려보세요. 역사, 자연, 음식
					등 다양한 즐거움이 여러분을 기다리고 있습니다. 수원의 아름다운
					순간들로 여행 가득 채워보세요!
				</Description>
				<Label>
					<AiOutlineCalendar /> 모집 기한
				</Label>
				<Details>2023-08-26</Details>
				<Label>
					<CgProfile /> 예상 모집 인원
				</Label>
				<Details>10</Details>
				<Label>
					<BiWon /> 예상 비용(1인당)
				</Label>
				<Details>130000</Details>
				<Label>
					<GrLocation /> 방문 장소
				</Label>
				<LargerDetails>
					수원화성, 방화수류정, 행리단길, 열기구 탑승
				</LargerDetails>
				<Label>
					<FiMap /> 예상 숙소 지역
				</Label>
				<Details>수원</Details>
				<Label>
					<BiHeadphone /> 오프너 자기소개
				</Label>
				<LargerDetails>
					저는 활발하고 긍정적인 성격을 가진 대학생입니다! 한국대학교에서
					컴퓨터공학을 전공하고 있으며, 뮤지컬 관람과 액티비티가 취미입니다.
				</LargerDetails>
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
	font-size: 50px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleInfo = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10px;
	gap: 30px;
`;

const ImageBox = styled.div`
	height: 500px;
	border: 1px solid;
	border-radius: 10px;
	align-items: center;
	margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	margin: 20px;
	border-radius: 10px;
	box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
	font-size: 18px;
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
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	font-size: 17px;
`;

const LargerDetails = styled.div`
	border-radius: 10px;
	margin: 20px;
	height: 200px;
	box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	font-size: 25px;
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
