"use client";
import styled from "styled-components";
import { useState } from "react";
import { Image } from "next/image";

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
`;
const Button = styled.button`
  border-radius: 5px;
  color: white;
  background: blue;
`;
const Profile = () => {
  const [Img, setImg] = useState("");
  const onUploadImage = (e) => {
    const reader = new FileReader();
    reader.onload = function () {
      setImg(e.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <Input type="file" accept="image/*" onChange={onUploadImage}></Input>
      <Button label="이미지 업로드" />
      {/* <Image src={Img} alt="메인" width={50} height={50} /> */}
    </>
  );
};

export default Profile;
