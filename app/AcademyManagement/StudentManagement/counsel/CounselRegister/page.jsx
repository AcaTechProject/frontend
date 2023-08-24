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
import { teacherState, subjectState } from "@/app/recoil/atom";
import { inputAtom } from "@/app/recoil/atom";
import { textState } from "@/app/recoil/atom";

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
const Textarea = styled.textarea`
  width: 600px;
  height: 200px;
`;

const CounselRegister = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [subjectValue, setSubjectValue] = useRecoilState(subjectState);
  const [teacherValue, setTeacherValue] = useRecoilState(teacherState);

  const text = useRecoilValue(textState);
  const handleModal = (message) => {
    setIsModalOpen(true);
    setModalMessage(message);
  };
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCheck = () => {
    router.push("/AcademyManagement/StudentManagement/counsel/CounselHistory");
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleRegister = () => {
    if (!subjectValue) {
      alert("상담과목을 선택해주세요");
    } else if (!teacherValue) {
      alert("상담대상을 선택해주세요");
    } else if (text === "") {
      alert("상담내용을 입력해주세요");
    } else {
      router.push("/AcademyManagement/StudentManagement/counsel/CounselDetail");
    }
  };

  //const [input, setInput] = useRecoilState(inputAtom);
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
            <Button onClick={handleRegister}>등록</Button>
          </Row2>
          <p>상담 과목</p>
          <LongSelect
            options={[
              { value: "none", label: "상담 과목을 선택해주세요" },
              { value: "kor", label: "국어" },
              { value: "eng", label: "영어" },
              { value: "math", label: "수학" },
            ]}
            value={subjectValue}
            onChange={(e) => setSubjectValue(e.target.value)}
          />
          <p>상담 대상</p>
          <LongSelect
            options={[
              { value: "non", label: "상담 대상을 선택해주세요" },
              { value: "kor", label: "국어" },
              { value: "eng", label: "영어" },
              { value: "math", label: "수학" },
            ]}
            placeholder="선택해주세요"
            value={teacherValue}
            onChange={(e) => setTeacherValue(e.target.value)}
          />
          <p>상담 대상</p>
          <Textarea value={textValue} />
        </Right>
      </Body>
    </Container>
  );
};
export default CounselRegister;
