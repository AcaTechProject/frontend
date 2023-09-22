"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Select from "../../../components/Select";
import MessagePopup from "@/app/components/MessagePopup";
import StudentList from "@/app/components/StudentList";
import AMBtn from "@/app/components/AMBtn";
import SMBtn from "@/app/components/SMBtn";
import { studentListState } from "@/recoil/atom";
//api 호출
import axios from "axios";

import {
  resultState,
  studentNameState,
  studentSchoolState,
} from "@/recoil/atom";
import { useRecoilValue } from "recoil";

const Container = styled.section`
  padding: 116px 70px 55px 85px;
`;
const D = styled.div`
  display: flex;
  gap: 23px;
`;
const Div = styled.div`
  margin-top: 15px;
  display: flex;
  position: relative;
  align-items: center;
`;
const Total = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #8146ff;
  margin: 25px 0 0 5px;
`;
const Button = styled.button`
border-radius: 5px;
  width: 110px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  font-weight: bold;
  font-size:14px;
  &:hover {
    color: white;
    background: #8146ff;
   
`;
const Btn = styled.button`
  width: 95px;
  height: 34px;
  border-radius: 5px;
  color: #8146ff;
  background: #eceafe;
  border: 0;
  font-size: 15px;
  font-weight: 700;
  margin-left: 30px;
`;
const Tab = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-top: 15px;
  border: none;
  background: white;
  &:hover {
    color: #3629B7;
    background: white;
    border-bottom: 2px solid #3629b7;
`;

const acamember = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");
  const [isMessagePopupOpen, setMessagePopupOpen] = useState(false);
  const userId = sessionStorage.getItem("userId");
  let userData = []; // userData를 선언

  //class_name"을 저장하는 배열을 나타내는 상태
  const [classList, setClassList] = useState([]);
  //const [userClasses, setUserClasses] = useState([]);
  // const [selectedClass, setSelectedClass] = useState("");
  const [userClass, setUserClass] = useState(""); // 사용자의 담당수업 정보
  const [stuList, setStuList] = useState([]); //학생 이름,분반.학교 정보가 들어있음.
  const [data, setData] = useState([]);
  const [userClassId, setUserClassId] = useState(null);

  useEffect(() => {
    //select 부분-> 유저의 담당수업이 불러와짐.
    axios
      .get(`http://localhost:8080/user/class/${userId}`)
      .then((response) => {
        userData = response.data; // userData에 데이터 저장
        const classList = [
          ...new Set(userData.map((student) => student.className)),
        ];
        setUserClass(classList[0]); // 기본적으로 첫 번째 수업을 선택하도록 설정
        setClassList(classList);
        setSelectedValue(classList[0]); // 기본적으로 첫 번째 수업을 선택하도록 설정
        console.log("사용자 정보: ", userData);
        const firstUserClassId = userData[0].classId; // 클래스의 ID를 가져옴
        setUserClassId(firstUserClassId); // 클래스의 ID를 설정,첫번째 id 받아옴.
        console.log("id", firstUserClassId);

        const studentsInSelectedClass = userData.filter(
          (student) => student.classId === firstUserClassId
        );

        setStuList(studentsInSelectedClass);
      })
      .catch((error) => {
        console.log("요청 실패", error);
      });
  }, [userId, userClass]);

  useEffect(() => {
    if (userClassId !== null) {
      axios
        .get(`http://localhost:8080/student/byClass/${userClassId}`)
        .then((response) => {
          //setStuList(response.data);
          // const classId = response.data.classId;
          const extractedData = response.data.map((student) => ({
            No: student.no,
            id: student.studentId,
            이름: student.name,
            분반: userClass,

            학교: student.school,
          }));
          setStuList(extractedData); // 데이터 업데이트
          console.log("수업", response.data);
        })
        .catch((error) => {
          console.log("수업 요청 실패", error);
        });
    }
  }, [userClassId]);
  const headers = ["No", "이름", "분반", "학교"];

  const openMessagePopup = () => {
    setMessagePopupOpen(true);
  };

  const closeMessagePopup = () => {
    setMessagePopupOpen(false);
  };
  const handleSendMessage = (message) => {
    console.log("Sending message:", message);
    // 여기에서 실제 메시지 전송 로직을 구현
  };

  const handleSelectChange = (e) => {
    const selectedClassName = e.target.value;
    setSelectedValue(selectedClassName);

    // const selectedClassId = classList.find(
    //   (classItem) => classItem === e.target.value
    // );

    const studentsInSelectedClass = userData.filter(
      //   // userData 사용
      (student) => student.className === selectedClassName
    );
    setStuList(studentsInSelectedClass);
  };
  const handleStudentInfo = (studentId) => {
    router.push(
      `/AcademyManagement/StudentManagement/acamember/StudentInfo?id=${studentId}`
    );
  };

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리
      </p>
      <D>
        <AMBtn />
        <SMBtn />
      </D>
      <D>
        <Tab
          onClick={() =>
            router.push("/AcademyManagement/StudentManagement/acamember")
          }
        >
          수강생 관리
        </Tab>
        <Tab
          onClick={() =>
            router.push("/AcademyManagement/StudentManagement/counsel")
          }
        >
          신규상담
        </Tab>
      </D>
      <Div>
        <Select
          options={classList.map((userClass) => ({
            value: userClass,
            label: userClass,
          }))}
          value={selectedValue}
          onChange={handleSelectChange}
        />
        <div style={{ display: "flex" }}>
          <Total />
          <p style={{ fontSize: "13px", color: "#787486", marginTop: "22px" }}>
            총 {stuList.length}명
          </p>
        </div>

        <div style={{ marginLeft: "62%" }}>
          <Btn
            onClick={() =>
              router.push(
                "/AcademyManagement/StudentManagement/acamember/Message/Send"
              )
            }
          >
            메시지 발송
          </Btn>

          <Btn
            onClick={() =>
              router.push(
                "/AcademyManagement/StudentManagement/acamember/register"
              )
            }
          >
            학생 등록
          </Btn>
        </div>
      </Div>

      {/* 표 넣을 곳 */}
      <StudentList
        data={stuList}
        headers={headers}
        onTdClick={handleStudentInfo}
      ></StudentList>
    </Container>
  );
};
export default acamember;
