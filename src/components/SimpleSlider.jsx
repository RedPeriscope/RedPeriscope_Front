import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plan from "./Plan";
import axios from "axios";
import { useRecoilState } from "recoil";
import { SelectedCategory } from "../atom/SelectedCategory";

const imgUrl = require("../img/PlanImage.png");

export default function SimpleSlider() {
	const [item, setItem] = useState([]);
	const [category, setCategory] = useRecoilState(SelectedCategory); // 선택한 아이템 저장을 위한 state

	const items = [
		{
			id: 2,
			leader: {
				userSex: "",
				userAge: 0,
				userNation: "",
				selfIntro: "",
				language: [],
				userUni: "",
				userSNS: "",
			},
			title: "홍대",
			image: null,
			created_at: "2023-08-26",
			due_date: "2023-08-26",
			trip_intro: "홍대투어",
			trip_detail: "수정",
			trip_places: "이스케이프",
			trip_accmdtn: "에어비엔비",
			google_form:
				"https://www.reddit.com/r/djangolearning/comments/mu5kh3/what_does_managepy_migrate_runsyncdb_actually_do/?rdt=39614",
			region: "R1",
			period: "P1",
			theme: "T1",
			estimated_cost: 1560,
		},
		{
			id: 3,
			leader: {
				userSex: "",
				userAge: 0,
				userNation: "",
				selfIntro: "",
				language: [],
				userUni: "",
				userSNS: "",
			},
			title: "홍대가보자",
			image: null,
			created_at: "2023-08-26",
			due_date: "2023-08-26",
			trip_intro: "홍대투어",
			trip_detail: "방탈출",
			trip_places: "이스케이프",
			trip_accmdtn: "에어비엔비",
			google_form:
				"https://www.reddit.com/r/djangolearning/comments/mu5kh3/what_does_managepy_migrate_runsyncdb_actually_do/?rdt=39614",
			region: "R1",
			period: "P1",
			theme: "T1",
			estimated_cost: 1560,
		},
		{
			id: 4,
			leader: {
				userSex: "",
				userAge: 0,
				userNation: "",
				selfIntro: "",
				language: [],
				userUni: "",
				userSNS: "",
			},
			title: "제발 돼라",
			image: null,
			created_at: "2023-08-26",
			due_date: "2023-08-26",
			trip_intro: "홍대투어",
			trip_detail: "수정 윤태호",
			trip_places: "이스케이프",
			trip_accmdtn: "에어비엔비",
			google_form:
				"https://www.reddit.com/r/djangolearning/comments/mu5kh3/what_does_managepy_migrate_runsyncdb_actually_do/?rdt=39614",
			region: "R1",
			period: "P1",
			theme: "T1",
			estimated_cost: 1560,
		},
	];

	const code = {
		"서울권": "R1",
		"경기/인천": "R2",
		"강원권": "R3",
		"충청권": "R4",
		"전라권": "R5",
		"경상권": "R6",
		"제주도": "R7",

		"당일치기": "P1",
		"3일 이내": "P2",
		"일주일 이내": "P3",
		"일주일 이상": "P4",

		"힐링": "T1",
		"K-문화체험": "T2",
		"유적지 탐방": "T3",
		"식도락": "T4",
		"패션쇼핑": "T5",
	}

	useEffect(() => {
		// 데이터를 비동기적으로 가져오는 함수
		async function fetchData() {
			try {
				// 동적으로 request body를 구성
				const requestBody = {"region":"","period":"","theme":"",};

				// category.all 필드가 비어있지 않다면 해당 필드 추가
				if (category.all.length > 0) {
					requestBody["region"] = code[category.location[0]] || "";
					requestBody["period"] = code[category.duration[0]] || "";
					requestBody["theme"] = code[category.theme[0]] || "";
				}

				// Axios GET 요청을 보낼 때 request body를 설정
				const response = await axios.get(
					"https://dd0709.pythonanywhere.com/trip/",
					{
						params: requestBody,
					}
				);

				setItem(response.data);
				console.log(response, requestBody);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		// fetchData 함수 호출
		fetchData();
	}, [category]); // category가 변경될 때마다 호출

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4.2,
		slidesToScroll: 2,
		arrow: true,
		centerMode: false,
	};

	return (
		<Container>
			<StyledSlider {...settings}>
				{item.map((item) => (
					<Plan
						key={item.id}
						imageUrl={imgUrl}
						title={item.title}
						author={item.leader.userFullName}
						due={item.due_date}
					/>
				))}
			</StyledSlider>
		</Container>
	);
}

const Container = styled.div`
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

const StyledSlider = styled(Slider)`
	.slick-slide div {
		outline: none;
	}
`;
