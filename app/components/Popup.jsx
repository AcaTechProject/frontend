import React, { useState } from "react";
import styled from "styled-components";

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

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 400px;
  height: 400px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Tr = styled.tr`
  height: 50px;
  border: 1px solid #ddd;
`;

const Th = styled.th`
  padding: 8px;
  text-align: center;
  background-color: #eceafe;
  font-weight: 400;
  font-size: 14px;
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  height: 10px;
  text-align: center;
  font-size: 14px;
`;

const Div = styled.div`
  overflow: auto;
`;
const EmptyRow = styled.tr`
  height: 54px;
`;

const Popup = ({ onClose }) => {
  const [message, setMessage] = useState("");

  const data = [
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },

    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
    {
      이름: "ㅇㄹㅇㄹ",
      날짜: "ㅇㄹㅇㄹ",
      출결: "결석(병원)",
    },
  ];
  const totalItems = data.length;

  const handleSendMessage = () => {
    // 여기에 메세지 전송 로직 추가
    console.log("Sending message:", message);
    // 메세지 전송 후 팝업 닫기
    onClose();
  };
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  if (totalItems === 0) {
    return (
      <PopupOverlay>
        <PopupContent>
          <PopupHeader>출결관리 기타 내역</PopupHeader>
          <CloseButton onClick={onClose}>×</CloseButton>
          <Div>
            <TableContainer>
              <thead>
                <Tr onClick={handlePopupClick}>
                  <Th>No</Th>
                  <Th>이름</Th>
                  <Th>날짜</Th>
                  <Th>출결</Th>
                </Tr>
              </thead>
              {/* {data.length === 0 ? (
              <p style={{ textAlign: "center" }}>데이터가 없습니다.</p>
            ) : ( */}
              <tbody>
                <EmptyRow>
                  <Td colSpan={4}>데이터가 없습니다</Td>
                </EmptyRow>
              </tbody>
            </TableContainer>
          </Div>
        </PopupContent>
      </PopupOverlay>
    );
  }
  return (
    <PopupOverlay>
      <PopupContent>
        <PopupHeader>출결관리 기타 내역</PopupHeader>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Div>
          <TableContainer>
            <thead>
              <Tr onClick={handlePopupClick}>
                <Th>No</Th>
                <Th>이름</Th>
                <Th>날짜</Th>
                <Th>출결</Th>
              </Tr>
            </thead>

            <tbody>
              {data.map((row, index) => (
                <Tr key={index}>
                  <Td>{index}</Td>
                  <Td>{row.이름}</Td>
                  <Td>{row.날짜}</Td>
                  <Td>{row.출결}</Td>
                </Tr>
              ))}
            </tbody>
          </TableContainer>
        </Div>
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;
