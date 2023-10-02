"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

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

const SangdamList = ({ data, headers, handleStudentInfo }) => {
  const router = useRouter();
  const [consultInfo, setConsultInfo] = useState([]);

  const [conId, setConId] = useState("");
  const [conIds, setConIds] = useState([]);

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

  //학생 상담 전체 조회
  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}/consulting`)
      .then((response1) => {
        setConsultInfo(response1.data);
        const conIds = response1.data.map((item) => item.con_id);
        console.log("상담 불러오기 성공!", response1.data);
        console.log("conIds", conIds);
        setConIds(conIds);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, [studentId]);

  const onTdClick = (index) => {
    // const conId = conIdList[0];
    const conId = conIds[index];
    router.push(
      `/AcademyManagement/StudentManagement/counsel/CounselDetail?id=${studentId}&conId=${conId}`
    );
  };

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
            <Td onClick={() => onTdClick(index)}>{index + 1}</Td>
            {headers.slice(1).map((header, columnIndex) => (
              <Td key={columnIndex}>{row[header]}</Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default SangdamList;
