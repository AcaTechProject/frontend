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
  const result = useRecoilValue(resultState);
  const studentName = useRecoilValue(studentNameState);
  const studentSchool = useRecoilValue(studentSchoolState);

  const studentList = useRecoilValue(studentListState);
  // 학생 정보를 추가하는 함수

  const data = studentList.map((student) => ({
    id: studentList.id,
    이름: studentList.studentName,
    분반: studentList.result,
    학교: studentList.studentSchool,
  }));

  const [jsonData, setJsonData] = useState(null);
  //class_name"을 저장하는 배열을 나타내는 상태
  const [classList, setClassList] = useState([]);

  const getJsonData = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/student/byClass/5");
      setJsonData(resp.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getJsonData();
  }, []);
  useEffect(() => {
    //jsonData가 변경될때마다 렌더링.
    if (jsonData) {
      const classNames = jsonData
        .map((student) => student.classInfos.map((info) => info.class_name))
        .flat();
      setClassList(classNames);
    }
    //console.log(jsonData);
  }, [jsonData]);

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
    setSelectedValue(e.target.value);
  };
  const handleStudentInfo = (id) => {
    router.push("/AcademyManagement/StudentManagement/acamember/StudentInfo");
    //console.log("id", id);
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
          options={classList.map((className) => ({
            value: className,
            label: className,
          }))}
          value={selectedValue}
          onChange={handleSelectChange}
        />
        <div style={{ display: "flex" }}>
          <Total />
          <p style={{ fontSize: "13px", color: "#787486", marginTop: "22px" }}>
            총 {data.length}명
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
        data={studentList}
        headers={headers}
        onTdClick={handleStudentInfo}
      ></StudentList>
    </Container>
  );
};
export default acamember;
