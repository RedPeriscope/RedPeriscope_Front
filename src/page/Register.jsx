import React, { useState } from "react";
import { styled } from "styled-components";
import NavBar from "../components/NavBar";
import { AiOutlineCalendar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { FiMap } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";
import { BiWon } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { AiFillDownCircle } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar2 from "../components/NavBar2";

const Register = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
      <NavBar2 />
      <DetailContainer>
        <Title>오프너 지원 상세페이지 작성</Title>
        <Label>제목</Label>
        <DetailInput placeholder="제목 입력" />
        <Label># (필수) 필터링 해시태그 선택</Label>
        <DetailInput/>
        <Label># (선택) 해시태그 입력</Label>
        <DetailInput />
        <Label>홍보이미지 삽입</Label>
        <DetailInput placeholder="(이미지 이름)" />
        <Label>
            <BsPencil />
            상세 내용
        </Label>
        <DescriptionInput placeholder="내용 작성" />
        <Label>
          <AiOutlineCalendar /> 모집 기한
        </Label>
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <Label>
          <CgProfile /> 예상 모집 인원
        </Label>
        <DetailInput placeholder="명" />
        <Label>
          <BiWon /> 예상 비용(1인당)
        </Label>
        <DetailInput placeholder="원" />
        <Label>
          <GrLocation /> 방문 장소
        </Label>
        <LargerDetails>
          <LocationInput placeholder="장소 입력" />
          <br />
          <BsFillArrowRightCircleFill color="skyblue" />
          <LocationInput placeholder="장소 입력" />
          <br />
          <BsFillArrowRightCircleFill color="skyblue" />
          <LocationInput placeholder="장소 입력" />
          <br />
          <BsFillArrowRightCircleFill color="skyblue" />
          <LocationInput placeholder="장소 입력" />
        </LargerDetails>
        <Label>
          <FiMap /> 예상 숙소 지역
        </Label>
        <DetailInput placeholder="지역 입력" />
        <Label>
          <AiFillMail color="skyblue" />
          문의함 링크
        </Label>
        <DetailInput placeholder="문의받을 오픈카카오톡 채팅방 주소 입력" />
        <Label>
        <AiFillDownCircle color="skyblue" />
        지원함 링크
        </Label>
        <DetailInput placeholder="지원받을 구글 설문폼 주소 입력" />
        <ButtonContainer>
          <Button2>게시하기</Button2>
        </ButtonContainer>
      </DetailContainer>
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

const DetailContainer = styled.div`
  width: 80%;
  height: 2600px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid skyblue;
  margin: 100px;
`;

const Title = styled.div`
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 20px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
`;

const TagBox = styled.div``;

const TitleText = styled.div``;

const ImageBox = styled.div`
  height: 500px;
  border: 1px solid;
  border-radius: 10px;
  align-items: center;
  margin: 20px;
`;

const DescriptionInput = styled.input`
  height: 400px;
  width: 94%;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
`;

const Label = styled.div`
  font-weight: 800px;
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DetailInput = styled.input`
  border-radius: 10px;
  margin: 20px;
  height: 70px;
  width: 94%;
  border: none;
  padding: 10px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
`;

const LargerDetails = styled.div`
  border-radius: 10px;
  margin: 20px;
  height: 200px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
  align-items: center;
  padding: 15px;
  padding-top: 5px;
`;

const LocationInput = styled.input`
  border: none;
  margin: 15px;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Button1 = styled.button`
  width: 100px;
  height: 30px;
  color: skyblue;
  background-color: white;
  border: 1px solid skyblue;
  border-radius: 5px;
`;

const Button2 = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  background-color: skyblue;
  border: 1px solid skyblue;
  border-radius: 5px;
`;
export default Register;
