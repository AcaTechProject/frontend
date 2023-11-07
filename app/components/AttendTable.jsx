//가로 표
import styled from "styled-components";
import { useState, useEffect } from "react";
import Popup from "./Popup";
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

const attendTable = () => {
  //const [isMessagePopupOpen, setMessagePopupOpen] = useState(false);
  //수강과목 및 분반 state

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
  };

  useEffect(() => {
    const url = window.location.href;
    const urlParts = url.replace("?id=", "");
    const studentId = urlParts[urlParts.length - 1];
    axios
      .get(`http://localhost:8080/student/${studentId}`)

      .then((response) => {
        setUserData(response.data);
        const classInfo = response.data.classInfos; // classInfos 객체를 가져옴.
        if (classInfo && Array.isArray(classInfo)) {
          const classNames = classInfo.map((classItem) => classItem.class_name);
          setClassInfos(classNames);
          console.log(classNames);
        } else {
          console.log("class_name을 추출할 수 없습니다.");
        }
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
            <SecondTd>{classInfos.join(", ")}</SecondTd>
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