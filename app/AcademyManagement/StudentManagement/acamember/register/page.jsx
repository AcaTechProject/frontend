"use client";
import React from "react";
import ProfileImage from "@/app/components/ProfileImage";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import SelectBox from "@/app/components/LongSelect";
import Select from "@/app/components/Select";
import SMBtn from "@/app/components/SMBtn";
import AMBtn from "@/app/components/AMBtn";
import axios from "axios";

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
const Input = styled.input`
  width: 230px;
  height: 30px;
  margin: 10px 0 0 5px;
  border: 1px solid #d3d2d2;
  border-radius: 10px;
`;
const Inputs = styled(Input)`
  margin: 10px 0 0 30px;
`;
const S = styled.div`
  margin-top: 30px;
`;
const Row5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

//표 css
const TableContainer = styled.table`
  border: 1px solid #c4c4c4;
  border-collapse: collapse;
  width: 606px;
  height: 80px;
  border-radius: 20px;
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
const TelInput = styled.input`
  width: 50px;
  height: 20px;
  margin-left: 15px;
  border: 1px solid #c4c4c4;

  border-radius: 5px;
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
const Result = styled.div`
  margin-top: 15px;
`;

const Textarea = styled.textarea`
  width: 500px;
  border: 1px solid #c4c4c4;
  height: auto;
`;
const TableContainer2 = styled.table`
  border: 1px solid #d3d2d2;
  border-collapse: collapse;
  width: 606px;
  height: 80px;
  border-radius: 20px;
`;
const ThirdTd = styled.td`
  border: 1px solid #c4c4c4;
  padding: 10px 5px;
  width: 379px;
  text-align: center;
  height: 80px;
`;
const register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [school, setSchool] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");

  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [parent1, setParent1] = useState("");
  const [parent2, setParent2] = useState("");
  const [parent3, setParent3] = useState("");
  const [family, setFamily] = useState("");
  const [arr, setArr] = useState([]);

  const [choice, setChoice] = useState("");
  const [teacher, setTeacher] = useState("");
  const [note, setNote] = useState("");
  const [result, setResult] = useState([]);

  //const nameInputRef = useRef(null);
  const telInputRef = useRef(null);
  const parentInputRef = useRef(null);

  const handleTel1 = (event) => {
    setTel1(event.target.value);
  };

  const handleTel2 = (event) => {
    setTel2(event.target.value);
  };

  const handleTel3 = (event) => {
    setTel3(event.target.value);
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
  const checkValue = (e) => {
    console.log(family);
    setFamily(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (family === "") {
      return;
    }
    setArr((currentArr) => [family, ...currentArr]);
    setFamily("");
  };

  const handleSaveClick = async () => {
    const newStudentInfo = {
      name: name,
      birth: birth,
      gender: gender,
      school: school,
      grade: grade,
      phone: `${tel1}-${tel2}-${tel3}`,
      etc: note,
      image: "image_url",
      teacher: family,
      parentPhone: `${parent1}-${parent2}-${parent3}`,
      st_write: "첫번째",
      st_update_write: "두번째",
      // familyInfos: arr.map((familyName) => ({
      //   fa_name: familyName,
      //   fa_memo: "가족 메모",
      // })),
      familyInfos: [
        {
          fa_name: arr[0],
          fa_memo: "가족메모",
        },
      ],
      classInfos: [
        {
          class_name: result[0],
        },
      ],
    };
    axios
      .post("http://localhost:8080/student", newStudentInfo)
      .then(function (response) {
        console.log("성공", response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });

    if (name === "") {
      alert("학생 정보를 입력해주세요");
      // 이름 입력 필드에 포커스를 이동시킴
      return;
    } else if (birth === "") {
      alert("학생 정보를 입력해주세요");
    } else if (!gender) {
      alert("학생 정보를 입력해주세요");
    } else if (school === "") {
      alert("학생 정보를 입력해주세요");
    } else if (tel1 === "" || tel2 === "" || tel3 === "") {
      alert("전화번호를 입력해주세요");
      telInputRef.current.focus();
    } else if (parent1 === "" || parent2 === "" || parent3 === "") {
      alert("학부모 정보를 입력해주세요");
      parentInputRef.current.focus();
    } else if (arr.length === 0) {
      alert("가족관계 정보를 입력해주세요");
    } else if (result.length === 0) {
      alert("학생의 수강과목 또는 분반을 선택해주세요");
    } else {
      const newStudent = {
        id: Date.now(), //일단 등록한 시간으로 학생 정보 구분해놓음.
        이름: name,
        학교: school,
        성별: gender,
        생년월일: birth,
        학년: grade,
        분반: result,
        // 원생: `${tel1}-${tel2}-${tel3}`,
        원생: {
          tel1: tel1,
          tel2: tel2,
          tel3: tel3,
        },

        학부모: {
          parent1: parent1,
          parent2: parent2,
          parent3: parent3,
        },
        가족관계: arr,
        //수강과목분반: result,
        기타특이사항: note,
      };

      //학생 정보를 등록하면 기존 studentList에 추가됨.
      //setStudentList((prevStudentList) => [...prevStudentList, newStudent]);

      // 유효성 검사를 모두 통과한 경우에만 다음 경로로 이동
      router.push("/AcademyManagement/StudentManagement/acamember");

      // 입력 필드 초기화
      setName("");
      setBirth("");
      setSchool("");
      setGender("");
      setGrade("");
      setTel1("");
      setTel2("");
      setTel3("");
      setParent1("");
      setParent2("");
      setParent3("");
    }
  };
  //console.log("배열", arr);
  const handleSelectChange = (e) => {
    setGender(e.target.value);
    if (!e.target.value) {
      setErrorMessage("학생의 성별을 선택해주세요");
    }
    setErrorMessage("");
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
  const onSubmit1 = (e) => {
    e.preventDefault();
    if (choice && teacher) {
      setResult((currentArr) => [`${teacher}`, ...currentArr]);
      setChoice("");
      setTeacher("");
      setNote("");
    }
  };

  const handleDelete = (indexToDelete) => {
    setResult((prevResult) =>
      prevResult.filter((_, index) => index !== indexToDelete)
    );
  };
  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 학생등록
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              style
              id="gender"
              options={[
                { value: "여", label: "여" },
                { value: "남", label: "남" },
              ]}
              value={gender}
              onChange={handleSelectChange}
            ></Select>
          </Row4>

          {name === "" && (
            <p style={{ fontSize: "12px", color: "red", marginRight: "180px" }}>
              이름을 입력해주세요
            </p>
          )}

          <Row4>
            <p style={{ fontWeight: "500" }}>생년월일|</p>
            <Input
              type="text"
              id="birth"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </Row4>
          {birth === "" && (
            <p style={{ fontSize: "12px", color: "red" }}>
              학생의 생년월일을 입력해주세요
            </p>
          )}

          <Row4>
            <p style={{ fontWeight: "500" }}>학교 |</p>
            <Inputs
              type="text"
              id="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Row4>
          {school === "" && (
            <p style={{ fontSize: "12px", color: "red" }}>
              학생의 학교를 입력해주세요
            </p>
          )}

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
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </Row4>
        </Left>

        <Right>
          <Row2>
            <Button
              onClick={() =>
                router.push("/AcademyManagement/StudentManagement/acamember")
              }
            >
              취소
            </Button>
            <Button onClick={handleSaveClick}>저장</Button>
          </Row2>
          <Row3>
            <TableContainer>
              <tbody>
                <Tr>
                  <FirstTd>원생</FirstTd>
                  <SecondTd>
                    <TelInput
                      type="text"
                      maxLength={3}
                      placeholder="010"
                      value={tel1}
                      onChange={handleTel1}
                      ref={telInputRef}
                    ></TelInput>{" "}
                    -
                    <TelInput
                      type="text"
                      id="tel"
                      maxLength={4}
                      value={tel2}
                      onChange={handleTel2}
                    ></TelInput>{" "}
                    -
                    <TelInput
                      type="text"
                      maxLength={4}
                      value={tel3}
                      onChange={handleTel3}
                    ></TelInput>
                  </SecondTd>
                </Tr>

                <Tr>
                  <FirstTd>학부모</FirstTd>
                  <SecondTd>
                    <TelInput
                      type="text"
                      maxLength={3}
                      placeholder="010"
                      value={parent1}
                      onChange={handleParent1}
                      ref={parentInputRef}
                    ></TelInput>{" "}
                    -
                    <TelInput
                      type="text"
                      maxLength={4}
                      value={parent2}
                      onChange={handleParent2}
                    ></TelInput>{" "}
                    -
                    <TelInput
                      type="text"
                      maxLength={4}
                      value={parent3}
                      onChange={handleParent3}
                    ></TelInput>
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
                        // ref={familyInputRef}
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
            <TableContainer2>
              <tbody>
                <Tr>
                  <FirstTd>수강 과목 및 분반</FirstTd>
                </Tr>
                <Tr>
                  <ThirdTd>
                    <Row5>
                      <form onSubmit={onSubmit1}>
                        <Select
                          options={[
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
                        <Btn>+</Btn>
                      </form>
                    </Row5>
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
                  </ThirdTd>
                </Tr>
                <Tr>
                  <FirstTd>기타 특이 사항</FirstTd>
                </Tr>
                <Tr>
                  <ThirdTd>
                    <Textarea value={note} onChange={handleNote} />
                  </ThirdTd>
                </Tr>
              </tbody>
            </TableContainer2>
          </Row3>
        </Right>
      </Body>
    </Container>
  );
};
export default register;
