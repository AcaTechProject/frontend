"use client";
import styled from "styled-components";
import Image from "next/image";
import { useState, useRef } from "react";

const Container = styled.div`
  width: 255px;
  text-align: center;
`;
const Label = styled.label`
  color: #0095f6;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  text-align: center;
`;
const InputImg = styled.input`
  display: none;
`;

const ProfileImage = () => {
  const [img, setImg] = useState("");
  const imgRef = useRef();

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
        style={{ borderRadius: "50%", textAlign: "center" }}
      />
      {/* <Label htmlFor="profileImg">이미지 추가</Label> */}
      <InputImg
        type="file"
        accept="image/*"
        id="profileImg"
        alt="프로필"
        onChange={handlePick}
        ref={imgRef}
      />
    </Container>
  );
};

export default ProfileImage;
