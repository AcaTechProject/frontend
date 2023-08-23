import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
const PopupOverlay = styled.div`
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

const PopupContent = styled.div`
  width: 478px;
  height: 533px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
`;

const PopupHeader = styled.div`
  width: 478px;
  height: 66px;
  background-color: #d3d2d2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 30px;
  cursor: pointer;
`;

const MessageInput = styled.input`
  width: 369px;
  height: 110px;
  border-radius: 10px;
  border: 6px solid #eceafe;
  padding: 10px;
  margin-top: 2px;
  resize: none;
`;

const SendButton = styled.button`
  width: 64px;
  height: 28px;
  background-color: #3629b7;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 8px;
  align-self: right;
  margin-right: 330px;
`;

const RecommendationBox = styled.textarea`
  width: 369px;
  height: 110px;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  resize: vertical;
  overflow-y: auto;
  font-size: 10px; /* 글꼴 크기 조정 */
`;

const NewButton = styled.button`
  width: 84px;
  height: 31px;
  background-color: #3629b7;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 12px;
`;

const ParentName = styled.p`
  align-self: left;
  margin-right: 290px;
  font-size: 15px; /* 글꼴 크기 조정 */
`;

const MessagePopup = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSendMessage = () => {
    // 여기에 메세지 전송 로직 추가
    console.log("Sending message:", message);
    // 메세지 전송 후 팝업 닫기
    onClose();
  };

  const handleToggleRecommendation = () => {
    setShowRecommendation(!showRecommendation);
  };

  return (
    <PopupOverlay>
      <PopupContent>
        <PopupHeader>메세지 발송</PopupHeader>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ParentName>김ㅇㅇ 학부모님</ParentName>
        <MessageInput
          type="text"
          placeholder="메세지를 입력하세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SendButton onClick={handleToggleRecommendation}>
          {showRecommendation ? "취소" : "출결"}
        </SendButton>
        {showRecommendation && (
          <RecommendationBox
            value="*[지각알림] @@학생이 정시에 등원하지 않았습니다. 확인 부탁드립니다."
            readOnly
          />
        )}
        {showRecommendation && (
          <NewButton onClick={() => handleModal("메시지를 발송하시겠습니까?")}>
            메세지발송
          </NewButton>
        )}{" "}
        {isModalOpen && <Modal onClose={closeModal} message={modalMessage} />}
      </PopupContent>
    </PopupOverlay>
  );
};

export default MessagePopup;
