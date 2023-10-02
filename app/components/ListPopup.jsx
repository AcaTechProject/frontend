import React, { useState } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  width: 746px;
  height: 395px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #d3d2d2;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Tr = styled.tr`
  border: 1px solid #ddd;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: #eceafe;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  float: right;
`;

const ListPopup = ({ data, selectedRowIndex, onClose, onParentClick }) => {
  const selectedRowData = data[selectedRowIndex];
  const [selectedReasonIndex, setSelectedReasonIndex] = useState(null);

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>닫기</CloseButton>
        <h2> 출결 정보</h2>
        <p>날짜: {selectedRowData.일시}</p>
        <TableContainer>
          <thead>
            <Tr>
              <Th>이름</Th>
              <Th>분반</Th>
              <Th>출결</Th>
              <Th>출결 사항</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>{selectedRowData.이름}</Td>
              <Td>{selectedRowData.분반}</Td>
              <Td>{selectedRowData.출결}</Td>
              <Td>
                <RadioContainer>
                  <label>
                    <input
                      type="radio"
                      name={`출결_${selectedRowIndex}`}
                      value="출석"
                    />{" "}
                    출석
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`출결_${selectedRowIndex}`}
                      value="지각"
                    />{" "}
                    지각
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`출결_${selectedRowIndex}`}
                      value="결석"
                    />{" "}
                    결석
                  </label>
                </RadioContainer>
              </Td>
             
            </Tr>
          </tbody>
        </TableContainer>
      </PopupContent>
    </PopupContainer>
  );
};

export default ListPopup;
