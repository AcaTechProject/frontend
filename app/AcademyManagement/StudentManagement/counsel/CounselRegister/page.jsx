"use client";
import React from "react";
import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import LongSelect from "@/app/components/LongSelect";
import Modal from "@/app/components/Modal";
import Table from "@/app/components/Table";
import { useRecoilState } from "recoil";
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
  const [selectedValue, setSelectedValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const [input, setInput] = useRecoilState(inputAtom);
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름 {">"} 상담관리{" "}
        {">"} 상담등록
      </p>

      <Body>
        <Left>
          <input type="text" value={input} onChange={handleInput}></input>
          <ProfileEmpty />
        </Left>
        <Right>
          <Row2>
            <Button>취소</Button>
            <Button>등록</Button>
          </Row2>
          <p>상담 과목</p>
          <LongSelect
            options={[
              { value: "none", label: "상담 과목을 선택해주세요" },
              { value: "kor", label: "국어" },
              { value: "eng", label: "영어" },
              { value: "math", label: "수학" },
            ]}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
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
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          />
          <p>상담 대상</p>
          <Textarea />
        </Right>
      </Body>
    </Container>
  );
};
export default CounselRegister;
