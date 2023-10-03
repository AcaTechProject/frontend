//학생 개인당 상담 내역
"use client";
import Button from "@/app/components/Button";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SangdamList from "@/app/components/SangdamList";
import axios from "axios";

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
  const [conId, setConId] = useState([]);
  const [userData, setUserData] = useState({});
  const [consultInfo, setConsulInfo] = useState([]);
  const [conIds, setConIds] = useState("");

  const url = window.location.href;
  const urlParts = url.replace("?id=", "");
  const studentId = urlParts[urlParts.length - 1];

  const data = consultInfo.map((item) => ({
    상담과목: item.con_class,
    일시: item.con_date,
    담당교사: item.con_teacher,
  }));

  const headers = ["No", "상담과목", "일시", "담당교사"];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}`)
      .then((response) => {
        setUserData(response.data);
        console.log("data", response.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}/consulting`)
      .then((response1) => {
        setConsulInfo(response1.data);
        const conIds = response1.data.map((item) => item.con_id);
        console.log("상담 불러오기 성공!", response1.data);
        console.log("conIds", conIds);
        setConIds(conIds);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, [studentId]);

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {userData.name}
      </p>
      <h2>{userData.name} 학생 상담내역</h2>
      <Row>
        <Button
          $medium
          $primary
          onClick={() =>
            router.push(
              `/AcademyManagement/StudentManagement/counsel/HistoryManage?id=${studentId}`
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
              `/AcademyManagement/StudentManagement/counsel/PageRegister?id=${studentId}&conId=${conId}`
            )
          }
        >
          등록
        </Button>
      </Row>
      <SangdamList data={data} headers={headers} />
    </Container>
  );
};
export default CounselHistory;
