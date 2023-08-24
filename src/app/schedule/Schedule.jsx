import React, { useState } from "react";
import { styled } from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";

function Schedule(props) {
  const [value, onChange] = useState(new Date());
  const [isClicked, setIsClicked] = useState(true);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <SchedulePageWrapper>
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
          <Calendar onChange={onChange} value={value} />
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
            <ScheduleCardTitle>{"이번달 상담 스케줄"}</ScheduleCardTitle>
            <ScheduleCardContent></ScheduleCardContent>
          </ScheduleCard>
          <ScheduleCard>
            <ScheduleCardTitle>{"이번달 학원 스케줄"}</ScheduleCardTitle>
            <ScheduleCardContent></ScheduleCardContent>
          </ScheduleCard>
        </StyledSection>
      </SectionWrapper>
    </SchedulePageWrapper>
  );
}

export default Schedule;

const StyledButton = styled(Button)``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SchedulePageWrapper = styled.div`
  border: 2px solid blue;
  padding: 50px 50px;
`;

const SectionWrapper = styled.div`
  border: 2px solid limegreen;
  display: flex;
`;

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const ScheduleCard = styled.article`
  margin: 0 auto;
  width: 450px;
  height: 140px;
  background-color: pink;
`;

const ScheduleCardTitle = styled.div`
  width: 450px;
  height: 48px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScheduleCardContent = styled.div`
  width: 450px;
  height: 92px;
  padding: 15px 0 0 30px;
  background-color: #dddddd;
  overflow: hidden;
`;
