"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import StudentList from "@/app/components/StudentList";
import SMBtn from "@/app/components/SMBtn";
import AMBtn from "@/app/components/AMBtn";

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
  width: 132px;
  height: 34px;
  border-radius: 5px;
  color: white;
  background: #6956e5;
  border: 0;
  font-size: 15px;
  font-weight: 600;
  margin-left: 30px;
`;
const P = styled.p`
  font-weight: 700;
  font-size: 20px;
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

const NewCounsel = () => {
  const router = useRouter();

  const data = [];
  const headers = ["No", "이름", "학교", "수강 희망 과목"];

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 신규상담
      </p>
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
        <P>신규상담 내역</P>
        <div style={{ padding: "0 0 0 72%" }}>
          <Btn>신규 상담 등록</Btn>
        </div>
      </Div>

      {/* 표 넣을 곳 */}
      <StudentList data={data} headers={headers}></StudentList>
    </Container>
  );
};
export default NewCounsel;
