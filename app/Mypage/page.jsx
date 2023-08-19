"use client";
import ProfileImage from "../components/ProfileImage";
import styled from "styled-components";
import Table from "../components/Table";
import { useRouter } from "next/navigation";

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
const Button = styled.button`
  border-radius: 5px;
  color: white;
  background: #6956e5;
  width: 110px;
  height: 33px;
  border: 0;
`;
const MyPage = () => {
  const router = useRouter();
  const tableData1 = [
    {
      title: "전화번호",
      value: "010-0000-0000",
    },
    {
      title: "이메일",
      value: "email@naver.com",
    },
  ];
  const tableData2 = [
    {
      title: "담당 과목",
      value: "국어",
    },
  ];
  const tableData3 = [
    {
      title: "담당 수업",
      value: "국어 김은진 A",
    },
  ];
  const tableData4 = [
    {
      title: "담당 학년",
      value: "1학년(초등부),3학년(초등부)",
    },
  ];
  return (
    <>
      <Container>
        <Title>마이 페이지</Title>
        <Body>
          <Left>
            <ProfileImage></ProfileImage>
            <P>학생명</P>
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
            <Button onClick={() => router.push("/Mypage/Edit")}>
              정보수정
            </Button>
          </Right>
        </Body>
      </Container>
    </>
  );
};
export default MyPage;
