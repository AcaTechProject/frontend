"use client";
import ProfileImage from "../components/ProfileImage";
import styled from "styled-components";
import Table from "../components/Table";
import Link from "next/link";
import { useParams } from "react-router-dom";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  formDataState,
  selectedSubjectState,
  clsState,
  gradeState,
} from "@/recoil/atom";
import axios from "axios"; // axios를 import 추가

const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;

const Title = styled.h2`
  font-size: 25px;
  color: #3629b7;
`;

const Row = styled.div``;
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

const Name = styled.p`
  margin-left: 150px;
  font-size: 18px;
  font-weight: 700;
`;

const MyPage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({}); // 빈 객체로 초기화
  const [url2, setUrl2] = useState();

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    axios;
    axios
      .get(`http://localhost:8080/user/${userId}`)
      .then((response1) => {
        setUserData(response1.data);
        console.log("여기에?", response1.data);
      })
      .catch((error) => console.log("요청 실패", error));

    axios
      .get(`http://localhost:8080/user/class/${userId}`)
      .then((response2) => {
        const classData = response2.data.map((item) => item.className);
        setUrl2(classData);
        console.log("여기는?", classData);
      })
      .catch((error) => console.log("요청 실패", error));
  }, []);

  const tableData1 = [
    {
      title: "전화번호",
      value: userData.user_phone, // 필드가 존재하는지 확인 후 사용
    },
    {
      title: "이메일",
      value: userData.user_email, // 필드가 존재하는지 확인 후 사용
    },
  ];
  const tableData2 = [
    {
      title: "담당 과목",
      value: userData.user_major, // 필드가 존재하는지 확인 후 사용
    },
  ];
  const tableData3 = [
    {
      title: "담당 수업",
      // value: setUrl2.classData,
      value: url2,
    },
  ];
  const tableData4 = [
    {
      title: "담당 학년",
      value: userData.user_grade,
    },
  ];

  return (
    <Container>
      {userData ? (
        <>
          <Title>마이 페이지</Title>
          <Body>
            <Left>
              <ProfileImage />
              <Name>{userData.user_name}</Name>
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
          </Body>{" "}
        </>
      ) : (
        <p>loading...</p>
      )}
    </Container>
  );
};

export default MyPage;
