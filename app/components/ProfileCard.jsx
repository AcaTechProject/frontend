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

const ProfileCard = () => {
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

  useEffect(() => {
    if (name === "") {
      nameInputRef.current.focus();
    }
  }, [name]);

  return (
    <Container>
      <Image
        src={img ? img : `/default_profile.png`}
        alt="프로필"
        width={200}
        height={200}
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
          options={[
            { value: "woman", label: "여" },
            { value: "man", label: "남" },
          ]}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        ></SelectBox>
      </Row>

      {name === "" && (
        <p style={{ fontSize: "12px", color: "red", marginRight: "180px" }}>
          이름을 입력해주세요
        </p>
      )}
      <Row>
        <p style={{ fontWeight: "500" }}>생년월일|</p>
        <Input type="text" id="birth" />
      </Row>
      <Row>
        <p style={{ fontWeight: "500" }}>학교 |</p>
        <Inputs type="text" id="school" />
      </Row>
      <Row>
        <p style={{ fontWeight: "500" }}>학년 |</p>
        <Inputs type="text" id="grade" />
      </Row>
    </Container>
  );
};

//일단 초기값은 사진이 없으니까 ""로.
// const [img, setImg] = useState("");
// const [file,setFile]=useState();
// const handleImage = (e) => {
//   console.log(e.target.files);
//   setImg(e.target.files[0]);
// };
// const handlePick=async(event)=>{
//   if(!event.currentTarget.files){
//     return
//   }

// }
// const handleApi = () => {
//   const formData = new FormData();
//   formData.append("image", img);
//   axios.post("url", formData).then((res) => {
//     console.log(res);
//   });
//   };
//   return (
//     <>
//     {previewFile? (
//       <ImageBox>
//         <DefaultImage
//           src={previewFile}
//           alt="profil"
//           onClick={handlepick}
//           fill={true}/>
//       </ImageBox>):(<ImageBox>
//         <DefaultImage
//         src={DefaultProfile}
//         alt="기본"
//         onClick={handlePick}
//         fill={true}/>
//       </ImageBox>
//     )}
//       <input type="file" name="file" onChange={handleImage}  style={{display:none}}/>
//       <button onClick={handleApi}>제출</button>
//     </>
//   );
// };

export default ProfileCard;
