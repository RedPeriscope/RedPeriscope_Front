import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiZoomIn } from "react-icons/fi";
import Plan from "./Plan";

const imgUrl = require("../img/PlanImage.png");

const items = [
	{ id: 1, url: imgUrl },
	{ id: 2, url: imgUrl },
	{ id: 3, url: imgUrl },
	{ id: 4, url: imgUrl },
	{ id: 5, url: imgUrl },
	{ id: 6, url: imgUrl },
	{ id: 7, url: imgUrl },
	{ id: 8, url: imgUrl },
	{ id: 9, url: imgUrl },
	{ id: 10, url: imgUrl },
];

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 2,
			arrows: true,
			centerMode: true,
		};
		return (
			<Container>
				<StyledSlider {...settings}>
					{items.map((item) => (
						<Plan key={item.id} imageUrl={item.url} />
					))}
				</StyledSlider>
			</Container>
		);
	}
}

const Container = styled.div`
	overflow: hidden;
	border: 2px solid;
	width: 100%;
	height: 100%;
`;

const StyledSlider = styled(Slider)`
	.slick-slide div {
		outline: none;
	}
`;

const PlanContainer = styled.div`
	width: 240px;
	height: 300px;
	background-color: white;
	border: 1px solid;
	border-radius: 22px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	transition: filter 0.3s;
	position: relative;

	&:hover {
		filter: blur(5px);
	}
`;

const ImageDiv = styled.div`
	width: 95%;
	height: 60%;
	border-radius: 22px;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const ZoomIcon = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2rem;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	cursor: pointer;
`;

const Description = styled.div`
	width: 95%;
	height: 40%;
	border: 1px solid;
`;
