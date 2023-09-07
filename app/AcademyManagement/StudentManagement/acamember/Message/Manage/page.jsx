"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import StudentList from "@/app/components/StudentList";
import SMBtn from "@/app/components/SMBtn";
import AMBtn from "@/app/components/AMBtn";
import Button from "@/app/components/Button";

const Container = styled.section`
  padding: 116px 70px 55px 85px;
`;
const D = styled.div`
  display: flex;
  gap: 23px;
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
`;

const Div = styled.div`
  margin-top: 10px;
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

const Manage = () => {
  const router = useRouter();

  const data = [
    { 발송일: "2023년", 수신인: "외계인", 내용: "삐아아아", 결과: "성공" },
    { 발송일: "2023년", 수신인: "외계인", 내용: "삐아아아", 결과: "성공" },
    { 발송일: "2023년", 수신인: "외계인", 내용: "삐아아아", 결과: "성공" },
    { 발송일: "2023년", 수신인: "외계인", 내용: "삐아아아", 결과: "성공" },
    { 발송일: "2023년", 수신인: "외계인", 내용: "삐아아아", 결과: "성공" },
    { 발송일: "2023년", 수신인: "외계인", 내용: "삐아아아", 결과: "성공" },
    { 발송일: "2023년", 수신인: "외계인", 내용: "삐아아아", 결과: "성공" },
  ];
  const headers = ["No", "발송일", "수신인", "내용", "결과"];

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생관리 {">"} 메시지발송{">"}{" "}
        메시지관리
      </p>
      <D>
        <AMBtn />
        <SMBtn />
      </D>
      <D>
        <Tab
          onClick={() =>
            router.push(
              "/AcademyManagement/StudentManagement/acamember/Message/Send"
            )
          }
        >
          메시지 발송
        </Tab>
        <Tab>메시지관리</Tab>
      </D>
      <Div>
        <Button $large $primary>
          발송 내역 관리
        </Button>
      </Div>
      {/* 표 넣을 곳 */}
      <StudentList
        data={data}
        headers={headers}
        onTdClick={() => {}}
      ></StudentList>
    </Container>
  );
};
export default Manage;
