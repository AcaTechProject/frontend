"use client";

//import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Modal from "@/app/components/Modal";

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
  align-items: center;
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
const P1 = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
const Row2 = styled(Row)`
  justify-content: flex-end;
  margin-top: 70px;
`;
const Content = styled.div`
  border: 1px solid gray;
  width: 600px;
  height: 200px;
`;

//
const Containers = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 350px;
  align-items: center;
  justify-content: center;
`;
const Rows = styled.div`
  display: flex;
  gap: 20px;
  width: 350px;
  justify-content: center;
`;
const Input = styled.input`
  width: 230px;
  height: 30px;
  margin: 10px 0 0 5px;
  border: 1px solid #d3d2d2;
  border-radius: 10px;
`;
const P = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
const Inputs = styled(Input)`
  margin: 10px 0 0 30px;
`;
//인보이게
const InputImg = styled.input`
  display: none;
`;

const CounselDetail = () => {
  const router = useRouter();

  const [img, setImg] = useState("");
  const [userData, setUserData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [consultInfo, setConsultInfo] = useState({});

  const imgRef = useRef();

  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const handleCheck = () => {
    router.push("/AcademyManagement/StudentManagement/counsel");
  };

  const handlePick = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const url = window.location.href;
  const urlParts = url.split("?");

  const queryParams = new URLSearchParams(urlParts[1]);
  const studentId = queryParams.get("id"); // "id" 매개변수에서 studentId 가져오기
  const conId = queryParams.get("conId");

  console.log("conId", conId);
  const handleSaveClick = () => {};

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}`)
      .then((response) => {
        setUserData(response.data);
        console.log("학생누구?", response.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}/consulting/${conId}`)
      .then((response) => {
        setConsultInfo(response.data);
        console.log("상담 불러오기 성공", response.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, [studentId, conId]);
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"}
        {userData.name} {">"} 상담관리 {">"} 상담내역
      </p>

      <Body>
        <Left>
          <Containers>
            <Image
              src={img ? img : `/default_profile.png`}
              alt="프로필"
              width={250}
              height={250}
              style={{ borderRadius: "50%" }}
            />

            <InputImg
              type="file"
              accept="image/*"
              id="profileImg"
              alt="프로필"
              onChange={handlePick}
              ref={imgRef}
            />
            <h2>{userData.name}</h2>

            <Rows>
              <P1>생년월일 |</P1>
              <p style={{ lineHeight: "28px" }}>{userData.birth}</p>
            </Rows>
            <Rows style={{ marginRight: "10px" }}>
              <P1>학교 |</P1>
              <p style={{ lineHeight: "28px" }}>{userData.school}</p>
            </Rows>
            <Rows style={{ marginRight: "28px" }}>
              <P1>학년 |</P1>
              <p style={{ lineHeight: "28px" }}>{userData.grade}</p>
            </Rows>
          </Containers>
        </Left>
        <Right>
          <Row2>
            <Button
              onClick={() =>
                router.push(
                  `/AcademyManagement/StudentManagement/counsel/CounselEdit?id=${studentId}&conId=${conId}`
                )
              }
            >
              수정
            </Button>
            {isModalOpen && (
              <Modal
                onCheck={handleCheck}
                onClose={closeModal}
                message={modalMessage}
              />
            )}
            <Button
              onClick={() =>
                router.push(
                  `/AcademyManagement/StudentManagement/counsel/CounselHistory?id=${studentId}`
                )
              }
            >
              목록
            </Button>
          </Row2>
          <Row>
            <P>상담 과목</P>
            <p style={{ color: "#6B7280" }}>{consultInfo.con_class}</p>
          </Row>
          <Row>
            {" "}
            <P>상담 대상</P>
            <p style={{ color: "#6B7280" }}>{consultInfo.con_teacher}</p>
          </Row>

          <P>상담 내용</P>
          <Content>{consultInfo.con_content}</Content>
        </Right>
      </Body>
    </Container>
  );
};
export default CounselDetail;
