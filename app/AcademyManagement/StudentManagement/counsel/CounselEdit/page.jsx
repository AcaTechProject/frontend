"use client";
import React from "react";
import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import LongSelect from "@/app/components/LongSelect";
import Modal from "@/app/components/Modal";
import Table from "@/app/components/Table";
import axios from "axios";
import Button from "@/app/components/Button";

const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;
// const Container = styled.div`
//   padding: 116px 70px 55px 85px;
// `;

const Body = styled.section`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin: 110px 0 0 20px;
  width: 45%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
  gap: 40px;
  width: 48%;
`;
const Row = styled.div`
  display: flex;
  gap: 23px;
`;
const Row2 = styled(Row)`
  justify-content: flex-end;
  margin-top: 70px;
`;

const Textarea = styled.textarea`
  width: 600px;
  height: 200px;
`;

const CounselEdit = () => {
  const router = useRouter();
  const [selectSubject, setSelectSubject] = useState("");
  const [selectDaesang, setSelectDaesang] = useState("");
  const [selectContent, setSelectContent] = useState("");
  const [userData, setUserData] = useState({});

  const url = window.location.href;
  const urlParts = url.split("?");

  const queryParams = new URLSearchParams(urlParts[1]);
  const studentId = queryParams.get("id"); // "id" 매개변수에서 studentId 가져오기
  const conId = queryParams.get("conId");

  const handleSub = (e) => {
    setSelectSubject(e.target.value);
  };
  const handleDae = (e) => {
    setSelectDaesang(e.target.value);
  };
  const handleContent = (e) => {
    setSelectContent(e.target.value);
  };
  const handleCancel = () => {
    alert("수정이 취소되었습니다");
    router.push(
      `/AcademyManagement/StudentManagement/counsel/CounselDetail?id=${studentId}&conId=${conId}`
    );
  };

  const handleComplete = () => {
    const editConsult = {
      con_class: selectDaesang,
      con_content: selectContent,
      con_who: selectSubject,
    };
    axios
      .put(`http://localhost:8080/student/consulting/${conId}`, editConsult)
      .then((response) => {
        alert("수정이 완료되었습니다");
        console.log("수정 완료", response.data);

        router.push(
          `/AcademyManagement/StudentManagement/counsel/CounselDetail?id=${studentId}&conId=${conId}`
        );
      })
      .catch((error) => {
        console.log("상담 수정 실패", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}`)
      .then((response1) => {
        setUserData(response1.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, []);

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {userData.name}
        {">"} 상담관리 {">"} 상담등록
      </p>

      <Body>
        <Left>
          <ProfileEmpty />
        </Left>
        <Right>
          <Row2>
            <Button $medium $primary onClick={handleCancel}>
              수정취소
            </Button>

            <Button $medium $primary onClick={handleComplete}>
              수정완료
            </Button>
          </Row2>
          <p>상담 과목</p>
          <LongSelect
            options={[
              { value: "none", label: "상담 과목을 선택해주세요" },
              { value: "국어", label: "국어" },
              { value: "영어", label: "영어" },
              { value: "수학", label: "수학" },
            ]}
            value={selectSubject}
            onChange={handleSub}
          />
          <p>상담 대상</p>
          <LongSelect
            options={[
              { value: "non", label: "상담 대상을 선택해주세요" },
              { value: "학생", label: "학생" },
              { value: "학부모", label: "학부모" },
            ]}
            value={selectDaesang}
            onChange={handleDae}
          />
          <p>상담 내용</p>
          <Textarea value={selectContent} onChange={handleContent} />
        </Right>
      </Body>
    </Container>
  );
};
export default CounselEdit;
