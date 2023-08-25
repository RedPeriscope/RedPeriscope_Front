import React from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { SelectedCategory } from "../atom/SelectedCategory";

// 버튼에 체크기능을 추가
function SelectedCategoryBox(props) {
	return (
		<CategoryButton id={props.name} name={props.name}>
			#{props.name}
		</CategoryButton>
	);
}
export default SelectedCategoryBox;

const CategoryButton = styled.button`
	float: left;
	margin: 5px;
	padding: 5px 10px;
	border-radius: 10px;
	border: none;
	background-color: white;
	color: black;
	font-family: "Pretendard";
	font-weight: 500;
	font-size: 15px;
	text-align: center;
	white-space: pre;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5), inset 0px 0px 10px rgba(0, 0, 0, 0.2);
	&:hover {
		cursor: pointer;
	}
`;
