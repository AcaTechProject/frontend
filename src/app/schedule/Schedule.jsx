import React, { useState } from "react";
import { styled } from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Schedule(props) {
  const [value, onChange] = useState(new Date());

  return (
    <SchedulePageWrapper>
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
          <ScheduleCard style={{ margin: 30 + "px" }}>
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
