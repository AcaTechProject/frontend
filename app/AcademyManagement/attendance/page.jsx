"use client";
import React, { useState } from "react";
import styled from "styled-components";
import List from '../../../app/components/List';
import MessagePopup from '../../../app/components/MessagePopup';
import AttendSelect from '../../../app/components/AttendSelect';

const Container = styled.div`
  padding: 40px 70px 55px 80px;
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
  gap: 40px;
`;
const Button = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 5px;
  color: #fff;
  background: #8146ff;
  border: 0;
  font-size: 14px;
 
  
`;
const Row2 = styled(Row)`
  margin-top: 19px;
   
 `;

const DateLabel = styled.p`
  font-size: 17px;
  margin-top: 17px;
`;

const Attendance = () => {
  const dummyData = [
    { 이름: "홍길동", 분반: "이지수 A", 연락처: "학부모" },
    { 이름: "홍길동", 분반: "이지수 B", 연락처: "학부모" },
    { 이름: "홍길동", 분반: "이지수 A", 연락처: "학부모" },
    { 이름: "홍길동", 분반: "이지수 B", 연락처: "학부모" },
    { 이름: "홍길동", 분반: "이지수 A", 연락처: "학부모" },
    { 이름: "홍길동", 분반: "이지수 B", 연락처: "학부모" },
    // ...data
  ];

  const [selectedParent, setSelectedParent] = useState(null); // 선택된 학부모 정보 상태
  const [selectedSubject, setSelectedSubject] = useState(""); // 선택된 과목 상태

  const handleParentClick = (parentInfo) => {
    setSelectedParent(parentInfo); // 학부모 정보 설정
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value); // 선택된 과목 업데이트
  };

  const subjectOptions = [
    { value: "국어a", label: "국어a" },
    { value: "국어b", label: "국어b" },
    { value: "국어c", label: "국어c" },
  ];

  return (
    <Container>
      <p>
        원생관리 {">"} 출결관리
      </p>
      <Row>
        <Tab1>출결관리</Tab1>
        <Tab2>수강생 관리</Tab2>
      </Row>

      <Row style={{ marginTop: '36px' }}>
        <AttendSelect options={subjectOptions} onChange={handleSubjectChange} />
      </Row>

      <Row2>
        <Button>지난출결관리</Button>
        <Button>저장</Button>
      </Row2>
      <DateLabel>2023년 7월 7일</DateLabel> 

      <List data={dummyData} onParentClick={handleParentClick} />
      {selectedParent && (
        <MessagePopup
          parentInfo={selectedParent}
          subject={selectedSubject}
          onClose={() => setSelectedParent(null)}
        />
      )}
    </Container>
  );
};

export default Attendance;


