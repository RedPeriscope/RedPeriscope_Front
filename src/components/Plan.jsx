import React, { useState } from "react";
import styled from "styled-components";
import { FiZoomIn } from "react-icons/fi";

const Plan = ({ imageUrl }) => {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<PlanContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<ImageAndDescriptionWrapper isHovered={hovered}>
				<ImageDiv>
					<Image src={imageUrl} />
				</ImageDiv>
				<Description></Description>
			</ImageAndDescriptionWrapper>
			<ZoomIcon
				style={{
					opacity: hovered ? 1 : 0,
				}}
			>
				<FiZoomIn />
			</ZoomIcon>
		</PlanContainer>
	);
};

const PlanContainer = styled.div`
	z-index: 1;
	width: 260px;
	height: 320px;
	margin: 0, 30px;
	background-color: white;
	border: 1px solid;
	border-radius: 22px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

const ImageAndDescriptionWrapper = styled.div`
	width: 95%;
	height: 60%;
	border-radius: 22px;
	position: relative;
	transition: filter 0.3s;

	${({ isHovered }) =>
		isHovered &&
		`
		filter: blur(5px);
	`}
`;

const ImageDiv = styled.div`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const ZoomIcon = styled.div`
	z-index: 10;
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
	width: 100%;
	height: 60%;
	border: 1px solid;
`;

export default Plan;
