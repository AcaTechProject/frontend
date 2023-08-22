import React, { useState } from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 1007px;
  height: 450px;

  margin-top: 33px;

  margin-right: 100px;
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

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin: 0;
`;

const ReasonBox = styled.input`
  width: 100px;
`;

const List = ({ data, onParentClick }) => {
  const [selectedReasonIndex, setSelectedReasonIndex] = useState(null);

  return (
    <TableContainer>
      <thead>
        <Tr>
          <Th>이름</Th>
          <Th>분반</Th>
          <Th>연락처</Th>
          <Th>출결</Th>
        </Tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            <Td>{row.이름}</Td>
            <Td>{row.분반}</Td>
            <Td>
              <button onClick={() => onParentClick(row)}>학부모</button>
            </Td>
            <Td>
              <label>
                <CheckBox name={`출석_${index}`} value="present" /> 출석
              </label>
              <label>
                <CheckBox name={`지각_${index}`} value="late" /> 지각
              </label>
              <label>
                <CheckBox name={`결석_${index}`} value="absent" /> 결석
              </label>
              <label>
                <CheckBox
                  name={`기타_${index}`}
                  value="other"
                  onChange={() => setSelectedReasonIndex(index)}
                />{" "}
                기타
              </label>
              {selectedReasonIndex === index && (
                <ReasonBox placeholder="사유 입력" />
              )}
            </Td>
          </Tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default List;
