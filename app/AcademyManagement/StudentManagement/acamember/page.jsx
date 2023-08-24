"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Select from "../../../components/Select";
import MessagePopup from "@/app/components/MessagePopup";
import StudentList from "@/app/components/StudentList";
import AMBtn from "@/app/components/AMBtn";
import SMBtn from "@/app/components/SMBtn";

const Container = styled.section`
  padding: 116px 70px 55px 85px;
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
const Total = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #8146ff;
  margin: 25px 0 0 5px;
`;
const Button = styled.button`
border-radius: 5px;
  width: 110px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  font-weight: bold;
  font-size:14px;
  &:hover {
    color: white;
    background: #8146ff;
   
`;
const Btn = styled.button`
  width: 95px;
  height: 34px;
  border-radius: 5px;
  color: #8146ff;
  background: #eceafe;
  border: 0;
  font-size: 15px;
  font-weight: 700;
  margin-left: 30px;
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

const acamember = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");
  const [isMessagePopupOpen, setMessagePopupOpen] = useState(false);

  const data = [
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김길동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "김동", 분반: "국어 김은진A", 학교: "코딩초" },
    { 이름: "길동", 분반: "국어 김은진A", 학교: "코딩초" },
  ];
  const headers = ["No", "이름", "분반", "학교"];

  const openMessagePopup = () => {
    setMessagePopupOpen(true);
  };

  const closeMessagePopup = () => {
    setMessagePopupOpen(false);
  };
  const handleSendMessage = (message) => {
    console.log("Sending message:", message);
    // 여기에서 실제 메시지 전송 로직을 구현
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Container>
      <p>원생관리 - 학생관리 - 신규상담</p>
      <D>
        <AMBtn />
        <SMBtn />
      </D>
      <D>
        <Tab
          onClick={() =>
            router.push("/AcademyManagement/StudentManagement/acamember")
          }
        >
          수강생 관리
        </Tab>
        <Tab
          onClick={() =>
            router.push("/AcademyManagement/StudentManagement/counsel")
          }
        >
          신규상담
        </Tab>
      </D>
      <Div>
        <Select
          options={[
            { value: "kor", label: "국어 김은진A" },
            { value: "kor", label: "국어 김은진A" },
            { value: "kor", label: "국어 김은진A" },
          ]}
          value={selectedValue}
          onChange={handleSelectChange}
        />
        <div style={{ display: "flex" }}>
          <Total />
          <p style={{ fontSize: "13px", color: "#787486", marginTop: "22px" }}>
            총 {data.length}명
          </p>
        </div>

        <div style={{ marginLeft: "62%" }}>
          <Btn onClick={openMessagePopup}>메시지 발송</Btn>
          {isMessagePopupOpen && (
            <MessagePopup
              onClose={closeMessagePopup}
              onSend={handleSendMessage}
            />
          )}

          <Btn
            onClick={() =>
              router.push(
                "/AcademyManagement/StudentManagement/acamember/register"
              )
            }
          >
            학생 등록
          </Btn>
        </div>
      </Div>
      <button
        onClick={() =>
          router.push(
            "/AcademyManagement/StudentManagement/acamember/StudentInfo"
          )
        }
      ></button>
      {/* 표 넣을 곳 */}
      <StudentList data={data} headers={headers}></StudentList>
    </Container>
  );
};
export default acamember;
