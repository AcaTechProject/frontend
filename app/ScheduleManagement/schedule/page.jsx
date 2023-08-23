"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import "react-calendar/dist/Calendar.css";
import Button from "../../components/Button";
import ScheduleCalendar from "@/app/components/Calendar/Calendar";

function Schedule(props) {
  const [value, onChange] = useState(new Date());
  const [isClicked, setIsClicked] = useState(true);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <SchedulePageContainer>
      <ButtonWrapper style={{ marginBottom: 20 + "px" }}>
        <StyledButton
          onClick={() => handleIsClicked()}
          $primary={isClicked}
          $secondary={!isClicked}
          $medium={true}
          style={{ marginRight: 30 + "px" }}
        >
          {"전체 일정"}
        </StyledButton>
        <StyledButton
          onClick={() => handleIsClicked()}
          $primary={!isClicked}
          $secondary={isClicked}
          $medium={true}
        >
          {"일정 등록"}
        </StyledButton>
      </ButtonWrapper>
      <SectionWrapper>
        <StyledSection>
          <ScheduleCalendar />
        </StyledSection>
        <StyledSection>
          <ScheduleCard>
            <ScheduleCardTitle>{"이번달 학원 스케줄"}</ScheduleCardTitle>
            <ScheduleCardContent>
              <li>{"2023년 7월 7일 ~ 7월 9일 여름 방학"}</li>
              <br />
              <li>{"학원 시험 일정"}</li>
            </ScheduleCardContent>
          </ScheduleCard>
          <ScheduleCard
            style={{ marginTop: 30 + "px", marginBottom: 30 + "px" }}
          >
            <ScheduleCardTitle>{"오늘의 학원 일정"}</ScheduleCardTitle>
            <ScheduleCardContent></ScheduleCardContent>
          </ScheduleCard>
          <ScheduleCard>
            <ScheduleCardTitle>{"오늘의 상담 일정"}</ScheduleCardTitle>
            <ScheduleCardContent></ScheduleCardContent>
          </ScheduleCard>
        </StyledSection>
      </SectionWrapper>
    </SchedulePageContainer>
  );
}

export default Schedule;

const StyledButton = styled(Button)``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SchedulePageContainer = styled.div`
  padding: 116px 68px 62px 311px;
`;

const SectionWrapper = styled.div`
  display: flex;
`;

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
`;

const ScheduleCard = styled.article`
  margin: 0 auto;
  width: 450px;
  height: 140px;
`;

const ScheduleCardTitle = styled.div`
  width: 100%;
  height: 48px;
  background-color: #eceafe;
  border-top: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #6956e5;
  border-radius: 5px 5px 0 0;
`;

const ScheduleCardContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 92px;
  padding: 15px 0 0 30px;

  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  overflow: hidden;
  border-radius: 0 0 5px 5px;
`;

// padding: 15px 0 0 30px;
