"use client";
import React, { useState } from "react";
import { styled } from "styled-components";

function CalendarPopup({ onClose, scheduleData, selectedDate }) {
  const [isShowing, setIsShowing] = useState(false);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const koreanDate = selectedDate.toLocaleDateString("ko-KR", options);

  return (
    <PopupPageContainer>
      <CalendarPopupContaniner>
        <CalendarPopupHeader>
          {/* <CloseButton > */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              onClick={onClose}
              style={{ margin: "27px 0 6px 26px" }}
            >
              <path
                d="M18.3853 0.900101H2.06735C1.63457 0.900101 1.21951 1.06802 0.91349 1.36691C0.607468 1.6658 0.435547 2.07118 0.435547 2.49388V18.4317C0.435547 18.8544 0.607468 19.2598 0.91349 19.5587C1.21951 19.8576 1.63457 20.0255 2.06735 20.0255H18.3853C18.8181 20.0255 19.2332 19.8576 19.5392 19.5587C19.8452 19.2598 20.0171 18.8544 20.0171 18.4317V2.49388C20.0171 2.07118 19.8452 1.6658 19.5392 1.36691C19.2332 1.06802 18.8181 0.900101 18.3853 0.900101ZM15.699 14.6803C15.7748 14.7544 15.8349 14.8423 15.876 14.939C15.917 15.0357 15.9381 15.1394 15.9381 15.2441C15.9381 15.3488 15.917 15.4525 15.876 15.5493C15.8349 15.646 15.7748 15.7339 15.699 15.8079C15.6232 15.882 15.5332 15.9407 15.4341 15.9808C15.3351 16.0208 15.2289 16.0415 15.1217 16.0415C15.0145 16.0415 14.9084 16.0208 14.8093 15.9808C14.7103 15.9407 14.6203 15.882 14.5445 15.8079L10.2263 11.5894L5.90819 15.8079C5.7551 15.9575 5.54745 16.0415 5.33094 16.0415C5.11443 16.0415 4.90679 15.9575 4.7537 15.8079C4.6006 15.6584 4.51459 15.4556 4.51459 15.2441C4.51459 15.0327 4.6006 14.8299 4.7537 14.6803L9.07286 10.4628L4.7537 6.24524C4.6006 6.09571 4.51459 5.89291 4.51459 5.68144C4.51459 5.46998 4.6006 5.26717 4.7537 5.11764C4.90679 4.96811 5.11443 4.88411 5.33094 4.88411C5.54745 4.88411 5.7551 4.96811 5.90819 5.11764L10.2263 9.33618L14.5445 5.11764C14.6976 4.96811 14.9052 4.88411 15.1217 4.88411C15.3383 4.88411 15.5459 4.96811 15.699 5.11764C15.8521 5.26717 15.9381 5.46998 15.9381 5.68144C15.9381 5.89291 15.8521 6.09571 15.699 6.24524L11.3798 10.4628L15.699 14.6803Z"
                fill="black"
              />
            </svg>
          </div>
          <p
            style={{
              margin: "27px 0 0 127px",
              fontSize: "1.25em",
            }}
          >
            {/* 클릭한 날짜 */}
            {koreanDate}
          </p>
        </CalendarPopupHeader>
        <div style={{ margin: "15px 50px" }}>
          {!isShowing ? (
            <ManageButton onClick={() => setIsShowing(true)}>
              {"일정관리"}
            </ManageButton>
          ) : (
            <DeleteButton onClick={() => setIsShowing(false)}>
              {"삭제"}
            </DeleteButton>
          )}
        </div>

        <ScheduleContent>
          {/* 그날의 일정 보여주기 */}
          {/* today_edu_schedule에 날짜가 있어야하나? */}
          {!isShowing ? (
            <>
              <li>{scheduleData.this_month_schedule[0].sch_title}</li>
              <br />
            </>
          ) : (
            <>
              <p>
                <input type="checkbox" />
                {scheduleData.this_month_schedule[0].sch_title}
              </p>
            </>
          )}
        </ScheduleContent>
      </CalendarPopupContaniner>
    </PopupPageContainer>
  );
}

export default CalendarPopup;

const PopupPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const CalendarPopupContaniner = styled.div`
  width: 468px;
  height: 427px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
`;

const CalendarPopupHeader = styled.div`
  width: 468px;
  height: 53.26px;
  border-radius: 5px 5px 0 0;
  display: flex;
  background-color: #d3d2d2;
`;

const CloseButton = styled.button`
  width: 19.582px;
  height: 19.125px;
  background-color: #000;
  margin: 27px 127px 6px 26px;
  cursor: pointer;
  color: #ffffff;
`;

const ManageButton = styled.a`
  width: 72px;
  height: 21px;
  color: #4154ff;
  border-bottom: 1px solid #4154ff;
  cursor: pointer;
`;
const DeleteButton = styled.a`
  width: 72px;
  height: 21px;
  color: red;
  border-bottom: 1px solid red;
  cursor: pointer;
`;

const ScheduleContent = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 30px 20px;
  width: 396px;
  height: 284px;
  border: 6px solid #eceafe;
  border-radius: 10px;
  overflow: hidden;
`;
