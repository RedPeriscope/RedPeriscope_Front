import React from "react";
import { styled } from "styled-components";

// 버튼에 체크기능을 추가
function CategoryBox(props) {
  const onClick = () => {
    props.onChange(!props.checked);
  };
  return (
    <CategoryButton
      id={props.name}
      name={props.name}
      checked={props.checked}
      onClick={onClick}
    >
    {props.name}
    </CategoryButton>
  );
}
export default CategoryBox;

const CategoryButton = styled.button`
  float: left;
  margin: 5px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid;
  background-color: ${(props) =>
    props.checked ? "pink" : "white" };
  color: ${(props) =>
    props.checked ? "white" : "pink" };
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 50px;
  text-align: center;

  white-space: pre;

  &:hover {
    cursor: pointer;
  }
`;
