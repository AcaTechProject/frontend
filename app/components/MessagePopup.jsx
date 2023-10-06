import styled from "styled-components";
import Modal from "./Modal";
import { useEffect, useState } from "react";
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

const MessagePopup = ({ onClose, studentName, messages }) => {
  const [message, setMessage] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [recommendationText, setRecommendationText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  useEffect(() => {
   
    fetch("http://localhost:8080/student/message_text")
      .then((response) => response.json())
      .then((data) => {
       
        const attendanceMessages = data.filter((msg) => msg.mt_type === "출결");
        
        const combinedText = attendanceMessages.map((msg) => msg.mt_text).join("\n");
        setRecommendationText(combinedText);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  const handleToggleRecommendation = () => {
    setShowRecommendation(!showRecommendation);
  };

  const handleSelectMessage = (selectedMessage) => {
    setSelectedMessage(selectedMessage.replace('@@@', studentName)); // 클릭한 메시지를 저장
    setMessage(selectedMessage.replace('@@@', studentName)); // 클릭한 메시지를 메시지 입력 창에 설정
    // setShowRecommendation(false); 
  };

  const handleSendMessage = () => {
    
    const recipientPhoneNumber = "222-5678"; 
  
  
    const content = message;
  
    
    const messageData = {
      recipientPhoneNumber,
      content,
    };
  
    // 메시지 발송 요청 보내기
    fetch("http://localhost:8080/student/message/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 발송 결과 처리
        setModalMessage(data.result); // 발송 결과 메시지 설정
        setIsModalOpen(true); // 모달 열기
        console.log("메시지 발송 성공:", data)
        
        fetch("http://localhost:8080/student/message/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        })
          .then((response) => response.json())
          .then((data) => {
            // 메시지 발송 내역 저장 결과 처리
            console.log("메시지 발송 내역 저장 결과:", data);
          })
          .catch((error) => {
            console.error("메시지 발송 내역 저장 오류:", error);
          });
      })
      .catch((error) => {
        console.error("메시지 발송 오류:", error);
      });
  };
  

  return (
    <PopupOverlay>
      <PopupContent>
        <PopupHeader>메세지 발송</PopupHeader>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ParentName>{studentName} 학부모님</ParentName>
        <MessageInput
          type="text"
          placeholder="메세지를 입력하세요."
          value={message} // message 상태값 사용
          onChange={(e) => setMessage(e.target.value)} 
        />
        <SendButton onClick={handleToggleRecommendation}>
          {showRecommendation ? "취소" : "출결"}
        </SendButton>
        {showRecommendation && (
          <RecommendationBox
            value={recommendationText}
            readOnly
            onClick={() => handleSelectMessage(recommendationText)} 
          />
        )}
        {showRecommendation && (
          <NewButton onClick={() => handleModal("메시지를 발송하시겠습니까?")}>
            메세지발송
          </NewButton>
        )}
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} message={modalMessage} />}
      </PopupContent>
    </PopupOverlay>
  );
};

export default MessagePopup;
