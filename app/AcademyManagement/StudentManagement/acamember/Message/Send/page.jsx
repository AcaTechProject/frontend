"use client";
import React, { useState } from "react";
import styled from "styled-components";
import AttendSelect from "@/app/components/AttendSelect";
//import MessageSendingComponent from '../../../app/components/MessageSendingComponent';
import SMBtn from "@/app/components/SMBtn";
import AMBtn from "@/app/components/AMBtn";
import { useRouter } from "next/navigation";
const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;

const Tab1 = styled.button`
  border-radius: 5px;
  width: 105px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  &:hover {
    color: white;
    background: #8146ff;
  }
`;

const Tab2 = styled(Tab1)``;

const Row = styled.div`
  display: flex;
  gap: 23px;
`;

const TableContainer = styled.div`
 margin-top: 32px;
    width: 40%;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 3px;
    border: 1px solid #D3D2D2;
}
`;

const MessageSendingWrapper = styled.div`
  width: 50%; /* 오른쪽 MessageSendingComponent 영역의 너비 설정 */
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  flex-shrink: 0;
  border-radius: 5px 5px 0 0;
  background: #eceafe;
  padding: 0 10px;
`;

const HeaderItem = styled.p`
  font-size: 14px;
  color: #555;
`;

const CheckBoxHeaderItem = styled(HeaderItem)`
  width: 50px;
  text-align: center;
`;

const DataRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  flex-shrink: 0;
  border-bottom: 1px solid #d3d2d2;
  padding: 0 10px;
`;

const DataItem = styled.p`
  font-size: 14px;
  color: #555;
`;

const CheckBoxContainer = styled.div`
  width: 50px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const Tab = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-top: 15px;
  border: none;
  background: white;
  &:hover {
    color: #3629B7;
    background: white;
    border-bottom: 2px solid #3629b7;
`;

const D = styled.div`
  display: flex;
  gap: 23px;
`;
const Div = styled.div`
  margin-top: 15px;
  display: flex;
  position: relative;
  align-items: center;
`;

const Send = () => {
  const router = useRouter();
  const subjectOptions = [
    { value: "국어a", label: "국어a" },
    { value: "국어b", label: "국어b" },
    { value: "국어c", label: "국어c" },
  ];

  const handleSubjectChange = (e) => {
    // 선택한 과목 변경 처리를 여기에 추가할 수 있습니다.
  };

  const dummyData = [
    { 이름: "홍길동", 분반: "국어a" },
    { 이름: "김은진", 분반: "국어b" },
    { 이름: "홍길동", 분반: "국어a" },
    { 이름: "김은진", 분반: "국어b" },
    { 이름: "홍길동", 분반: "국어a" },
    { 이름: "김은진", 분반: "국어b" },
    { 이름: "홍길동", 분반: "국어a" },
    { 이름: "김은진", 분반: "국어b" },
    // ... (데이터 추가)
  ];

  const [selectedReasonIndex, setSelectedReasonIndex] = useState(null);
  const handleSendMessage = (message) => {
    // 메시지 전송 로직을 이곳에 구현
    console.log("Sending message:", message);
    // 실제로는 여기에서 서버로 메시지를 전송하는 로직을 구현해야 합니다.
  };

  return (
    <Container>
      <p>
        {" "}
        원생관리 {">"} 학생관리 {">"} 수강생관리 {">"} 메시지발송
      </p>

      <Row>
        <AMBtn />
        <SMBtn />
      </Row>

      <D>
        <Tab>메세지발송</Tab>
        <Tab
          onClick={() =>
            router.push(
              "/AcademyManagement/StudentManagement/acamember/Message/Manage"
            )
          }
        >
          메시지관리
        </Tab>
      </D>

      <Row style={{ marginTop: "36px" }}>
        <AttendSelect options={subjectOptions} onChange={handleSubjectChange} />
      </Row>

      <ContentWrapper>
        <TableContainer>
          <HeaderRow>
            <HeaderItem>이름</HeaderItem>
            <HeaderItem>분반</HeaderItem>
            <CheckBoxHeaderItem>학부모</CheckBoxHeaderItem>
          </HeaderRow>
          {dummyData.map((item, index) => (
            <DataRow key={index}>
              <DataItem>{item.이름}</DataItem>
              <DataItem>{item.분반}</DataItem>
              <CheckBoxContainer>
                <input type="checkbox" name={`학부모_${index}`} />
              </CheckBoxContainer>
            </DataRow>
          ))}
        </TableContainer>

        <MessageSendingWrapper>
          {/* <MessageSendingComponent onSendMessage={handleSendMessage} /> */}
        </MessageSendingWrapper>
      </ContentWrapper>

      {/* 나머지 내용 */}
    </Container>
  );
};

export default Send;
