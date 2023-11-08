"use client";
import React from "react";
import axios from "axios";

import ProfileImage from "@/app/components/ProfileImage";
import Popup from "@/app/components/Popup";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import TableInput from "@/app/components/TableInput";

import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";
import SelectBox from "@/app/components/LongSelect";
import AttendTable from "@/app/components/AttendTable";
import Select from "@/app/components/Select";
import AMBtn from "@/app/components/AMBtn";
import SMBtn from "@/app/components/SMBtn";

const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;
const Body = styled.section`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin: 110px 0 0 20px;
  width: 45%;
  max-height: 400px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -70px;
  gap: 40px;
`;
const Row = styled.div`
  display: flex;
  gap: 23px;
`;
const Tab1 = styled.button`
  border-radius: 5px;
  width: 110px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  font-weight: bold;
  font-size: 14px;
  &:hover {
    color: white;
    background: #8146ff;
  }
`;
const Tab2 = styled(Tab1)``;
const Button = styled.button`
  width: 95px;
  height: 34px;
  border-radius: 5px;
  color: #8146ff;
  background: #eceafe;
  border: 0;
  font-size: 15px;
  font-weight: 500;
`;
const Row2 = styled(Row)`
  justify-content: flex-end;
  margin-top: 85px;
`;
const Row3 = styled.div`
  margin-top: 20px;
`;

const Rows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  gap: 40px;
`;
const Label = styled.label`
  color: #0095f6;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  margin-left: 150px;
`;
const InputName = styled.input`
  width: 180px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d3d2d2;
`;
const Row4 = styled.div`
  display: flex;
  gap: 30px;
  width: 350px;
`;
const TelInput = styled.input`
  width: 230px;
  height: 30px;
  margin: 10px 0 0 5px;
  border: 1px solid #d3d2d2;
  border-radius: 10px;
`;
const Inputs = styled.input`
  margin: 10px 0 0 30px;
  width: 230px;
  height: 30px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
const S = styled.div`
  margin-top: 30px;
`;
const TableContainer = styled.table`
  border: 1px solid #c4c4c4;
  border-collapse: collapse;
  width: 606px;
`;
const Tr = styled.tr`
  border: 1px solid #c4c4c4;
  padding: 10px 5px;
`;
const FirstTd = styled.td`
  border: 1px solid #c4c4c4;
  padding: 20px 5px;
  width: 127px;

  background: #eceafe;
  text-align: center;
`;
const SecondTd = styled.td`
  border: 1px solid #C4C4C4
  padding: 10px 15px;
  width: 379px;
`;
const SecondTds = styled.div`
  border: 1px solid #c4c4c4;
  padding: 10px 5px;
  width: 379px;
  text-align: center;
  height: 80px;
`;
const ThirdTd = styled.td`
  border: 1px solid #c4c4c4;
  text-align: center;
  height: 35px;
`;
const Input = styled.input`
  width: 50px;
  height: 20px;
  margin-left: 15px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
const Result = styled.div`
  margin-top: 15px;
  margin: 0 auto;
`;
const Textarea = styled.textarea`
  width: 500px;
  border: 1px solid #c4c4c4;
  height: auto;
  text-align: center;
`;
const Inp = styled.input`
  width: 270px;
  margin: 4px 0 0 15px;
  font-size: 13px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
const Btn = styled.button`
  margin-left: 5px;
  color: white;
  background: black;
  font-size: 10px;
`;

const Li = styled.li`
  font-size: 15px;
  margin-left: 12px;
`;
const BirthInput = styled.input`
  width: 230px;
  height: 30px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin: 10px 0 0 5px;
`;

const MemberEdit = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [school, setSchool] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");

  //tableinput 관련
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");

  const [parent1, setParent1] = useState("");
  const [parent2, setParent2] = useState("");
  const [parent3, setParent3] = useState("");
  //가족관계 입력칸
  const [family, setFamily] = useState("");
  //가족관계 입력 시 나오는 배열
  const [arr, setArr] = useState([]);
  //수강 과목 및 분반 입력
  const [note, setNote] = useState("");
  const [choice, setChoice] = useState("");
  const [teacher, setTeacher] = useState("");
  //과목&분반 입력 시 나오는 배열
  const [result, setResult] = useState([]);

  const parentInputRef = useRef(null);
  const telInputRef = useRef(null);
  const familyInputRef = useRef(null);

  const [userData, setUserData] = useState({});
  const [userPhone, setUserPhone] = useState("");
  const [familyInfos, setFamilyInfos] = useState([]);
  const [familyName, setFamilyName] = useState("");

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleGender = (e) => {
    setGender(e.target.value);
    if (!e.target.value) {
      setErrorMessage("학생의 성별을 선택해주세요");
    }
    setErrorMessage("");
  };
  const handleGrade = (e) => {
    setGrade(e.target.value);
  };

  const handleCancel = () => {
    alert("수정이 취소되었습니다");
    router.push(
      `/AcademyManagement/StudentManagement/acamember/StudentInfo?id=${studentId}`
    );
  };

  const handleTel1 = (event) => {
    setTel1(event.target.value);
  };

  const handleTel2 = (event) => {
    setTel2(event.target.value);
  };

  const handleTel3 = (event) => {
    setTel3(event.target.value);
  };

  const checkValue = (e) => {
    console.log(family);
    setFamily(e.target.value);
  };

  const handleParent1 = (e) => {
    setParent1(e.target.value);
  };
  const handleParent2 = (e) => {
    setParent2(e.target.value);
  };
  const handleParent3 = (e) => {
    setParent3(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setChoice(e.target.value);
  };
  const handleTeacherChange = (e) => {
    setTeacher(e.target.value);
  };

  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (family === "") {
      return;
    }
    setArr((prevArr) => [...prevArr,family]);
    setFamily("");
  };

  const onSubmit1 = (e) => {
    e.preventDefault();
    if (choice && teacher) {
      setResult((currentArr) => [`${teacher}`, ...currentArr]);
      setChoice("");
      setTeacher("");
      setNote("");
    }
  };
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSendMessage = (message) => {
    console.log("Sending message:", message);
  };

  const handleDelete = (indexToDelete) => {
    setResult((prevResult) =>
      prevResult.filter((_, index) => index !== indexToDelete)
    );
  };

  //axios  => 호출
  const editStudent = () => {
    const phone = `${tel1}-${tel2}-${tel3}`;
    const parentPhone = `${parent1}-${parent2}-${parent3}`;

    const editedTel =
      tel1 === "" && tel2 === "" && tel3 === "" ? userData.phone : phone;
    const editedParent =
      parent1 === "" && parent2 === "" && parent3 === ""
        ? userData.parentPhone
        : parentPhone;
    const editedClassInfos = result.length > 0 ? result.join(''):userData.classInfos[0].class_name;
    axios
      .put(`http://localhost:8080/student/${studentId}`, {
        name: name !== "" ? name : userData.name,
        gender: gender !== "" ? gender : userData.gender,
        birth: birth !== "" ? birth : userData.birth,
        school: school !== "" ? school : userData.school,
        grade: grade !== "" ? grade : userData.grade,
        phone: editedTel,
        teacher: userData.name,
        etc: note !== "" ? note : userData.etc,
        image: "image_url",
        parentPhone: editedParent,
        st_write: "첫번째",
        st_update_write: "두번째",
        //familyInfos: familyName !== "" ? familyName : userData.familyName,
        classInfos: [
          {
            class_name: editedClassInfos
            
          },
        ],
        familyInfos: [
          {
            fa_name: arr.join(''),
            fa_memo: "수정된 가족 메모",
            // familyName !== "" ? familyName : userData.familyInfos[0].fa_name,
          },
        ],
      })
      .then(function (response) {
        setTel1(tel1);
        setTel2(tel2);
        setTel3(tel3);
        setBirth(birth);
        setGrade(grade);
        setGender(gender);
        setSchool(school);
        setFamily(arr);
        setResult(result);
        console.log("family", arr);
        console.log("정보 수정 성공!!!", response.data);
        router.push(
          `/AcademyManagement/StudentManagement/acamember/StudentInfo?id=${studentId}`
        );
      })
      .catch(function (error) {
        console.log("정보 수정 error", error);
      });
  };

  useEffect(() => {
    if (telInputRef.current) {
      telInputRef.current.focus();
    }
  }, []);

  //api 관련
  const url = window.location.href;
  const urlParts = url.replace("?id=", "");
  const studentId = urlParts[urlParts.length - 1];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}`)
      .then((response1) => {
        setUserData(response1.data);
        const [tel1, tel2, tel3] = userPhone.split("-");
        setFamilyName(response1.data.familyInfos[0].fa_name);
        console.log("data", response1.data);
        console.log("정보 받아오기 성공!!!", response1.data);
      })
      .catch((error) => {
        console.log("받아오기 오류", error);
      });
  }, [studentId]);

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {userData.name}
      </p>
      <Row>
        <AMBtn />

        <SMBtn />
      </Row>
      <Body>
        <Left>
          <ProfileImage />

          <Label htmlFor="profileImg">이미지 추가</Label>
          <br />
          <Row4>
            <InputName
              type="text"
              id="name"
              //수정할 사항이 있다면 새로운 name으로 업뎃 : 수정사항이 없으면 기존이름이 저장되어있는 userData.name 으로.
              value={name !== "" ? name : userData.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              style
              id="gender"
              options={[
                
                { value: "woman", label: "여" },
                { value: "man", label: "남" },
              ]}
              value={gender}
              onChange={handleGender}
            ></Select>
          </Row4>

          <Row4>
            <p style={{ fontWeight: "500" }}>생년월일|</p>
            <BirthInput
              type="text"
              id="birth"
              value={birth !== "" ? birth : userData.birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </Row4>

          <Row4>
            <p style={{ fontWeight: "500" }}>학교 |</p>
            <Inputs
              type="text"
              id="school"
              value={school !== "" ? school : userData.school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Row4>

          <Row4>
            <p style={{ fontWeight: "500" }}>학년 |</p>
            <SelectBox
              options={[
                { value: "1학년", label: "1학년" },
                { value: "2학년", label: "2학년" },
                { value: "3학년", label: "3학년" },
                { value: "4학년", label: "4학년" },
                { value: "5학년", label: "5학년" },
                { value: "6학년", label: "6학년" },
              ]}
              value={grade !== "" ? grade : userData.grade}
              onChange={handleGrade}
            />
          </Row4>
        </Left>

        <Right>
          <Row2>
            <Button onClick={handleCancel}>취소</Button>
            <Button onClick={editStudent}>저장</Button>
          </Row2>
          <Row3>
            <TableContainer>
              <tbody>
                <Tr>
                  <FirstTd>원생</FirstTd>
                  <SecondTd>
                    <Input
                      type="text"
                      maxLength={3}
                      placeholder="010"
                      value={tel1 !== "" ? tel1 : userData.tel1}
                      onChange={handleTel1}
                      ref={telInputRef}
                    ></Input>{" "}
                    -
                    <Input
                      type="text"
                      id="tel"
                      maxLength={4}
                      value={tel2 !== "" ? tel2 : userData.tel2}
                      onChange={handleTel2}
                    ></Input>{" "}
                    -
                    <Input
                      type="text"
                      maxLength={4}
                      value={tel3 !== "" ? tel3 : userData.tel3}
                      onChange={handleTel3}
                    ></Input>
                  </SecondTd>
                </Tr>

                <Tr>
                  <FirstTd>학부모</FirstTd>
                  <SecondTd>
                    <Input
                      type="text"
                      maxLength={3}
                      placeholder="010"
                      value={parent1 !== "" ? parent1 : userData.parent}
                      onChange={handleParent1}
                      ref={parentInputRef}
                    ></Input>{" "}
                    -
                    <Input
                      type="text"
                      maxLength={4}
                      value={parent2 !== "" ? parent2 : userData.parent2}
                      onChange={handleParent2}
                    ></Input>{" "}
                    -
                    <Input
                      type="text"
                      maxLength={4}
                      value={parent3 !== "" ? parent3 : userData.parent3}
                      onChange={handleParent3}
                    ></Input>
                  </SecondTd>
                </Tr>
                <Tr>
                  <FirstTd>가족관계</FirstTd>
                  <SecondTd>
                    <form onSubmit={onSubmit}>
                      <Inp
                        type="text"
                        placeholder="형제 자매 정보를 입력해주세요"
                        onChange={checkValue}
                        value={family}
                        ref={familyInputRef}
                      />
                      <Btn>+</Btn>
                      <p>
                        {arr.map((item, index) => (
                          <Li key={index}>{item}</Li>
                        ))}
                      </p>
                    </form>
                  </SecondTd>
                </Tr>
              </tbody>
            </TableContainer>
            <br />
            <br />
            <TableContainer>
              <tbody>
                <Tr>
                  <FirstTd>출석</FirstTd>
                  <FirstTd>지각</FirstTd>
                  <FirstTd>결석</FirstTd>
                  <FirstTd>기타</FirstTd>
                </Tr>
                <Tr onClick={openPopup}>
                  <ThirdTd>00 / 30</ThirdTd>
                  <ThirdTd>00 / 30</ThirdTd>
                  <ThirdTd>00 / 30</ThirdTd>
                  <ThirdTd>00 / 30</ThirdTd>
                </Tr>
              </tbody>
              {isPopupOpen && (
                <Popup onClose={closePopup} onSend={handleSendMessage} />
              )}
            </TableContainer>
            <TableContainer>
              <tbody>
                <Tr>
                  <FirstTd>수강 과목 및 분반</FirstTd>
                </Tr>
                <Tr>
                  <SecondTd>
                    <Rows>
                      <form onSubmit={onSubmit1}>
                        <Select
                          options={[
                             {
                              value: "수강과목",
                              label: "수강과목",
                            },
                            {
                              value: "국어",
                              label: "국어",
                            },
                            {
                              value: "영어",
                              label: "영어",
                            },
                            { value: "수학", label: "수학" },
                          ]}
                          onChange={handleSubjectChange}
                        />{" "}
                        <Select
                          options={[
                            {
                              value: "분반",
                              label: "분반",
                            },
                            {
                              value: "국어 김민지 A",
                              label: "국어 김민지 A",
                            },
                            {
                              value: "영어 김민지 A",
                              label: "영어 김민지 A",
                            },
                            { value: "수학 김민지 A", label: "수학 김민지 A" },
                            {
                              value: "국어 김민지 B",
                              label: "국어 김민지 B",
                            },
                            {
                              value: "영어 김민지 B",
                              label: "영어 김민지 B",
                            },
                            { value: "수학 김민지 B", label: "수학 김민지 B" },
                          ]}
                          onChange={handleTeacherChange}
                          value={result}
                        />
                        <Btn> + </Btn>
                      </form>
                    </Rows>
                    <Result>
                      {result.map((item, index) => (
                        <div
                          style={{ display: "flex", marginLeft: "40%" }}
                          key={index}
                        >
                          <li>{item}</li>
                          <Btn onClick={() => handleDelete(index)}>Delete</Btn>
                        </div>
                      ))}
                    </Result>
                  </SecondTd>
                </Tr>
                <Tr>
                  <FirstTd>기타 특이 사항</FirstTd>
                </Tr>
                <Tr>
                  <SecondTd>
                    <Textarea
                      value={note !== "" ? note : userData.etc}
                      onChange={handleNote}
                    />
                  </SecondTd>
                </Tr>
              </tbody>
            </TableContainer>
          </Row3>
        </Right>
      </Body>
    </Container>
  );
};
export default MemberEdit;