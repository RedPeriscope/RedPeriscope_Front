import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CategoryBox from "../util/CategoryBox";
import useCategory from "../hooks/useCategory";
import EachCategory from "../eachitem/category";
import axios from "axios";

const CategoryBar = ({displayProperty}) => {
  const [plans, setPlans] = useState([]); //여행 데이터
  const [categoriesData, setCategoriesData] = useState([]); //카테고리 데이터

  useEffect(() => {
    axios
        .get("/data.json")
        .then((response) => {
        setPlans(response.data.information);
        setCategoriesData(plans);

        //카테고리 항목 내보냄
        const categories = response.data.information.reduce(
          (categories, item) => {
            const existingCategory = categories.find(
              (category) => category.name === item[displayProperty]
            );

            if (existingCategory) {
              existingCategory.items.push(item);
            } else {
              categories.push({
                name: item[displayProperty],
                items: [item],
                isChecked: false,
              });
            }
            return categories;
          },
          []
        );
        setCategoryList(categories);
      })
      .catch((error) => {
        console.log("GET 실패", error);
      });
  }, []);

  // 카테고리 전체 선택, 개별 선택 관리를 위해
  const {
    categoryList,
    setCategoryList,
    checkAll,
    checkAllHandler,
    checkHandler,
  } = useCategory([]);

  return (
    <Container>
      <Category>
        <CategoryBox
          id="전체"
          name="전체"
          checked={checkAll}
          onChange={checkAllHandler}
        />
        {categoryList.map((category) => (
          <EachCategory
            key={category.displayProperty}
            category={category}
            categoryClick={checkHandler}
          />
        ))}
      </Category>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 150px;;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin-left: 350px;
  margin-bottom: 50px;
`;

export default CategoryBar;