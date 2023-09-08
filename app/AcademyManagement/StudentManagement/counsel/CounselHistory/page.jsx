//학생 개인당 상담 내역
"use client";
import Button from "@/app/components/Button";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import StudentList from "@/app/components/StudentList";
import { useRecoilState } from "recoil";
import { studentListState } from "@/recoil/atom";

import Link from "next/link";
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
  const [id, setId] = useState("");
  const [matchData, setMatchData] = useState();
  const [studentList, setStudentList] = useRecoilState(studentListState);
  const data = [
    {
      상담과목: "안녕",
      일시: "1월",
      담당교사: "누구",
    },
  ];
  useEffect(() => {
    const params = window.location.search;

    if (typeof params !== "undefined") {
      const result = params.replace("?id=", "");
      const matchedData = studentList.find(
        (data) => data.id === Number(result)
      );
      setId(result);
      setMatchData(matchedData);
      console.log("match", matchedData);
    }
  }, [id, matchData, studentList]);

  // const data = studentList.map((student) => ({
  //   id: studentList.id,
  //   이름: studentList.studentName,
  //   분반: studentList.result,
  //   학교: studentList.studentSchool,
  // }));

  const headers = ["No", "상담과목", "일시", "담당교사"];

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {matchData?.이름}
      </p>
      <h2>{matchData?.이름} 학생 상담내역</h2>
      <Row>
        <Button
          $medium
          $primary
          onClick={() =>
            router.push(
              "/AcademyManagement/StudentManagement/counsel/HistoryManage"
            )
          }
        >
          상담내역 관리
        </Button>

        <Button
          $medium
          $primary
          onClick={() =>
            router.push(
              `/AcademyManagement/StudentManagement/counsel/PageRegister?id=${id}`
            )
          }
        >
          등록
        </Button>
      </Row>
      <StudentList data={data} headers={headers} />
    </Container>
  );
};
export default CounselHistory;
