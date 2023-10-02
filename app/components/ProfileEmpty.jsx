"use client";

import { useState, useRef, useEffect } from "react";
import SelectBox from "../components/Select";

import styled from "styled-components";
import Image from "next/image";
import axios from "axios";

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
  const [userData, setUserData] = useState({});

  //const nameInputRef = useRef(null);
  const imgRef = useRef();
  const url = window.location.href;
  const urlParts = url.replace("?id=", "");
  const studentId = urlParts[urlParts.length - 1];

  const handlePick = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${studentId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log("오류", error);
      });
  }, []);
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
      <h2>{userData.name}</h2>

      <Row>
        <P>생년월일 |</P>
        <p style={{ lineHeight: "28px" }}>{userData.birth}</p>
      </Row>
      <Row style={{ marginRight: "10px" }}>
        <P>학교 |</P>
        <p style={{ lineHeight: "28px" }}>{userData.school}</p>
      </Row>
      <Row style={{ marginRight: "28px" }}>
        <P>학년 |</P>
        <p style={{ lineHeight: "28px" }}>{userData.grade}</p>
      </Row>
    </Container>
  );
};

export default ProfileEmpty;
