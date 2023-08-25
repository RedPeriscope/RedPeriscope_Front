import React, { useState } from "react";
import { styled } from "styled-components";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
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
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [startDate, setStartDate] = useState(new Date());
  const originalDate = new Date(startDate);

  //날짜 형식 변환
  const year = originalDate.getFullYear();
  const month = String(originalDate.getMonth() + 1).padStart(2, "0");
  const day = String(originalDate.getDate()).padStart(2, "0");
  const due_date = `${year}-${month}-${day}`;
  //우선 정적데이터 보냄
  const leader=1;
  const region = "R1";
  const period = "P1";
  const theme = "T1";
  const estimated_num = 10;
  const estimated_cost = 100;

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    const combinedData = {
      ...data,
      due_date,
      leader,
      region,
      period,
      theme,
      estimated_num,
      estimated_cost,
    };
    try {
      const response = await axios.post("https://dd0709.pythonanywhere.com/trip/", combinedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("Data submitted successfully!");
        window.alert("성공적으로 등록되었습니다.");
      } else {
        console.error("Failed to submit data.");
        window.alert("등록에 실패하였습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(combinedData);
  };

  return (
    <Container>
      <NavBar />
        <DetailContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title><span class="highlight">오프너 지원하기 )</span> 상세페이지 작성</Title>

          <Label>제목</Label>
          <DetailInput
            placeholder="제목 입력"
            {...register("title", { required: true })}
          />

          <Label># (필수) 필터링 해시태그 선택</Label>
          <DetailInput />

          <Label># (선택) 해시태그 입력</Label>
          <DetailInput {...register("trip_intro", { required: true })} />

          <Label>홍보이미지 삽입</Label>
          <DetailInput placeholder="(이미지 이름)" type="file" accept="image/*" {...register("image", { required: true })} />

          <Label>
            <BsPencil />
            상세 내용
          </Label>
          <DescriptionInput
            placeholder="내용 작성"
            {...register("trip_detail", { required: true })}
          />

          <Label>
            <AiOutlineCalendar /> 모집 기한
          </Label>
          <CalContainer>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          </CalContainer>

          <Label>
            <CgProfile /> 예상 모집 인원
          </Label>
          <DetailInput placeholder="명" 
          type="number"
          //{...register("estimated_num", { required: true })}
          />

          <Label>
            <BiWon /> 예상 비용(1인당)
          </Label>
          <DetailInput
            placeholder="원"
            type="number"
            //{...register("estimated_cost", { required: true })}
          />

          <Label>
            <GrLocation /> 방문 장소
          </Label>
          <LargerDetails>
            <LocationInput placeholder="장소 입력" {...register("trip_places", { required: true })}/>
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
          <DetailInput
            placeholder="지역 입력"
            {...register("trip_accmdtn", { required: true })}
          />

          <Label>
            <AiFillMail color="skyblue" />
            문의함 링크
          </Label>
          <DetailInput
            placeholder="문의받을 오픈카카오톡 채팅방 주소 입력"
            {...register("open_chat", { required: true })}
          />

          <Label>
            <AiFillDownCircle color="skyblue" />
            지원함 링크
          </Label>
          <DetailInput
            placeholder="지원받을 구글 설문폼 주소 입력"
            {...register("google_form", { required: true })}
          />
          <ButtonContainer>
            <Button type="submit" disabled={isSubmitting}>
              게시하기
            </Button>
          </ButtonContainer>
          </form>
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
  height: 2700px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid skyblue;
  margin: 100px;
`;

const Title = styled.div`
  padding: 50px;
  font-size: 30px;
  font-weight: 500;
  height: 150px;
  border-radius: 10px;
  align-items: center;
  margin: 20px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 255, 0.2);
  .highlight {
    color: skyblue;
  }
`;

const CalContainer = styled.div`
  padding: 20px;
`;

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

const Button = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  background-color: skyblue;
  border: 1px solid skyblue;
  border-radius: 5px;
  margin: 50px;
  cursor: pointer;
`;
export default Register;
