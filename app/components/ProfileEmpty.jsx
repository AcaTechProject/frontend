"use client";

import { useState, useRef } from "react";
import {
  studentNameState,
  studentBirthState,
  studentSchoolState,
  studentGradeState,
  studentListState,
  // ... 나머지 Recoil 상태도 가져오기
} from "@/recoil/atom";
import { useRecoilValue } from "recoil";
import SelectBox from "../components/Select";

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 350px;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 350px;
  justify-content: center;
`;
const Input = styled.input`
  width: 230px;
  height: 30px;
  margin: 10px 0 0 5px;
  border: 1px solid #d3d2d2;
  border-radius: 10px;
`;
const P = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
const Inputs = styled(Input)`
  margin: 10px 0 0 30px;
`;
//인보이게
const InputImg = styled.input`
  display: none;
`;

const ProfileEmpty = ({ matchData }) => {
  const [img, setImg] = useState("");

  //const nameInputRef = useRef(null);

  const imgRef = useRef();

  const studentName = useRecoilValue(studentNameState);
  const studentBirth = useRecoilValue(studentBirthState);
  const studentSchool = useRecoilValue(studentSchoolState);
  const studentGrade = useRecoilValue(studentGradeState);

  const handlePick = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  //console.log("name", studentName);

  //console.log("설마", studentName);
  //console.log("matchdata", matchData);
  return (
    <Container>
      <Image
        src={img ? img : `/default_profile.png`}
        alt="프로필"
        width={250}
        height={250}
        style={{ borderRadius: "50%" }}
      />

      <InputImg
        type="file"
        accept="image/*"
        id="profileImg"
        alt="프로필"
        onChange={handlePick}
        ref={imgRef}
      />
      <h2>{matchData?.이름}</h2>

      <Row>
        <P>생년월일 |</P>
        <p style={{ lineHeight: "28px" }}>{matchData?.생년월일}</p>
      </Row>
      <Row style={{ marginRight: "10px" }}>
        <P>학교 |</P>
        <p style={{ lineHeight: "28px" }}>{matchData?.학교}</p>
      </Row>
      <Row style={{ marginLeft: "8px" }}>
        <P>학년 |</P>
        <p style={{ lineHeight: "28px" }}>{matchData?.학년}</p>
      </Row>
    </Container>
  );
};

export default ProfileEmpty;
