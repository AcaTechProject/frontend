"use client";
import React from "react";
import ProfileEmpty from "@/app/components/ProfileEmpty";
import styled from "styled-components";
import { useState, useEffect } from "react";
import TableInput from "@/app/components/TableInput";
import { useRouter } from "next/navigation";
import AttendTable from "@/app/components/AttendTable";
import Table from "@/app/components/Table";
import SugangTable from "../../../../components/SugangTable";
import { FaPencilRuler } from "react-icons/Fa";
import { TfiWrite } from "react-icons/Tfi";
import MessagePopup from "@/app/components/MessagePopup";
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
  color: #fff;
  background: #8146ff;
  border: 0;
  font-size: 14px;
`;
const Row2 = styled(Row)`
  justify-content: flex-end;
  margin-top: 70px;
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
const MemberEdit = () => {
  const router = useRouter();
  const [btn, setBtn] = useState("수강생 관리");
  const [isMessageOpen, setMessageOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
    setMessageOpen(true);
  };
  const closeMessagePopup = () => {
    setMessageOpen(false);
  };
  const handleSendMessage = (message) => {
    console.log("sending", message);
  };

  const tableData = [
    {
      title: "원생",
      value: "010-0000-0000",
    },
    {
      title: "학부모",
      value: "부: 김지성 010-0000-0000, 모: 이지영 010-0000-000",
    },
    {
      title: "가족관계",
      value: "형: 00초등학교 5학년 기미리",
    },
  ];

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름
      </p>
      <Row>
        <Tab1>출결 관리</Tab1>
        <Tab2>학생 관리</Tab2>
      </Row>
      <Body>
        <Left>
          <ProfileEmpty />
        </Left>
        <Right>
          <Row2>
            <Button onClick={openMessagePopup}>메시지 발송</Button>
            {isMessageOpen && (
              <MessagePopup
                onClose={closeMessagePopup}
                onSend={handleSendMessage}
              />
            )}

            <Button onClick={() => router.push("./MemberEdit")}>
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
                      <span onClick={() => router.push("/Login")}>
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
                            "/AcademyManagement/StudentManagement/counsel"
                          )
                        }
                      />
                      <span
                        onClick={() =>
                          router.push(
                            "/AcademyManagement/StudentManagement/counsel"
                          )
                        }
                      >
                        맞춤 관리
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
export default MemberEdit;
