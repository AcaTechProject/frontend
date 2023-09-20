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


const messages = {
    attendance: "*[지각알림] @@학생이 정시에 등원하지 않았습니다. 확인 부탁드립니다.",
    payment: "*[수납알림] @@학생이 정시에 등원하지 않았습니다. 확인 부탁드립니다.",
    encouragement: "*[격려알림] @@학생이 정시에 등원하지 않았습니다. 확인 부탁드립니다.",
    // ... 더 많은 메시지들
};

const MessageSendingComponent = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");
    const [showRecommendation, setShowRecommendation] = useState(false);
    const [actionMessage, setActionMessage] = useState("");

    const handleToggleRecommendation = (type) => {
        setShowRecommendation(!showRecommendation);
        setActionMessage(messages[type]);
        if (!showRecommendation) {
            setMessage(messages[type]);
        }
    };

    const handleActionButtonClick = (type) => {
        setActionMessage(messages[type]);
    };

    const handleRecommendationClick = () => {
        setMessage(actionMessage);
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
                <ActionButton onClick={() => handleToggleRecommendation("attendance")}>출결</ActionButton>
                <ActionButton onClick={() => handleActionButtonClick("payment")}>수납</ActionButton>
                <ActionButton onClick={() => handleActionButtonClick("encouragement")}>격려</ActionButton>
            </ButtonGroup>
            {showRecommendation && (
                <>
                    <RecommendationBox
                        value={actionMessage}
                        readOnly
                        onClick={handleRecommendationClick}
                    />
                    <NewButton onClick={() => onSendMessage(actionMessage)}>메세지발송</NewButton>
                </>
            )}
            {!showRecommendation && (
                <>
                    <RecommendationBox
                        value=""
                        readOnly
                    />
                    <NewButton onClick={() => onSendMessage(message)}>메세지발송</NewButton>
                </>
            )}
        </>
    );
};

export default MessageSendingComponent;