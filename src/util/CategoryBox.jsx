import React from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { SelectedCategory } from "../atom/SelectedCategory";

// 버튼에 체크기능을 추가
function CategoryBox(props) {
	const [category, setCategory] = useRecoilState(SelectedCategory); // 선택한 아이템 저장을 위한 state

	const onClick = () => {
		props.onChange(!props.checked);
		console.log(props.name, props.type);
		if (props.checked) {
			// 이미 체크된 상태면 제거
			setCategory((prevCategory) => ({
				...prevCategory,
				all: prevCategory.all.filter((item) => item !== props.name),
				[props.type]: prevCategory[props.type].filter(
					(item) => item !== props.name
				),
			}));
		} else {
			// 체크되어 있지 않으면 추가
			setCategory((prevCategory) => ({
				...prevCategory,
				all: [...prevCategory.all, props.name],
				[props.type]: [...prevCategory[props.type], props.name],
			}));
		}
	};

	return (
		<CategoryButton
			id={props.name}
			name={props.name}
			checked={props.checked}
			onClick={onClick}
		>
			#{props.name}
		</CategoryButton>
	);
}
export default CategoryBox;

const CategoryButton = styled.button`
	float: left;
	margin: 5px;
	padding: 5px 10px;
	border-radius: 10px;
	border: none;
	background-color: white;
	color: ${(props) => (props.checked ? "gray" : "black")};
	&:hover {
		cursor: pointer;
	}
	font-family: "Pretendard";
	font-weight: 500;
	font-size: 15px;
	text-align: center;
	white-space: pre;
	box-shadow: ${(props) =>
		props.checked
			? "inset 0px 0px 10px rgba(0, 0, 0, 1)"
			: "0px 0px 10px rgba(0, 0, 0, 0.5), inset 0px 0px 10px rgba(0, 0, 0, 0.2)"};

	&:hover {
		cursor: pointer;
	}
`;
