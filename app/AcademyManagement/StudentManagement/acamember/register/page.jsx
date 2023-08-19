"use client";
import React from "react";
import ProfileCard from "../../../../components/ProfileCard";
import ProfileImage from "../../../../components/ProfileImage";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import TableInput from "../../../../components/TableInput";
import SugangTable from "../../../../components/SugangTable";
import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";
import SelectBox from "../../../../components/LongSelect";
import Select from "../../../../components/Select";
import { telState, parentState } from "../../../../recoil/atom";
import { useRecoilValue } from "recoil";
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
  gap: 40px;
`;
const Tab1 = styled.button`
  border-radius: 5px;
  width: 110px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  font-weight: bold;
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

const register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [school, setSchool] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const nameInputRef = useRef(null);

  const tel = useRecoilValue(telState);
  const parent = useRecoilValue(parentState);

  const handleSaveClick = () => {
    if (name === "") {
      alert("이름을 입력해주세요");
      nameInputRef.current.focus(); // 이름 입력 필드에 포커스를 이동시킴
      return;
    } else if (birth === "") {
      alert("학생의 생년월일을 입력해주세요");
    } else if (!selectedValue) {
      alert("학생의 성별을 선택해주세요");
    } else if (school === "") {
      alert("학생의 학교를 입력해주세요");
    } else if (tel === "") {
      alert("전화번호를 입력해주세요");
    } else if (parent === "") {
      alert("학부모 정보를 입력해주세요");
    } else {
      // 유효성 검사를 모두 통과한 경우에만 다음 경로로 이동
      router.push("/AcademyManagement/StudentManagement/acamember");
    }
  };
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    if (!e.target.value) {
      setErrorMessage("학생의 성별을 선택해주세요");
    }
    setErrorMessage("");
  };

  return (
    <Container>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름
      </p>
      <Row>
        <Tab1 onClick={() => router.push("/AcademyManagement/attendance")}>
          출결 관리
        </Tab1>
        <Tab2>학생 관리</Tab2>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameInputRef}
            />
            <Select
              style
              id="gender"
              options={[
                { value: "woman", label: "여" },
                { value: "man", label: "남" },
              ]}
              value={selectedValue}
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
                { value: "ele", label: "1학년" },
                { value: "ele", label: "2학년" },
                { value: "ele", label: "3학년" },
                { value: "ele", label: "4학년" },
                { value: "ele", label: "5학년" },
                { value: "ele", label: "6학년" },
                { value: "mid", label: "중1" },
                { value: "mid", label: "중2" },
                { value: "mid", label: "중3" },
                { value: "high", label: "고1" },
                { value: "high", label: "고2" },
                { value: "high", label: "고3" },
              ]}
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
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
            <TableInput />
            <br />
            <br />
            <SugangTable />
          </Row3>
        </Right>
      </Body>
    </Container>
  );
};
export default register;
