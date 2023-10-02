"use client";
import Button from "@/app/components/Button";
import styled from "styled-components";
import { useState, useEffect } from "react";
import StudentList from "@/app/components/StudentList";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Modal from "@/app/components/Modal";
import axios from "axios";
const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;
const Row = styled.div`
  display: flex;
  gap: 23px;
`;
const CustomButton = styled(Button)`
  .MuiSvgIcon-root {
    vertical-align: middle;
  }
`;

const HistoryManage = () => {
  const headers = ["No", "상담과목", "일시", "담당교사"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const [userData, setUserData] = useState({});
  const [consultInfo, setConsulInfo] = useState([]);

  const handleModal = (message) => {
    setIsModalOpen(true);
    setModalMessage(message);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const data = consultInfo.map((item) => ({
    상담과목: item.con_class,
    일시: item.con_date,
    담당교사: item.con_teacher,
  }));

  const url = window.location.href;
  const urlParts = url.replace("?id=", "");
  const studentId = urlParts[urlParts.length - 1];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}/consulting`)
      .then((response1) => {
        setConsulInfo(response1.data);
        console.log("상담 불러오기 성공!", response1.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, [studentId]);
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {userData.name} {">"}{" "}
        상담관리 {">"} 상담내역 관리
      </p>
      <h2>{userData.name} 학생 상담내역</h2>
      <Row>
        <CustomButton
          $medium
          $disabled
          onClick={() =>
            handleModal("선택된 학생의 상담내역을 삭제하시겠습니까?")
          }
        >
          <DeleteForeverIcon size={10} />
          삭제
        </CustomButton>
        {isModalOpen && <Modal onClose={closeModal} message={modalMessage} />}
      </Row>
      <StudentList data={data} headers={headers} />
    </Container>
  );
};
export default HistoryManage;
