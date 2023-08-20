import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 230px;
  height: 154px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 366px;
  right: 346px;
  bottom: 190px;
  left: 580px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  margin-top: 14px;
`;

const ConfirmButton = styled.button`
  width: 68px;
  height: 29px;
  border-radius: 10px;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;
  margin: 0 10px; /* 버튼 사이의 마진 추가 */
`;

const CancelButton = styled.button`
  width: 68px;
  height: 29px;
  border-radius: 10px;
  background-color: #6956e5;
  color: white;
  border: none;
  cursor: pointer;
  margin: 0 10px; /* 버튼 사이의 마진 추가 */
`;
const P = styled.p`
  text-align: center;
`;

const Modal = ({ onClose, message }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <div style={{ marginTop: "30px" }}>
          <p>{message}</p>
          <ModalButtons>
            <CancelButton onClick={onClose}>확인</CancelButton>
            <ConfirmButton onClick={onClose}>취소</ConfirmButton>
          </ModalButtons>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
