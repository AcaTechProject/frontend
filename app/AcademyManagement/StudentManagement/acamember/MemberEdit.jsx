"use client";
import React from "react";
import ProfileCard from "../../../components/ProfileCard";
import styled from "styled-components";
import { useState, useEffect } from "react";
import TableInput from "../../../components/TableInput";
import TableRow from "../../../components/TableRow";
import { useRouter } from "next/navigation";

const Container = styled.div`
  padding: 40px 70px 55px 80px;
`;
const Body = styled.section`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0 0 20px;
  width: 50%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
  width: 50%;
  gap: 40px;
  margin-right: 100px;
`;
const Row = styled.div`
  display: flex;
  gap: 40px;
`;
const Tab1 = styled.button`
  border-radius: 5px;
  width: 105px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
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
  color: #8146ff;
  background: #eceafe;
  border: 0;
  font-size: 14px;
`;
const Row2 = styled(Row)`
  justify-content: flex-end;
  margin-top: 50px;
`;
const Row3 = styled.div`
  margin-top: 20px;
`;

const MemberEdit = () => {
  const router = useRouter();
  const [btn, setBtn] = useState("수강생 관리");

  const onClick = (e) => {
    setBtn(e.target.value);
  };

  useEffect(() => {
    const arr = ["출결관리", "수강생 관리"];
    const nonTargeted = arr.filter((item) => item != btn);
    nonTargeted.map((item) => {
      return null;
    });
  }, [btn]);
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 원생관리 {">"} 이름
      </p>
      <Row>
        <Tab1 onClick={onClick}>출결관리</Tab1>
        <Tab2 onClick={onClick}>수강생 관리</Tab2>
      </Row>
      <Body>
        <Left>
          <ProfileCard />
        </Left>
        <Right>
          <Row2>
            <Button
              onClick={() =>
                router.push("/AcademyManagement/StudentManagement/acamember")
              }
            >
              취소
            </Button>
            <Button>저장</Button>
          </Row2>
          <Row3>
            <TableInput />

            <TableRow />
          </Row3>
        </Right>
      </Body>
    </Container>
  );
};
export default MemberEdit;
