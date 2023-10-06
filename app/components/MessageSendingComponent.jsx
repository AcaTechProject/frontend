import React, { useState } from "react";
import styled from "styled-components";

const MessageInput = styled.input`
  width: 600px;
    height: 200px;
    border-radius: 10px;
    border: 6px solid #eceafe;
    padding: 10px;
    resize: none;
`;



const RecommendationBox = styled.textarea`
  width: 600px;
    height: 160px;
    border: 2px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    resize: vertical;
    overflow-y: auto;
    overflow-y: auto;
    font-size: 10px;
`;


const ButtonGroup = styled.div`
 display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 8px;
`;

const StyledButton = styled.button`
  /* 공통 스타일 설정 */
`;

const ActionButton = styled(StyledButton)`
width: 64px;
    height: 28px;
    background-color: #3629b7;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 8px;
`;
const NewButton = styled.button`
  width: 84px;
    height: 31px;
    background-color: #3629b7;
    color: white;
    border: none;
    border-radius: 5px
`;




const MessageSendingComponent = ({onSendMessage, messageData, dummyData, isCheckedList }) => {
  const [message, setMessage] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [actionMessages, setActionMessages] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const handleActionButtonClick = (type) => {
    
    const selectedMessages = messageData.filter((msg) => msg.mt_type === type);
    if (selectedMessages.length > 0) {
      const messagesText = selectedMessages.map((msg) => msg.mt_text);
      setActionMessages(messagesText);
      setShowRecommendation(true);
    }
  };

  const handleRecommendationClick = (messageText) => {
    setMessage(messageText);
    setShowRecommendation(false);
  };
// 아래 코드 추가: 선택된 학생들의 이름 가져와서 메시지에 적용
const selectedStudentNames = dummyData
  .filter((item, index) => isCheckedList[index])
  .map((student) => student.이름)
  .join(', '); // 체크된 학생들의 이름을 쉼표로 구분하여 문자열로 조합

const updatedMessage = message.replace(/@@@/g, selectedStudentNames);

const handleSendMessage = () => {
  if (showRecommendation && actionMessages.length > 0) {
    setMessage(actionMessages[0]); // RecommendationBox의 첫 번째 메시지를 MessageInput에 복사
  }

  
  if (message || actionMessages.length > 0) {
    // 아래 코드 추가: 선택된 학생들의 이름 가져와서 메시지에 적용
    const selectedStudentNames = dummyData
      .filter((item, index) => isCheckedList[index])
      .map((student) => student.이름)
      .join(', '); 
    const updatedMessage = message.replace(/@@@/g, selectedStudentNames);

    onSendMessage(showRecommendation ? actionMessages[0] : updatedMessage);
    setMessage("");
    setShowRecommendation(false);
    setActionMessages([]);
  }
};

  
return (
    <>
      <MessageInput
        type="text"
        placeholder="메세지를 입력하세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ButtonGroup>
        <ActionButton onClick={() => handleActionButtonClick("출결")}>출결</ActionButton>
        <ActionButton onClick={() => handleActionButtonClick("수납")}>수납</ActionButton>
        <ActionButton onClick={() => handleActionButtonClick("격려")}>격려</ActionButton>
      </ButtonGroup>
      {showRecommendation && (
        <>
          <div>
            {actionMessages.map((messageText, index) => (
              <div
                key={index}
                onClick={() => handleRecommendationClick(messageText)}
                style={{
                  cursor: "pointer",
                  backgroundColor: index === 0 ? "lightgray" : "white", 
                }}
              >
                {messageText}
              </div>
            ))}
          </div>
          <NewButton onClick={handleSendMessage}>메세지 발송</NewButton>
        </>
      )}
     {!showRecommendation && (
        <>
          <RecommendationBox
  value={actionMessages.join("\n")}
  readOnly
/>

          <NewButton onClick={handleSendMessage}>메세지 발송</NewButton>
        </>
      )}
    </>
  );
};

export default MessageSendingComponent;