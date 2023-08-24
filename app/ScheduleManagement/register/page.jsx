"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import "react-calendar/dist/Calendar.css";
import Button from "../../components/Button";
import ScheduleCalendar from "@/app/components/Calendar/Calendar";
import Popup from "@/app/components/Popup";
import { useRouter } from "next/navigation";

function page(props) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  const handleModalOpen = () => {
    setIsOpened(!isOpened);
    console.log(isOpened);
  };

  const handleSchedulePage = () => {
    handleIsClicked();
    router.push("/ScheduleManagement/schedule");
  };

  const handleRegisterPage = () => {
    handleIsClicked();
    router.push("/ScheduleManagement/register");
  };

  return (
    <SchedulePageContainer>
      <ButtonWrapper style={{ marginBottom: 20 + "px" }}>
        <StyledButton
          onClick={handleSchedulePage}
          $primary={isClicked}
          $secondary={!isClicked}
          $medium={true}
          style={{ marginRight: 30 + "px" }}
        >
          {"전체 일정"}
        </StyledButton>
        <StyledButton
          onClick={handleRegisterPage}
          $primary={!isClicked}
          $secondary={isClicked}
          $medium={true}
        >
          {"일정 등록"}
        </StyledButton>
      </ButtonWrapper>
      <SectionWrapper>
        <StyledSection>
          <ScheduleCalendar handleModalOpen={handleModalOpen} />
          {isOpened ? <Popup onClose={handleModalOpen} /> : null}
        </StyledSection>

        <StyledSection>
          <ScheduleRegisterWrapper>
            <h3>{"2023년 8월 24일"}</h3>

            <Checkbox />
            <span>기간 설정</span>

            <Title placeholder="일정 제목을 입력해주세요" />
            <Checkbox />
            <span>학원일정</span>

            <Checkbox />
            <span>상담일정</span>
            <TextareaWrapper>
              <Textarea placeholder="일정에 대한 메모를 남겨주세요"></Textarea>
              <RegisterBtn $primary>일정 등록</RegisterBtn>
            </TextareaWrapper>
          </ScheduleRegisterWrapper>
        </StyledSection>
      </SectionWrapper>
    </SchedulePageContainer>
  );
}

export default page;

const StyledButton = styled(Button)``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SchedulePageContainer = styled.div`
  padding: 116px 68px 62px 50px;
`;

const SectionWrapper = styled.div`
  display: flex;
`;

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
`;

const ScheduleRegisterWrapper = styled.div`
  margin: 0 auto;
  width: 450px;
  height: 485px;
`;

const Title = styled.input`
  width: 450px;
  height: 37px;
  border: 1px solid #d3d2d2;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Checkbox = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  margin: 0 10px 10px;
`;

const TextareaWrapper = styled.div`
  text-align: center;
`;
const Textarea = styled.textarea`
  width: 450px;
  height: 278px;
  border: 1px solid #d3d2d2;
  border-radius: 5px;
  overflow: hidden;
  outline: none;
`;

const RegisterBtn = styled(Button)`
  width: 192px;
  height: 34px;
  margin-top: 30px;
`;
