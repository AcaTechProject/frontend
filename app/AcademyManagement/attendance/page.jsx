"use client";
import React, { useState } from "react";
import styled from "styled-components";
import List from '../../../app/components/List';
import MessagePopup from '../../../app/components/MessagePopup';
import AttendSelect from '../../../app/components/AttendSelect';
import Modal from '../../../app/components/Modal';
import PastAttendanceList from '../../../app/components/PastAttendanceList';
import ListPopup from '../../../app/components/ListPopup';


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
  margin-left:
`;

const Row2 = styled(Row)`
  margin-top: 19px;
`;

const DateLabel = styled.p`
  font-size: 17px;
  margin-top: 17px;
`;

const Total = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #8146ff;
  margin: 25px 0 0 5px;
`;

const Attendance = () => {
  const dummyData = [
    { 이름: "홍길동", 일시: "2023년 7월 7일", 분반: "이지수 A", 연락처: "학부모" },
    { 이름: "홍명보", 일시: "2023년 7월 10일", 분반: "이지수 B", 연락처: "학부모" },
    { 이름: "홍길동", 일시: "2023년 7월 7일", 분반: "이지수 A", 연락처: "학부모" },
    { 이름: "홍길동", 일시: "2023년 7월 7일", 분반: "이지수 A", 연락처: "학부모" },
    { 이름: "홍길동", 일시: "2023년 7월 7일", 분반: "이지수 A", 연락처: "학부모" },
    { 이름: "홍명보", 일시: "2023년 7월 10일", 분반: "이지수 B", 연락처: "학부모" },
    { 이름: "홍길동", 일시: "2023년 7월 7일", 분반: "이지수 A", 연락처: "학부모" },
    { 이름: "홍길동", 일시: "2023년 7월 7일", 분반: "이지수 A", 연락처: "학부모" },


    
    // ...data
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  const [selectedParent, setSelectedParent] = useState(null); // selectedParent 상태 추가
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedAttendanceData, setSelectedAttendanceData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showPastAttendance, setShowPastAttendance] = useState(false); // showPastAttendance 추가
  const [selectedRow, setSelectedRow] = useState(null); // selectedRow 상태 추가

  const handlePastAttendanceRowClick = (rowIndex) => {
    setShowPastAttendance(true);
    setSelectedRow(rowIndex);
  };

  const handlePastAttendanceClick = () => {
    setShowPastAttendance(true);
  };

  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleParentClick = (parentInfo) => {
    setSelectedParent(parentInfo);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleSave = () => {
    // 이 부분에서 selectedAttendanceData를 활용하여 원하는 처리를 수행하거나
    // 다른 컴포넌트로 전달할 수 있습니다.
    // 예: 서버에 데이터 전송 등
    console.log("Saved attendance data:", selectedAttendanceData);
  };

  const subjectOptions = [
    { value: "국어a", label: "국어a" },
    { value: "국어b", label: "국어b" },
    { value: "국어c", label: "국어c" },
  ];


  const handleSaveButtonClick = () => {
    const updatedData = dummyData.map((row, index) => {
      const updatedRow = { ...row };
      updatedRow.출석 = document.querySelector(`input[name=출석_${index}]`).checked ? 1 : 0;
      updatedRow.지각 = document.querySelector(`input[name=지각_${index}]`).checked ? 1 : 0;
      updatedRow.결석 = document.querySelector(`input[name=결석_${index}]`).checked ? 1 : 0;
      updatedRow.기타 = document.querySelector(`input[name=기타_${index}]`).checked ? 1 : 0;
      return updatedRow;
    });

    setSelectedAttendanceData(updatedData);
    handleModal(`총 ${updatedData.length}명의 출결을 저장하시겠습니까?`);
  };



  return (
    <Container>
      <p>
        원생관리 {">"} 출결관리
        {showPastAttendance && " > 지난 출결관리"}
      </p>
      <Row>
        <Tab1>출결관리</Tab1>
        <Tab2>수강생 관리</Tab2>
      </Row>

      <Row style={{ marginTop: '36px' }}>
        <AttendSelect options={subjectOptions} onChange={handleSubjectChange} />
      </Row>

      {showPastAttendance ? (
        <PastAttendanceList
          data={dummyData}
          onRowClick={handlePastAttendanceRowClick}
          currentPage={currentPage}
          totalPages={Math.ceil(dummyData.length / itemsPerPage)}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
        />
      ) : (
        <>
          <Row2>
            <Button onClick={handlePastAttendanceClick}>지난출결관리</Button>
            <Button onClick={handleSaveButtonClick}>저장</Button>
          </Row2>
          <DateLabel>2023년 7월 7일</DateLabel>
          <div style={{ display: "flex" }}>
          <Total />
          <p style={{ fontSize: "13px", color: "#787486", marginTop: "22px" }}>
            총 {dummyData.length}명
          </p>
        </div>

          <List data={dummyData} onParentClick={handleParentClick} />
          {selectedParent && (
            <MessagePopup
              parentInfo={selectedParent}
              subject={selectedSubject}
              onClose={() => setSelectedParent(null)}
            />
          )}

          {isModalOpen && <Modal onClose={closeModal} message={modalMessage} onSave={handleSave} />}
        </>
      )}

      {selectedRow !== null && (
        <ListPopup
          data={dummyData}
          selectedRowIndex={selectedRow}
          onClose={() => {
            setSelectedRow(null);
            setShowPastAttendance(false);
          }}
          onParentClick={handleParentClick}
        />
      )}
    </Container>
  );


};

export default Attendance;