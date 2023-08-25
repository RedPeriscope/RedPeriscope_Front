import React, { useState } from "react";
import styled from "styled-components";
import { BsZoomIn } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import { SelectedCategory } from "../atom/SelectedCategory";

const Plan = (props) => {
	const [hovered, setHovered] = useState(false);
	const navigate = useNavigate();
	const allCategories = useRecoilValue(SelectedCategory).all;

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
			<ImageAndDescriptionWrapper ishovered={hovered ? "true" : "false"}>
				<ImageDiv>
					<Image src={props.imageUrl} />
				</ImageDiv>
				<Description>
					<TripTitle>
						<Title>{props.title}</Title>
					</TripTitle>
					<TripTag>
						{allCategories.length > 0 ? (
							<TripTagText>#{allCategories.join(", ")}</TripTagText>
						) : null}
					</TripTag>
					<TripInfo>
						<Author>{props.author}</Author>
						<Due>{props.due}</Due>
					</TripInfo>
				</Description>
			</ImageAndDescriptionWrapper>
			<ZoomIcon
				onClick={() => {
					navigate(`/detail/`);
				}}
				style={{
					opacity: hovered ? 1 : 0,
				}}
			>
				<BsZoomIn />
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

	filter: ${({ ishovered }) => (ishovered === "true" ? "blur(5px)" : "none")};
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

const TripTitle = styled.div`
	width: 100%;
	height: 40%;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 10px;
	font-weight: bold;
	font-size: 20px;
	width: 100%;
	height: 100%;
`;
const TripTag = styled.div`
	flex: 1;
	width: 100%;
	height: 30%;
`;
const TripTagText = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 10px;
	font-weight: bold;
	font-size: 11px;
	width: 100%;
	height: 100%;
`;
const TripInfo = styled.div`
	flex: 1;
	width: 100%;
	height: 25%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Author = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 10px;
	font-weight: bold;
	font-size: 12px;
	width: 100%;
	height: 100%;
`;
const Due = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 10px;
	font-weight: bold;
	font-size: 12px;
	width: 100%;
	height: 100%;
`;
export default Plan;
