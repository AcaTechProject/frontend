"use client";
import React from "react";
import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import { useRouter } from "next/navigation";
import LongSelect from "@/app/components/LongSelect";
import Modal from "@/app/components/Modal";
import Table from "@/app/components/Table";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  daesangState,
  sangdamState,
  contentState,
  counselListState,
  studentListState,
} from "@/recoil/atom";

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
  const [matchData, setMatchData] = useState("");
  const [studentList, setStudentList] = useRecoilState(studentListState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [userData, setUserData] = useState({});
  const [sangdam, setSangdam] = useState("");
  const [daesang, setDaesang] = useState("");
  const [content, setContent] = useRecoilState(contentState);
  const [counsel, setCounsel] = useRecoilState(counselListState);

  // const sangdamRef = useRef(null);
  // const daesangRef = useRef(null);
  // const contentRef = useRef(null);

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
      `/AcademyManagement/StudentManagement/counsel/CounselHistory?id=${id}`
    );
  };

  const handleRegister = () => {
    if (sangdam === "") {
      alert("상담과목을 선택해주세요");

      return;
    } else if (daesang === "") {
      alert("상담대상을 선택해주세요");
    } else if (content === "") {
      alert("상담 내용을 입력해주세요");
      // contentRef.current.focus();
    } else {
      router.push(
        `/AcademyManagement/StudentManagement/counsel/CounselDetail?id=${id}`
      );
    }
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
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {userData.name}
        {">"} 상담관리 {">"} 상담등록
      </p>

      <Body>
        <Left>
          {/* <input type="text" value={input} onChange={handleInput}></input> */}
          <ProfileEmpty matchData={matchData} />
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
            // ref={sangdamRef}
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
            // ref={daesangRef}
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
