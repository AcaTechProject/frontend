import React from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 40px;
`;

const TableRow = styled.tr`
  cursor: pointer;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  background-color: #eceafe;
`;

const TableData = styled.td`
  padding: 8px;
  text-align: center;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const PageNumber = styled.span`
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => (props.isActive ? "#8146ff" : "#000")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

const itemsPerPage = 5; // 페이지당 보여줄 항목 수

const PastAttendanceList = ({ data, onRowClick, currentPage, totalPages, onPageChange }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <TableContainer>
        <thead>
          <TableRow>
            <TableHeader>이름</TableHeader>
            <TableHeader>일시</TableHeader>
            <TableHeader>분반</TableHeader>
            <TableHeader>출결정보</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {displayedData.map((row, index) => (
            <TableRow key={index} onClick={() => onRowClick(index)}>
              <TableData>{row.이름}</TableData>
              <TableData>{row.일시}</TableData>
              <TableData>{row.분반}</TableData>
              <TableData>
                출석{row.출석} 지각{row.지각} 결석{row.결석} 기타{row.기타}
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
      {totalPages > 1 && (
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageNumber
              key={index}
              onClick={() => onPageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PageNumber>
          ))}
        </Pagination>
      )}
    </div>
  );
};

export default PastAttendanceList;