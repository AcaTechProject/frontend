"use client";
import Button from "@/app/components/Button";
import styled from "styled-components";
import { useState } from "react";
import StudentList from "@/app/components/StudentList";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Modal from "@/app/components/Modal";
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

const CounselEdit = () => {
  const data = [{ 상담과목: "국어", 일시: "2월", 담당교사: "김은진" }];
  const headers = ["No", "상담과목", "일시", "담당교사"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  const handleModal = (message) => {
    setIsModalOpen(true);
    setModalMessage(message);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름
      </p>
      <h2>김지수 학생 상담내역</h2>
      <Row>
        <CustomButton
          $medium
          $disabled
          onClick={() =>
            handleModal("선택된 학생의 상담내역을 삭제하시겠습니까?")
          }
        >
          <DeleteForeverIcon size={10} />
          전체 삭제
        </CustomButton>
        {isModalOpen && <Modal onClose={closeModal} message={modalMessage} />}
      </Row>
      <StudentList data={data} headers={headers} />
    </Container>
  );
};
export default CounselEdit;
