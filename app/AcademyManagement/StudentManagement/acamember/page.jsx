"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Select from "../../../components/Select";
import MessagePopup from "../../../components/MessagePopup";
const Container = styled.section`
  padding: 116px 70px 55px 85px;
`;
const D = styled.div`
  display: flex;
  gap: 23px;
`;
const Div = styled.div`
  margin-top: 15px;
  display: flex;
  position: relative;
  align-items: center;
`;
const Total = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #8146ff;
  margin: 25px 0 0 5px;
`;
const Button = styled.button`
border-radius: 5px;
  width: 110px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  font-weight: bold;
  font-size:14px;
  &:hover {
    color: white;
    background: #8146ff;
   
`;
const Btn = styled.button`
  width: 95px;
  height: 34px;
  border-radius: 5px;
  color: #8146ff;
  background: #eceafe;
  border: 0;
  font-size: 15px;
  font-weight: 700;
  margin-left: 30px;
`;
const Tab = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-top: 15px;
  border: none;
  background: white;
  &:hover {
    color: #3629B7;
    background: white;
    border-bottom: 2px solid #3629b7;
`;

const acamember = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Container>
      <p>원생관리 - 학생관리 - 신규상담</p>
      <D>
        <Button>출결관리</Button>
        <Button>학생관리</Button>
      </D>
      <D>
        <Tab>원생관리</Tab>
        <Tab>신규상담</Tab>
      </D>
      <Div>
        <Select
          options={[
            { value: "kor", label: "국어 김은진A" },
            { value: "kor", label: "국어 김은진A" },
            { value: "kor", label: "국어 김은진A" },
          ]}
          value={selectedValue}
          onChange={handleSelectChange}
        />
        <div style={{ display: "flex" }}>
          <Total />
          <p style={{ fontSize: "13px", color: "#787486", marginTop: "22px" }}>
            총 13명
          </p>
        </div>

        <div style={{ marginLeft: "62%" }}>
          <Btn>메시지 발송</Btn>
          <Btn onClick={() => router.push("./acamember/register")}>
            학생 등록
          </Btn>
        </div>
      </Div>
      <button
        onClick={() =>
          router.push(
            "/AcademyManagement/StudentManagement/acamember/MemberEdit"
          )
        }
      ></button>
      {/* 표 넣을 곳 */}
    </Container>
  );
};
export default acamember;
