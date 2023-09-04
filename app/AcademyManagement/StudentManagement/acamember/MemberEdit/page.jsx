"use client";
import React from "react";
import ProfileCard from "@/app/components/ProfileCard";
import ProfileImage from "@/app/components/ProfileImage";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import TableInput from "@/app/components/TableInput";
import SugangTable from "@/app/components/SugangTable";
import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";
import SelectBox from "@/app/components/LongSelect";
import Select from "@/app/components/Select";
import AMBtn from "@/app/components/AMBtn";
import SMBtn from "@/app/components/SMBtn";
import {
  telState,
  parentState,
  valueState,
  resultState,
  studentNameState,
  studentBirthState,
  studentSchoolState,
  studentGradeState,
  studentTel1State,
  studentTel2State,
  studentTel3State,
  parentTel1State,
  parentTel2State,
  parentTel3State,
  studentFamilyState,
  studentArrState,
  noteState,
  studentListState,
} from "@/recoil/atom";
import { useRecoilValue, useRecoilState } from "recoil";
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
const Input = styled.input`
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
  //과목&분반 입력 시 나오는 배열
  const [result, setResult] = useState([]);

  const [id, setId] = useState("");
  const [matchData, setMatchData] = useState();

  const nameInputRef = useRef(null);
  const parentInputRef = useRef(null);
  const telInputRef = useRef(null);
  const familyInputRef = useRef(null);

  //새로운 값으로 업데이트
  const [studentName, setStudentName] = useRecoilState(studentNameState);
  const [studentBirth, setStudentBirth] = useRecoilState(studentBirthState);
  const [studentSchool, setStudentSchool] = useRecoilState(studentSchoolState);
  const [studentGrade, setStudentGrade] = useRecoilState(studentGradeState);
  const [studentTel1, setStudentTel1] = useRecoilState(studentTel1State);
  const [studentTel2, setStudentTel2] = useRecoilState(studentTel2State);
  const [studentTel3, setStudentTel3] = useRecoilState(studentTel3State);
  const [studentFamily, setStudentFamily] = useRecoilState(studentFamilyState);
  const [studentArr, setStudentArr] = useRecoilState(studentArrState);
  const [studentNote, setStudentNote] = useRecoilState(noteState);
  const [studentResult, setStudentResult] = useRecoilState(resultState);

  const [studentList, setStudentList] = useRecoilState(studentListState);

  const newStudent = {
    id: Number(id), //일단 등록한 시간으로 학생 정보 구분해놓음.
    이름: name,
    학교: school,
    생년월일: birth,
    학년: grade,
    분반: result,
    원생: `${tel1}-${tel2}-${tel3}`,
    학부모: `${tel1}-${tel2}-${tel3}`,
    가족관계: arr,

    기타특이사항: note,
  };

  const editStudent = () => {
    const findIndexById = (list, idToFind) => {
      return list.findIndex((item) => item.id === idToFind);
    };
    const targetId = matchData.id;
    const index = findIndexById(studentList, targetId);
    //console.log("index", index);
    // setStudentList((oldStudentList) => {
    //console.log("old", oldStudentList);
    // const updatedList = [
    //   ...oldStudentList.slice(0, index + 1),
    //   newStudent,
    //   ...oldStudentList.slice(index + 2),
    // ];
    // console.log("up", updatedList);
    // return updatedList;
    const updatedStudent = {
      ...studentList[index],
      이름: name !== "" ? name : studentList[index].이름, // 이름 필드 업데이트
      // 다른 필드도 필요한 대로 업데이트
      생년월일: birth !== "" ? birth : studentList[index].생년월일,
      학교: school !== "" ? school : studentList[index].학교,
      학년: grade !== "" ? grade : studentList[index].학년,
      분반: result.length > 0 ? result : studentList[index].분반,
      원생: {
        tel1: tel1 !== "" ? tel1 : studentList[index].원생.tel1,
        tel2: tel2 !== "" ? tel2 : studentList[index].원생.tel2,
        tel3: tel3 !== "" ? tel3 : studentList[index].원생.tel3,
      },
      학부모: {
        parent1: parent1 !== "" ? parent1 : studentList[index].학부모.parent1,
        parent2: parent2 !== "" ? parent2 : studentList[index].학부모.parent2,
        parent3: parent3 !== "" ? parent3 : studentList[index].학부모.parent3,
      },

      가족관계: arr.length > 0 ? arr : studentList[index].가족관계,

      기타특이사항: note !== "" ? note : studentList[index].기타특이사항,
    };

    const updatedList = [...studentList];
    updatedList[index] = updatedStudent;

    setStudentList(updatedList);

    if (name !== "") {
      setStudentName(name);
    }
    if (school !== "") {
      setStudentSchool(school);
    }
    if (birth !== "") {
      setStudentBirth(birth);
    }
    if (grade !== "") {
      setStudentGrade(grade);
    }
    if (tel1 !== "") {
      setStudentTel1(tel1);
    }
    if (tel2 !== "") {
      setStudentTel2(tel2);
    }
    if (tel3 !== "") {
      setStudentTel3(tel3);
    }
    if (parent1 !== "") {
      setStudentParent1(parent1);
    }
    if (parent2 !== "") {
      setStudentParent2(parent2);
    }
    if (parent3 !== "") {
      setStudentParent3(parent3);
    }
    if (family !== "") {
      setStudentFamily(family);
    }
    if (arr !== []) {
      setStudentArr(arr);
    }
    if (result !== []) {
      setStudentResult(result);
    }
    if (note !== "") {
      setStudentNote(note);
    }
    router.push("/AcademyManagement/StudentManagement/acamember");
  };

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
      `/AcademyManagement/StudentManagement/acamember/StudentInfo?id=${matchData.id}`
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

  const [studentParent1, setStudentParent1] = useRecoilState(parentTel1State);
  const [studentParent2, setStudentParent2] = useRecoilState(parentTel2State);
  const [studentParent3, setStudentParent3] = useRecoilState(parentTel3State);

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
  const onSubmit = (e) => {
    e.preventDefault();
    if (family === "") {
      return;
    }
    setArr((currentArr) => [family, ...currentArr]);
    setFamily("");
  };

  useEffect(() => {
    if (telInputRef.current) {
      telInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const params = window.location.search;

    if (typeof params !== "undefined") {
      const result = params.replace("?id=", "");
      const matchedData = studentList.find(
        (data) => data.id === Number(result)
      );
      setId(result);
      setMatchData(matchedData);
      console.log("match", matchedData);
    }
  }, [id, matchData, studentList]);

  //console.log("수정하고있는", name);
  // -> 현재 수정하고 있는 값이 그대로.

  //console.log("studentList", studentList);

  //console.log("무슨값이지?", matchData?.이름); -> 최신 수정값
  //console.log("일단 tel1", matchData?.원생.tel1);

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} {matchData?.이름}
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
          {/* <ProfileCard nameInputRef={nameInputRef} /> */}
          <Row4>
            <InputName
              type="text"
              id="name"
              //수정할 사항이 있다면 새로운 name으로 업뎃 : 수정사항이 없으면 기존이름이 저장되어있는 studentName 으로.
              value={name !== "" ? name : matchData?.이름}
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
              value={birth !== "" ? birth : matchData?.생년월일}
              placeholder={studentBirth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </Row4>

          <Row4>
            <p style={{ fontWeight: "500" }}>학교 |</p>
            <Inputs
              type="text"
              id="school"
              value={school !== "" ? school : matchData?.학교}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Row4>

          <Row4>
            <p style={{ fontWeight: "500" }}>학년 |</p>
            <SelectBox
              options={[
                { value: "ele1", label: "1학년" },
                { value: "ele2", label: "2학년" },
                { value: "ele3", label: "3학년" },
                { value: "ele4", label: "4학년" },
                { value: "ele5", label: "5학년" },
                { value: "ele6", label: "6학년" },
                { value: "mid1", label: "중1" },
                { value: "mid2", label: "중2" },
                { value: "mid3", label: "중3" },
                { value: "high1", label: "고1" },
                { value: "high2", label: "고2" },
                { value: "high3", label: "고3" },
              ]}
              value={grade !== "" ? grade : matchData?.학년}
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
                      value={tel1 !== "" ? tel1 : matchData?.원생.tel1}
                      onChange={handleTel1}
                      ref={telInputRef}
                    ></Input>{" "}
                    -
                    <Input
                      type="text"
                      id="tel"
                      maxLength={4}
                      value={tel2 !== "" ? tel2 : matchData?.원생.tel2}
                      onChange={handleTel2}
                    ></Input>{" "}
                    -
                    <Input
                      type="text"
                      maxLength={4}
                      value={tel3 !== "" ? tel3 : matchData?.원생.tel3}
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
                      value={
                        parent1 !== "" ? parent1 : matchData?.학부모.parent1
                      }
                      onChange={handleParent1}
                      ref={parentInputRef}
                    ></Input>{" "}
                    -
                    <Input
                      type="text"
                      maxLength={4}
                      value={
                        parent2 !== "" ? parent2 : matchData?.학부모.parent2
                      }
                      onChange={handleParent2}
                    ></Input>{" "}
                    -
                    <Input
                      type="text"
                      maxLength={4}
                      value={
                        parent3 !== "" ? parent3 : matchData?.학부모.parent3
                      }
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
                        value={family !== "" ? family : studentFamily}
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
            <SugangTable />
          </Row3>
        </Right>
      </Body>
    </Container>
  );
};
export default MemberEdit;
