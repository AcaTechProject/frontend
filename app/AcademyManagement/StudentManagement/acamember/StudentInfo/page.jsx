"use client";
import React from "react";
//import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import TableInput from "@/app/components/TableInput";
import { useRouter } from "next/navigation";
import AttendTable from "@/app/components/AttendTable";
import Table from "@/app/components/Table";
import SugangTable from "../../../../components/SugangTable";
import { FaPencilRuler } from "react-icons/Fa";
import { TfiWrite } from "react-icons/Tfi";
import MessagePopup from "@/app/components/MessagePopup";
import Modal from "@/app/components/Modal";
import SMBtn from "@/app/components/SMBtn";
import AMBtn from "@/app/components/AMBtn";
import axios from "axios";

import Image from "next/image";
// import { useParams } from "react-router-dom";

const Containe = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 350px;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
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
`;
const Rows = styled.div`
  display: flex;
  gap: 23px;
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
const Row2 = styled(Row)`
  margin: 70px 0 0 255px;
  justify-content: flex-end;
`;

//이거 수정한거임!!!!!!!
const Row3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 10px;
`;

const SubTable = styled.table`
  border: 1px solid #d3d2d2;
  border-collapse: collapse;
  width: 273px;
  margin-top: 20px;
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
  height: 30px;
  font-size: 16px;
`;
const SecondTd = styled.td`
  border: 1px solid #c4c4c4;
  padding: 10px 5px;
  width: 127px;
  height: 50px;
  text-align: center;
`;
const Menu = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 20px;
`;
const StudentInfo = () => {
  //studentId 파라미터 가져오기

  const router = useRouter();

  //const [id, setId] = useState("");
  const [userData, setUserData] = useState({}); // 빈 객체로 초기화

  const [isMessagePopupOpen, setMessagePopupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/student/${studentId}`)
      .then((response) => {
        console.log("삭제 성공", response.data);
        router.push("/AcademyManagement/StudentManagement/acamember");
      })
      .catch((error) => {
        console.log("삭제 실패", error);
      });
  };
  const openMessagePopup = () => {
    setMessagePopupOpen(true);
  };
  const closeMessagePopup = () => {
    setMessagePopupOpen(false);
  };
  const handleSendMessage = (message) => {
    console.log("sending", message);
  };

  const [familyInfo, setFamilyInfo] = useState([]);
  const [familyName, setFamilyName] = useState("");

  const url = window.location.href;
  const urlParts = url.replace("?id=", "");
  const studentId = urlParts[urlParts.length - 1];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}`)
      .then((res) => {
        setUserData(res.data);

        setFamilyInfo(res.data.familyInfos);
        setFamilyName(familyInfo.fa_name);
        console.log("family", res.data.familyInfos);
        console.log("data", res.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, [studentId]);

  const tableData = [
    {
      title: "원생",
      value: userData.phone,
    },
    {
      title: "학부모",
      value: userData.parentPhone,
    },
    {
      title: "가족관계",
      value: familyName,
    },
  ];

  const [img, setImg] = useState("");

  //const nameInputRef = useRef(null);

  const imgRef = useRef();

  const handlePick = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  const handleMemEdit = () => {
    const url = window.location.href;
    const urlParts = url.replace("?id=", "");
    const studentId = urlParts[urlParts.length - 1];
    router.push(
      `/AcademyManagement/StudentManagement/acamember/MemberEdit?id=${studentId}`
    );
  };
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {userData.name}
      </p>
      <Rows>
        <AMBtn />
        <SMBtn />
      </Rows>
      <Body>
        <Left>
          {/* <ProfileEmpty matchData={matchData} /> */}
          <Containe>
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

            <Row>
              <P>생년월일 |</P>
              <p style={{ lineHeight: "28px" }}>{userData.birth}</p>
            </Row>
            <Row style={{ marginRight: "10px" }}>
              <P>학교 |</P>
              <p style={{ lineHeight: "28px" }}>{userData.school}</p>
            </Row>
            <Row style={{ marginLeft: "8px" }}>
              <P>학년 |</P>
              <p style={{ lineHeight: "28px" }}>{userData.grade}</p>
            </Row>
          </Containe>
        </Left>
        <Right>
          <Row2>
            <Button onClick={openMessagePopup}>메시지 발송</Button>
            {isMessagePopupOpen && (
              <MessagePopup
                onClose={closeMessagePopup}
                onSend={handleSendMessage}
              />
            )}
            <Button onClick={handleMemEdit}>정보수정</Button>

            <Button onClick={() => handleModal("정말 삭제하시겠습니까?")}>
              학생 삭제
            </Button>
            {isModalOpen && (
              <Modal
                onClose={closeModal}
                onCheck={handleDelete}
                message={modalMessage}
              />
            )}
          </Row2>
          <Row3>
            <Table data={tableData} />
            <AttendTable />
            <Menu>
              <SubTable>
                <tbody>
                  <Tr>
                    <Td>성적 관리</Td>
                  </Tr>
                  <Tr>
                    <SecondTd>
                      <FaPencilRuler
                        size="25"
                        onClick={() => router.push("/Login")}
                      />
                      <span
                        onClick={() =>
                          router.push(
                            "/AcademyManagement/StudentManagement/grade"
                          )
                        }
                      >
                        성적 관리
                      </span>
                    </SecondTd>
                  </Tr>
                </tbody>
              </SubTable>
              <SubTable>
                <tbody>
                  <Tr>
                    <Td>맞춤 관리</Td>
                  </Tr>
                  <Tr>
                    <SecondTd>
                      <TfiWrite
                        size="25"
                        onClick={() =>
                          router.push(
                            `/AcademyManagement/StudentManagement/counsel/CounselHistory?id=${studentId}`
                          )
                        }
                      />
                      <span
                        onClick={() =>
                          router.push(
                            `/AcademyManagement/StudentManagement/counsel/CounselHistory?id=${studentId}`
                          )
                        }
                      >
                        상담 관리
                      </span>
                    </SecondTd>
                  </Tr>
                </tbody>
              </SubTable>
            </Menu>
          </Row3>
        </Right>
      </Body>
    </Container>
  );
};
export default StudentInfo;
