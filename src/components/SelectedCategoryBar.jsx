import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CategoryBox from "../util/CategoryBox";
import useCategory from "../hooks/useCategory";
import EachCategory from "../eachitem/category";
import { useRecoilState } from "recoil";
import { SelectedCategory } from "../atom/SelectedCategory";
import SelectedCategoryBox from "./SelectedCategoryBox";

const SelectedCategoryBar = () => {
	const [category, setCategory] = useRecoilState(SelectedCategory); // 선택한 아이템 저장을 위한 state

	useEffect(() => {
		console.log("selected", category);
	}, [category]);

	return (
		<Container>
			<Category>
				{category.map((item) => (
					<SelectedCategoryBox name={item} />
				))}
			</Category>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
    padding: 0 50px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const Category = styled.div`
	display: flex;
	width: 70%;
`;

export default SelectedCategoryBar;
