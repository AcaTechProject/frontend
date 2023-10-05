"use client";
import React from "react";
import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

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

const PageRegister = () => {
  const router = useRouter();
  const [id, setId] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [userData, setUserData] = useState({});
  const [sangdam, setSangdam] = useState("");
  const [daesang, setDaesang] = useState("");
  const [content, setContent] = useState("");
  const [counsel, setCounsel] = useState("");

  const sangdamRef = useRef(null);
  const daesangRef = useRef(null);
  const contentRef = useRef(null);

  const url = window.location.href;
  const urlParts = url.split("?");

  const queryParams = new URLSearchParams(urlParts[1]);
  const studentId = queryParams.get("id"); // "id" 매개변수에서 studentId 가져오기
  const conId = queryParams.get("conId");

  const handleModal = (message) => {
    setIsModalOpen(true);
    setModalMessage(message);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCheck = () => {
    router.push(
      `/AcademyManagement/StudentManagement/counsel/CounselHistory?id=${id}&conId=${conId}`
    );
  };

  const handleSubject = (e) => {
    setSangdam(e.target.value);
  };

  const handleDaesang = (e) => {
    setDaesang(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

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

  const handleRegister = () => {
    if (sangdam === "") {
      alert("상담과목을 선택해주세요");
    } else if (daesang === "") {
      alert("상담대상을 선택해주세요");
    } else if (content === "") {
      alert("상담 내용을 입력해주세요");
    } else {
      router.push(
        `/AcademyManagement/StudentManagement/counsel/CounselDetail?id=${studentId}&conId=${conId}`
      );
    }

    const counselInfo = {
      user: {
        id: studentId,
      },
      con_class: sangdam,
      con_content: content,
      con_teacher: userData.name,
      con_who: daesang,
    };
    axios
      .post(
        `http://localhost:8080/student/${studentId}/consulting`,
        counselInfo
      )
      .then((response) => {
        console.log("상담 정보 저장성공", response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

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
            <Button
              $medium
              $primary
              closeModal={closeModal}
              onClick={() =>
                handleModal(
                  "작성중이던 정보는 저장되지 않습니다.취소하시겠습니까?"
                )
              }
            >
              취소
            </Button>
            {isModalOpen && (
              <Modal
                onCheck={handleCheck}
                onClose={closeModal}
                message={modalMessage}
              />
            )}
            <Button $medium $primary onClick={handleRegister}>
              등록
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
            value={sangdam}
            onChange={handleSubject}
          />
          <p>상담 대상</p>
          <LongSelect
            options={[
              { value: "non", label: "상담 대상을 선택해주세요" },
              { value: "학생", label: "학생" },
              { value: "학부모", label: "학부모" },
            ]}
            value={daesang}
            onChange={handleDaesang}
          />
          <p>상담 내용</p>
          <Textarea value={content} onChange={handleContent} />
        </Right>
      </Body>
    </Container>
  );
};
export default PageRegister;
