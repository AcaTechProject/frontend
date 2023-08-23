"use client";
import React from "react";
import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import Modal from "@/app/components/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputAtom } from "@/app/recoil/atom";

const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;
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
  align-items: center;
`;
const Tab1 = styled.button`
  border-radius: 5px;
  width: 110px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  font-weight: bold;
  font-size: 14px;
  &:hover {
    color: white;
    background: #8146ff;
  }
`;
const Tab2 = styled(Tab1)``;
const Button = styled.button`
  width: 95px;
  height: 34px;
  border-radius: 5px;
  color: #fff;
  background: #8146ff;
  border: 0;
  font-size: 14px;
`;
const Row2 = styled(Row)`
  justify-content: flex-end;
  margin-top: 70px;
`;
const Content = styled.div`
  border: 1px solid gray;
  width: 600px;
  height: 200px;
`;

const CounselDetail = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const content = useRecoilValue(inputAtom);
  //const [input, setInput] = useRecoilState(inputAtom);

  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const handleCheck = () => {
    router.push("/AcademyManagement/StudentManagement/counsel");
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //   const handleContent = (e) => {
  //     setContent(e.target.value);
  //   };
  const handleSaveClick = () => {};

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름 {">"} 상담관리{" "}
        {">"} 상담내역
      </p>

      <Body>
        <Left>
          <ProfileEmpty />
        </Left>
        <Right>
          <Row2>
            <Button>수정</Button>
            {isModalOpen && (
              <Modal
                onCheck={handleCheck}
                onClose={closeModal}
                message={modalMessage}
              />
            )}
            <Button>목록</Button>
          </Row2>
          <Row>
            <p style={{ fontSize: "20px" }}>상담 과목</p>
            <p style={{ color: "#6B7280" }}>dd</p>
          </Row>
          <Row>
            {" "}
            <p style={{ fontSize: "20px" }}>상담 대상</p>
            <p style={{ color: "#6B7280" }}>dd</p>
          </Row>

          <p style={{ fontSize: "20px" }}>상담 내용</p>
          <Content>{content}</Content>
        </Right>
      </Body>
    </Container>
  );
};
export default CounselDetail;
