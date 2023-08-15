"use client";

import { useState, useRef, useEffect } from "react";
import SelectBox from "../components/Select";
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
const Inputs = styled(Input)`
  margin: 10px 0 0 30px;
`;
//인보이게
const InputImg = styled.input`
  display: none;
`;

const ProfileEmpty = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");

  const nameInputRef = useRef(null);

  const imgRef = useRef();
  const [selectedValue, setSelectedValue] = useState("");

  const handlePick = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  return (
    <Container>
      <Image
        src={img ? img : `/default_profile.png`}
        alt="프로필"
        width={200}
        height={200}
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
      <p>이름</p>
      <Row>
        <p style={{ fontWeight: "500" }}>생년월일|</p>
        <p>2000/00/00</p>
      </Row>
      <Row>
        <p style={{ fontWeight: "500" }}>학교 |</p>
        <p>00초등학교</p>
      </Row>
      <Row style={{ marginRight: "40px" }}>
        <p style={{ fontWeight: "500" }}>학년 |</p>
        <p>3학년</p>
      </Row>
    </Container>
  );
};

export default ProfileEmpty;
