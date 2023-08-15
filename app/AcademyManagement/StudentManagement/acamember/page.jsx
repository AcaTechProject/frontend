"use client";
import React from "react";
import ProfileEmpty from "../../../components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect } from "react";
import TableInput from "../../../components/TableInput";
import { useRouter } from "next/navigation";
import MemberTable from "../../../components/MemberTable";

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
  color: #fff;
  background: #8146ff;
  border: 0;
  font-size: 14px;
`;
const Row2 = styled(Row)`
  justify-content: flex-end;
  margin-top: 50px;
`;

//이거 수정한거임!!!!!!!
const Row3 = styled.div`
  margin-top: 20px;
  margin-left: 70px;
`;

const Table = styled.table`
  border: 1px solid #d3d2d2;
  border-collapse: collapse;
  width: 220px;
  height: 50px;
  gap: 20px;
`;
const Tr = styled.tr`
  border: 1px solid #c4c4c4;
  padding: 10px 5px;
`;
const Td = styled.td`
  border: 1px solid #c4c4c4;
  padding: 10px 5px;
  width: 127px;
  background: #6956e5;
  color: white;
  text-align: center;
`;
const SecondTd = styled.td`
  border: 1px solid #c4c4c4;
  padding: 10px 5px;
  width: 127px;
`;
const Member = () => {
  const router = useRouter();
  const [btn, setBtn] = useState("수강생 관리");

  const onClick = (e) => {
    setBtn(e.target.value);
  };

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
          <ProfileEmpty />
        </Left>
        <Right>
          <Row2>
            <Button>메시지 발송</Button>
            <Button onClick={() => router.push("./MemberEdit")}>
              정보 수정
            </Button>
            <Button onClick={() => router.push("./MemberEdit")}>
              학생 삭제
            </Button>
          </Row2>
          <Row3>
            <TableInput />
            <MemberTable />
            <div style={{ display: "flex", gap: "60px" }}>
              <Table>
                <tbody>
                  <Tr>
                    <Td>성적관리</Td>
                  </Tr>
                  <Tr>
                    <SecondTd />
                  </Tr>
                </tbody>
              </Table>
              <Table>
                <tbody>
                  <Tr>
                    <Td>관리</Td>
                  </Tr>
                  <Tr>
                    <SecondTd />
                  </Tr>
                </tbody>
              </Table>
            </div>
          </Row3>
        </Right>
      </Body>
    </Container>
  );
};
export default Member;
