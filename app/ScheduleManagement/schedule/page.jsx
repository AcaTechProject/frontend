"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import "react-calendar/dist/Calendar.css";
import Button from "../../components/Button";
import ScheduleCalendar from "@/app/components/Calendar/Calendar";
import CalendarPopup from "@/app/components/Calendar/CalendarPopup";
import { useRouter } from "next/navigation";

function Schedule(props) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

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

  const scheduleData = {
    this_month_schedule: [
      {
        start_date: "2023-07-05T00:00:00.000+00:00",
        end_date: "2023-07-07T00:00:00.000+00:00",
        sch_title: "ㅁㅁ 초등학교 기말고사",
        sch_edu: true,
        sch_cons: false,
      },
      {
        start_date: "2023-07-25T00:00:00.000+00:00",
        end_date: "2023-07-28T00:00:00.000+00:00",
        sch_title: "학원 방학",
        sch_edu: true,
        sch_cons: false,
      },
    ],
    today_edu_schedule: [
      {
        sch_title: "ㅁㅁ 교재 배부",
      },
      {
        sch_title: "수행평가 관련 공지",
      },
      {
        sch_title: "하반기 반편성 공지",
      },
      {
        sch_title: "ㅇㅇ 초등학교 중간고사",
      },
    ],
    today_cons_schedule: [
      {
        sch_title: "ㅇㅇ 초등학교 2학년 학생 신규 상담",
        sch_content: "국어과목 수강을 원함",
      },
    ],
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    handleModalOpen();
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
          <ScheduleCalendar handleDayClick={handleDayClick} />
          {isOpened ? (
            <CalendarPopup
              onClose={handleModalOpen}
              scheduleData={scheduleData}
              selectedDate={selectedDate}
            />
          ) : null}
        </StyledSection>

        <StyledSection>
          <ScheduleCard>
            <ScheduleCardTitle>{"이번달 학원 스케줄"}</ScheduleCardTitle>
            <ScheduleCardContent>
              {scheduleData.this_month_schedule.map((obj) => (
                <li style={{ margin: "5px 0 10px 0" }} key={obj.i}>
                  {obj.sch_title}
                </li>
              ))}
            </ScheduleCardContent>
          </ScheduleCard>
          <ScheduleCard
            style={{ marginTop: 30 + "px", marginBottom: 30 + "px" }}
          >
            <ScheduleCardTitle>{"오늘의 학원 일정"}</ScheduleCardTitle>
            <ScheduleCardContent>
              {scheduleData.today_edu_schedule.map((obj) => (
                <li style={{ margin: "5px 0 10px 0" }} key={obj.i}>
                  {obj.sch_title}
                </li>
              ))}
            </ScheduleCardContent>
          </ScheduleCard>
          <ScheduleCard>
            <ScheduleCardTitle>{"오늘의 상담 일정"}</ScheduleCardTitle>
            <ScheduleCardContent>
              {scheduleData.today_cons_schedule.map((obj) => (
                <li style={{ margin: "5px 0 10px 0" }} key={obj.i}>
                  {obj.sch_title}
                </li>
              ))}
            </ScheduleCardContent>
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

const ScheduleCard = styled.div`
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
  overflow: auto;
  border-radius: 0 0 5px 5px;
`;
