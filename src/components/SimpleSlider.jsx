import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
						<Plan key={item.id} imageUrl={item.url} />
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
