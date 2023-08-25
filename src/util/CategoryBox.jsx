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
    #{props.name}
    </CategoryButton>
  );
}
export default CategoryBox;

const CategoryButton = styled.button`
  float: left;
  margin: 5px;
  padding: 20px;
  border-radius: 20px;
  border: none;
  background-color: white;
  color: black;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  white-space: pre;
  box-shadow: ${(props) => props.checked ? 'inset 0px 0px 10px rgba(0, 0, 0, 1)' : '0px 0px 10px rgba(0, 0, 0, 1), inset 0px 0px 10px rgba(0, 0, 0, 0.2)'};

  &:hover {
    cursor: pointer;
  }
`;
