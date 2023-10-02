//가로 표
import styled from "styled-components";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import { resultState, noteState } from "@/recoil/atom";
import { useRecoilValue } from "recoil";
import axios from "axios";

const TableContainer = styled.table`
  border: 1px solid #d3d2d2;
  border-collapse: collapse;
  width: 606px;
  height: 85px;
  margin-top: 20px;
`;
const Tr = styled.tr`
  padding: 10px 35px;
  border-radius: 15px 15px 10px 0px;
`;
const FirstTd = styled.td`
  border: 1px solid #c4c4c4;
  padding: 5px 5px;
  background: #eceafe;
  text-align: center;
  height: 30px;
`;
const SecondTd = styled.td`
  border: 1px solid #c4c4c4;
  text-align: center;
  height: 35px;
`;
const ThirdTd = styled.td`
  text-align: Center;
  width: 606px;
  height: auto;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
const attendTable = () => {
  //const [isMessagePopupOpen, setMessagePopupOpen] = useState(false);
  //수강과목 및 분반 state
  const studentResult = useRecoilValue(resultState);
  const studentNote = useRecoilValue(noteState);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [userData, setUserData] = useState({}); // 빈 객체로 초기화
  const [classInfos, setClassInfos] = useState([]);
  const [className, setClassName] = useState("");

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSendMessage = (message) => {
    console.log("Sending message:", message);
    // 여기에서 실제
  };
  // const tableData = [
  //   {
  //     title: "수강 과목 및 분반",
  //     value: result,
  //   },
  //   {
  //     title: "기타 특이 사항 ",
  //     value: note,
  //   },
  useEffect(() => {
    const url = window.location.href;
    const urlParts = url.replace("?id=", "");
    const studentId = urlParts[urlParts.length - 1];
    axios
      .get(`http://localhost:8080/student/${studentId}`)

      .then((response) => {
        setUserData(response.data);
        setClassInfos(response.data.classInfos);
        setClassName(response.data.classInfos[0].class_name);
        console.log("data", response.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, []);

  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>출석</FirstTd>
            <FirstTd>지각</FirstTd>
            <FirstTd>결석</FirstTd>
            <FirstTd>기타</FirstTd>
          </Tr>
          <Tr onClick={openPopup}>
            <SecondTd>00 / 30</SecondTd>
            <SecondTd>00 / 30</SecondTd>
            <SecondTd>00 / 30</SecondTd>
            <SecondTd>00 / 30</SecondTd>
          </Tr>
        </tbody>
        {isPopupOpen && (
          <Popup onClose={closePopup} onSend={handleSendMessage} />
        )}
      </TableContainer>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>수강과목 및 분반</FirstTd>
          </Tr>
          <Tr>
            <SecondTd>{className}</SecondTd>
          </Tr>
          <Tr>
            <FirstTd>기타 특이 사항</FirstTd>
          </Tr>
          <Tr>
            <ThirdTd>{userData.etc}</ThirdTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default attendTable;
