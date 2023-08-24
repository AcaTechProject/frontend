"use client";

import { useState, useRef, useEffect } from "react";
import SelectBox from "../components/Select";
import Select from "../components/LongSelect";

//import { Image } from "next/image";
// import React from "react";
// import axios from "axios";

import styled from "styled-components";
import Image from "next/image";

const Label = styled.label`
  color: #0095f6;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 350px;
  align-items: center;
  justify-content: center;
`;
const InputName = styled.input`
  width: 180px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d3d2d2;
`;
const Row = styled.div`
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
//인보이게
const InputImg = styled.input`
  display: none;
`;

const ProfileCard = ({ nameInputRef }) => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [school, setSchool] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const imgRef = useRef();

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    if (!e.target.value) {
      setErrorMessage("학생의 성별을 선택해주세요");
    }
    setErrorMessage("");
  };
  const handlePick = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  // useEffect(() => {
  //   if (name === "") {
  //     nameInputRef.current.focus();
  //   }
  // }, [name]);

  return (
    <Container>
      <Image
        src={img ? img : `/default_profile.png`}
        alt="프로필"
        width={250}
        height={250}
        style={{ borderRadius: "50%" }}
      />
      <Label htmlFor="profileImg">이미지 추가</Label>
      <InputImg
        type="file"
        accept="image/*"
        id="profileImg"
        alt="프로필"
        onChange={handlePick}
        ref={imgRef}
      />
      <Row>
        <InputName
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameInputRef}
        />
        <SelectBox
          style
          id="gender"
          options={[
            { value: "woman", label: "여" },
            { value: "man", label: "남" },
          ]}
          value={selectedValue}
          onChange={handleSelectChange}
        ></SelectBox>
      </Row>

      {name === "" && (
        <p style={{ fontSize: "12px", color: "red", marginRight: "180px" }}>
          이름을 입력해주세요
        </p>
      )}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <Row>
        <p style={{ fontWeight: "500" }}>생년월일|</p>
        <Input
          type="text"
          id="birth"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </Row>
      {birth === "" && (
        <p style={{ fontSize: "12px", color: "red" }}>
          학생의 생년월일을 입력해주세요
        </p>
      )}
      <Row>
        <p style={{ fontWeight: "500" }}>학교 |</p>
        <Inputs
          type="text"
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </Row>
      {school === "" && (
        <p style={{ fontSize: "12px", color: "red" }}>
          학생의 학교를 입력해주세요
        </p>
      )}
      <Row>
        <p style={{ fontWeight: "500" }}>학년 |</p>
        <Select
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
      </Row>
    </Container>
  );
};

export default ProfileCard;
