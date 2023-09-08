"use client";
import React from "react";
import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import LongSelect from "@/app/components/LongSelect";
import Modal from "@/app/components/Modal";
import Table from "@/app/components/Table";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  selectedSubState,
  selectedDaeState,
  sangdamState,
  daesangState,
  contentState,
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

const CounselEdit = () => {
  const router = useRouter();

  const [changeSub, setChangeSub] = useRecoilState(selectedSubState);
  const [changeDae, setChangeDae] = useRecoilState(selectedDaeState);
  //const [changContent,setChangContent]=useRecoilState()
  const selectSubject = useRecoilValue(sangdamState);
  const selectDaesang = useRecoilValue(daesangState);
  const selectContent = useRecoilValue(contentState);

  //PageRegister 페이지에서 daesangState를 사용했듯이
  const setSangdam = useSetRecoilState(sangdamState); // setSangdam 추가
  const setDaesang = useSetRecoilState(daesangState);
  const setContent = useSetRecoilState(contentState);

  const handleSub = (e) => {
    const newValue = e.target.value;
    setChangeSub(newValue);
    // 이전 페이지에서 사용한 sangdamState도 업데이트
    setSangdam(newValue);
  };
  const handleDae = (e) => {
    const newValue = e.target.value;
    setChangeDae(newValue);
    // 이전 페이지에서 사용한 daesangState도 업데이트
    setDaesang(newValue);
  };
  const handleContent = (e) => {};
  const handleCancel = () => {
    alert("수정이 취소되었습니다");
    router.push("/AcademyManagement/StudentManagement/counsel/CounselDetail");
  };

  const handleComplete = () => {
    alert("수정이 완료되었습니다");
    router.push("/AcademyManagement/StudentManagement/counsel/CounselDetail");
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
