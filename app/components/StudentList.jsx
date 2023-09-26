"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

import styled from "styled-components";
import {
  studentNameState,
  studentBirthState,
  studentSchoolState,
} from "@/recoil/atom";

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

const StudentList = ({ data, headers, handleStudentInfo }) => {
  const router = useRouter();
  // const [currentPage, setCurrentPage] = useState(5);
  // const itemsPerPage = 6;

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const displayedData = data.slice(startIndex, endIndex);

  const { push, pathname, query } = router;
  const totalItems = data.length;

  const url = window.location.href;
  const urlParts = url.replace("?id=", "");
  const studentId = urlParts[urlParts.length - 1];

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

  const onTdClick = (id) => {
    //const id = "1234";

    router.push(
      `/AcademyManagement/StudentManagement/acamember/StudentInfo?id=${studentId}`
    );

    //  console.log("id", id);
  };

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
            <Td onClick={() => onTdClick(row)}>{index + 1}</Td>
            {headers.slice(1).map((header, columnIndex) => (
              <Td key={columnIndex}>{row[header]}</Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default StudentList;
