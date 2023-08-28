"use client";
import React from "react";
import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import LongSelect from "@/app/components/LongSelect";
import Modal from "@/app/components/Modal";
import Table from "@/app/components/Table";
import { useRecoilState, useRecoilValue } from "recoil";
import { daesangState, sangdamState } from "@/recoil/atom";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [sangdam, setSangdam] = useRecoilState(sangdamState);
  const [daesang, setDaesang] = useRecoilState(daesangState);

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
    router.push("/AcademyManagement/StudentManagement/counsel/CounselHistory");
  };

  const handleRegister = () => {
    router.push("/AcademyManagement/StudentManagement/counsel/CounselDetail");
  };

  const handleSubject = (e) => {
    setSangdam(e.target.value);
  };

  const handleDaesang = (e) => {
    setDaesang(e.target.value);
  };

  useEffect(() => {}, []);
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름 {">"} 상담관리{" "}
        {">"} 상담등록
      </p>

      <Body>
        <Left>
          {/* <input type="text" value={input} onChange={handleInput}></input> */}
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
          <Textarea />
        </Right>
      </Body>
    </Container>
  );
};
export default PageRegister;
