"use client";
import React from "react";
import ProfileCard from "../../../../components/ProfileCard";
import styled from "styled-components";
import { useState, useEffect } from "react";
import TableInput from "../../../../components/TableInput";
import SugangTable from "../../../../components/SugangTable";
import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 40px 70px 55px 85px;
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
  margin-top: -70px;
  gap: 40px;
`;
const Row = styled.div`
  display: flex;
  gap: 40px;
`;
const Tab1 = styled.button`
  border-radius: 5px;
  width: 110px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  font-weight: bold;
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
  font-size: 15px;
  font-weight: 500;
`;
const Row2 = styled(Row)`
  justify-content: flex-end;
  margin-top: 85px;
`;
const Row3 = styled.div`
  margin-top: 20px;
`;

const MemberEdit = () => {
  const router = useRouter();

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름
      </p>
      <Row>
        <Tab1 onClick={() => router.push("/AcademyManagement/attendance")}>
          {/* <Link to="/AcademyManagement/attendance">출결관리</Link> */}
          출결 관리
        </Tab1>
        <Tab2>학생 관리</Tab2>
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
            <br />
            <br />
            <SugangTable />
          </Row3>
        </Right>
      </Body>
    </Container>
  );
};
export default MemberEdit;
