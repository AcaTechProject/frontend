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
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

import {
  valueState,
  studentNameState,
  tel1State,
  tel2State,
  tel3State,
  studentTel1State,
  studentTel2State,
  studentTel3State,
  parentTel1State,
  parentTel2State,
  parentTel3State,
  studentListState,
  studentFamilyState,
  studentArrState,
  studentBirthState,
  studentSchoolState,
  studentGradeState,
} from "@/recoil/atom";

import Image from "next/image";

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

  const studentList = useRecoilValue(studentListState);
  const [id, setId] = useState("");
  const [matchData, setMatchData] = useState();

  //const [studentName, setStudentName] = useRecoilState(studentNameState);

  //const [btn, setBtn] = useState("수강생 관리");
  const [isMessagePopupOpen, setMessagePopupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const tel1 = useRecoilValue(studentTel1State);
  const tel2 = useRecoilValue(studentTel2State);
  const tel3 = useRecoilValue(studentTel3State);
  const parent1 = useRecoilValue(parentTel1State);
  const parent2 = useRecoilValue(parentTel2State);
  const parent3 = useRecoilValue(parentTel3State);
  const family = useRecoilValue(studentFamilyState);
  const arr = useRecoilValue(studentArrState);
  const setStudentName = useSetRecoilState(studentNameState);
  //const result = useRecoilValue(resultState);
  //console.log("tel1", tel1);
  //const studentName = useRecoilValue(studentNameState);

  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
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

  useEffect(() => {
    const params = window.location.search;

    if (typeof params !== "undefined") {
      const result = params.replace("?id=", "");
      const matchedData = studentList.find(
        (data) => data.id === Number(result)
      );
      setId(result);
      setMatchData(matchedData);
    }
  }, [id, matchData, studentList]);

  // console.log("id", id);
  //console.log("다시한번", matchData?.이름);
  //console.log("이값임???", setStudentName);
  //console.log("studentList", studentList);

  const formattedPhoneNumber = `${matchData?.원생.tel1}-${matchData?.원생.tel2}-${matchData?.원생.tel3}`;
  const formattedParentNumber = `${matchData?.학부모.parent1}-${matchData?.학부모.parent2}-${matchData?.학부모.parent3}`;
  const tableData = [
    {
      title: "원생",
      value: formattedPhoneNumber,
    },
    {
      title: "학부모",
      value: formattedParentNumber,
    },
    {
      title: "가족관계",
      value: matchData?.가족관계,
    },
  ];

  const [img, setImg] = useState("");

  //const nameInputRef = useRef(null);

  const imgRef = useRef();

  const studentName = useRecoilValue(studentNameState);
  const studentBirth = useRecoilValue(studentBirthState);
  const studentSchool = useRecoilValue(studentSchoolState);
  const studentGrade = useRecoilValue(studentGradeState);

  const handlePick = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };
  //console.log("원생", formattedParentNumber);
  //console.log("name", studentName);
  // console.log("match", matchData);
  // console.log("stu".studentList);

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {matchData?.이름}
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
            <h2>{matchData?.이름}</h2>

            <Row>
              <P>생년월일 |</P>
              <p style={{ lineHeight: "28px" }}>{matchData?.생년월일}</p>
            </Row>
            <Row style={{ marginRight: "10px" }}>
              <P>학교 |</P>
              <p style={{ lineHeight: "28px" }}>{matchData?.학교}</p>
            </Row>
            <Row style={{ marginLeft: "8px" }}>
              <P>학년 |</P>
              <p style={{ lineHeight: "28px" }}>{matchData?.학년}</p>
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

            <Button
              onClick={() =>
                router.push(
                  `/AcademyManagement/StudentManagement/acamember/MemberEdit?id=${id}`
                )
              }
            >
              정보 수정
            </Button>

            <Button onClick={() => handleModal("정말 삭제하시겠습니까?")}>
              학생 삭제
            </Button>
            {isModalOpen && (
              <Modal onClose={closeModal} message={modalMessage} />
            )}
          </Row2>
          <Row3>
            <Table data={tableData} />
            <AttendTable matchData={matchData} />
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
                            `/AcademyManagement/StudentManagement/counsel/CounselHistory?id=${id}`
                          )
                        }
                      />
                      <span
                        onClick={() =>
                          router.push(
                            `/AcademyManagement/StudentManagement/counsel/CounselHistory?id=${id}`
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
