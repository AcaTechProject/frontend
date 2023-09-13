"use client";
import ProfileImage from "../components/ProfileImage";
import styled from "styled-components";
import Table from "../components/Table";
//import { useRouter } from "next/router";
import Link from "next/link";
//import ProfileImage from "../components/ProfileImage";
//import Button from "../components/Button";
import { useRecoilValue } from "recoil";
import {
  formDataState,
  selectedSubjectState,
  clsState,
  gradeState,
} from "@/recoil/atom";
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
const P = styled.p`
  margin-left: 110px;
  font-size: 18px;
`;
const Row = styled.div``;

const Name = styled.p`
  margin-left: 150px;
  font-size: 18px;
  font-weight: 700;
`;
const MyPage = () => {
  // const router = useRouter();
  const formData = useRecoilValue(formDataState);
  const selectedSubject = useRecoilValue(selectedSubjectState);

  //const content = useRecoilValue(editedTextState);
  //const textArea = useRecoilValue(textareaState);
  const cls = useRecoilValue(clsState);
  const grade = useRecoilValue(gradeState);
  const tableData1 = [
    {
      title: "전화번호",
      value: formData.tel,
    },
    {
      title: "이메일",
      value: formData.email,
    },
  ];
  const tableData2 = [
    {
      title: "담당 과목",
      value: selectedSubject,
    },
  ];
  const tableData3 = [
    {
      title: "담당 수업",
      value: cls,
    },
  ];
  const tableData4 = [
    {
      title: "담당 학년",
      value: grade,
    },
  ];
  return (
    <>
      <Container>
        <Title>마이 페이지</Title>
        <Body>
          <Left>
            <ProfileImage />
            <Name>{formData.name}</Name>
          </Left>

          <Right>
            <Row>
              <h3>기본 정보</h3>
              <Table data={tableData1}></Table>
            </Row>
            <Row>
              <h3>담당 과목</h3>
              <Table data={tableData2}></Table>
            </Row>
            <Row>
              <h3>담당 수업</h3>
              <Table data={tableData3}></Table>
            </Row>
            <Row>
              <h3>담당 학년</h3>
              <Table data={tableData4}></Table>
            </Row>
            <Link href="/Mypage/Edit">
              <button type="button"> 정보수정</button>
            </Link>
          </Right>
        </Body>
      </Container>
    </>
  );
};
export default MyPage;
