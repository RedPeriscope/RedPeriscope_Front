import React from "react";
import styled from "styled-components";
import { FiZoomIn } from "react-icons/fi";

const Plan = ({ imageUrl }) => {
	return (
		<PlanContainer>
			<ImageDiv>
				<Image src={imageUrl} />
			</ImageDiv>
			<ZoomIcon>
				<FiZoomIn />
			</ZoomIcon>
			<Description></Description>
		</PlanContainer>
	);
};

const PlanContainer = styled.div`
	width: 280px;
	height: 340px;
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

export default Plan;
