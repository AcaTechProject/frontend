//학생 개인당 상담 내역
"use client";
import Button from "@/app/components/Button";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StudentList from "@/app/components/StudentList";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Modal from "@/app/components/Modal";
const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;
const Row = styled.div`
  display: flex;
  gap: 23px;
  padding: 0 0 0 990px;
`;

const CounselHistory = () => {
  const router = useRouter();
  const data = [{ 상담과목: "국어", 일시: "2월", 담당교사: "김은진" }];
  const headers = ["No", "상담과목", "일시", "담당교사"];

  const handleMove = () => {
    console.log("dfdf");
    router.push("/AcademyManagement/StudentManagement/counsel/CounselRegister");
  };
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름
      </p>
      <h2>김지수 학생 상담내역</h2>
      <Row>
        <Button
          $medium
          $primary
          onClick={() =>
            router.push(
              "/AcademyManagement/StudentManagement/counsel/CounselEdit"
            )
          }
        >
          상담내역 관리
        </Button>
        <Button $medium $primary onClick={handleMove}>
          상담 등록
        </Button>
      </Row>
      <StudentList data={data} headers={headers} />
    </Container>
  );
};
export default CounselHistory;
