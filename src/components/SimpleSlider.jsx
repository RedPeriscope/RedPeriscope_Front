import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plan from "./Plan";

const imgUrl = require("../img/PlanImage.png");

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

export default class SimpleSlider extends Component {
	render() {
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
					{items.map((item) => (
						<Plan
							key={item.id}
							imageUrl={imgUrl}
							title={item.title}
							author={item.leader.userUni}
							due={item.due_date}
						/>
					))}
				</StyledSlider>
			</Container>
		);
	}
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
