import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Plan from "../components/Plan";

const Allplan = () => {
  const imgUrl = require("../img/PlanImage.png");

  const itemsPerPage = 8; // 페이지당 보여줄 아이템 수
  const itemsPerPageGroup = 5;

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageGroup, setCurrentPageGroup] = useState(1);

  // 가상의 더미 데이터 추가 함수
  const addDummyData = () => {
    const newItems = Array.from(
      { length: itemsPerPage * 11 },
      (_, index) => ({
        id: items.length + index + 1,
        url: imgUrl,
      })
    );

    setItems(newItems);
  };

  if (items.length === 0) {
    addDummyData();
  }

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const totalPageGroups = Math.ceil(totalPages / itemsPerPageGroup);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageGroupChange = (newPageGroup) => {
    setCurrentPageGroup(newPageGroup);
  };

  const startPage = (currentPageGroup - 1) * itemsPerPageGroup + 1;
  const endPage = Math.min(startPage + itemsPerPageGroup - 1, totalPages);

  return (
    <Container>
      <NavBar />
      <PlanContainer>
        {items
          .slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )
          .map((item) => (
            <Plan key={item.id} imageUrl={item.url} />
          ))}
      </PlanContainer>
      <Pagination>
        {currentPageGroup > 1 && (
          <ArrowButton onClick={() => handlePageGroupChange(currentPageGroup - 1)}>
            &lt; Prev
          </ArrowButton>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <PageButton
            key={startPage + index}
            isActive={startPage + index === currentPage}
            onClick={() => handlePageChange(startPage + index)}
          >
            {startPage + index}
          </PageButton>
        ))}
        {currentPageGroup < totalPageGroups && (
          <ArrowButton onClick={() => handlePageGroupChange(currentPageGroup + 1)}>
            Next &gt;
          </ArrowButton>
        )}
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const PlanContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  background-color: ${(props) => (props.isActive ? "black" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "#333")};
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
`;
const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
export default Allplan;
