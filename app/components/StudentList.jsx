import React from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 1210px;
  height: 450px;
  margin-top: 33px;
  margin-right: 100px;
  overflow-y: auto;
`;

const Tr = styled.tr`
  border: 1px solid #ddd;
  height: 54px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: #eceafe;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  height: 20px;
  text-align: center;
`;
const EmptyRow = styled.tr`
  height: 54px;
`;

const List = ({ data, headers }) => {
  const totalItems = data.length;
  if (totalItems === 0) {
    return (
      <TableContainer>
        <thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </thead>
        <tbody>
          <EmptyRow>
            <Td colSpan={headers.length} style={{ textAlign: "center" }}>
              데이터가 없습니다
            </Td>
          </EmptyRow>
        </tbody>
      </TableContainer>
    );
  }
  return (
    <TableContainer>
      <thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            {headers.slice(1).map((header, columnIndex) => (
              <Td key={columnIndex}>{row[header]}</Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default List;
