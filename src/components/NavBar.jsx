import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

const NavBar = () => {
	const LogoImageUrl = require("../img/Logo.png");
	const TitleLogoImageUrl = require("../img/TitleLogo.png");
	const navigate = useNavigate();

	return (
		<Container>
			<LeftContent>
				<ApplyBtn
					onClick={() => {
						navigate("/");
					}}
				>
					오프너 지원하기
				</ApplyBtn>
			</LeftContent>
			<CenterContent>
				<TitleLogoImg src={TitleLogoImageUrl} />
			</CenterContent>
			<RightContent>
				<LogoImg src={LogoImageUrl} />
			</RightContent>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 15vh;
	display: flex;
	justify-content: space-between; /* 컨텐츠 간 간격을 최대화하여 가장 좌측과 우측에 배치 */
	align-items: center; /* 수직 중앙 정렬 */
	padding: 0 50px; /* 좌우 여백 추가 */
`;

const LeftContent = styled.div`
	display: flex;
	align-items: center; /* 수직 중앙 정렬 */
`;

const ApplyBtn = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid white;
	color: white;
	font-size: 18px;
	font-weight: bold;
	padding: 6px;
	cursor: pointer;
`;

const CenterContent = styled.div`
	flex: 1; /* 가운데 컨텐츠가 남은 공간을 모두 차지하도록 설정 */
	display: flex;
	justify-content: center; /* 가운데 정렬 */
	align-items: center; /* 수직 중앙 정렬 */
`;

const RightContent = styled.div`
	display: flex;
	align-items: center; /* 수직 중앙 정렬 */
`;

const TitleLogoImg = styled.img`
	max-height: 100%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

const LogoImg = styled.img`
	max-height: 100%;
`;

export default NavBar;
