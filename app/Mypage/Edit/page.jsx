"use client";
import ProfileImage from "@/app/components/ProfileImage";
import Table from "../../components/Table";
import styled from "styled-components";
import TableEdit from "@/app/components/TableEdit";
import TableText from "@/app/components/TableText";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;
const Title = styled.h2`
  font-size: 25px;
  color: #3629b7;
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
  margin-top: -70px;
  width: 50%;
  gap: 40px;
  margin-right: 70px;
`;
const Button = styled.button`
  border-radius: 5px;
  color: white;
  background: #6956e5;
  width: 110px;
  height: 33px;
  border: 0;
`;
const Label = styled.label`
  color: #0095f6;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  margin-left: 100px;
`;
const Edit = () => {
  const router = useRouter();
  const telInputRefs = [useRef(null), useRef(null), useRef(null)];
  const [telNum, setTelNum] = useState(["", "", ""]);

  const handleEditButtonClicked = () => {
    if (telNum.some((num) => num === "")) {
      alert("전화번호가 입력되지 않았습니다.");
      telInputRefs[0].current.focus();
    } else {
      router.push("/login");
    }
  };
  const tableData2 = [
    {
      title: "담당 과목",
      value: "국어",
    },
  ];

  return (
    <>
      <Container>
        <Title>마이 페이지</Title>
        <Body>
          <Left>
            <ProfileImage></ProfileImage>
            <Label htmlFor="profileImg">이미지 추가</Label>
          </Left>

          <Right>
            <div>
              <h3>기본 정보</h3>
              <TableEdit onEditButtonClicked={handleEditButtonClicked} />
            </div>
            <div>
              <h3>담당 과목</h3>
              <Table data={tableData2}></Table>
            </div>
            <div>
              <h3>담당 수업</h3>
              <TableText title="담당 수업"></TableText>
            </div>
            <div>
              <h3>담당 학년</h3>

              <TableText title="담당 학년"></TableText>
            </div>
            <div style={{ display: "flex", gap: "46px" }}>
              <Button onClick={() => router.push("/Mypage")}>수정 취소</Button>
              <Button onClick={handleEditButtonClicked}>수정 완료</Button>
            </div>
          </Right>
        </Body>
      </Container>
    </>
  );
};
export default Edit;
