import Select from "./Select";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
//import { formDataState } from "@/recoil/atom";
import { numState, emailState } from "@/recoil/atom";

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
  padding: 10px 5px;
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
  margin-left: 10px;
  border-radius: 10px;
  border: 1px solid #d3d2d2;
`;
const Inp = styled.input`
  width: 270px;
`;
const TableEdit = ({
  formData,
  setFormData,
  telInputRef,
  tel1,
  tel2,
  tel3,
  setTel1,
  setTel2,
  setTel3,
}) => {
  const router = useRouter();

  // const [formData, setFormData] = useRecoilState(formDataState);

  // const [num, setNum] = useRecoilState(numState);
  // const [email, setEmail] = useRecoilState(emailState);

  //const [telnum, setTelNum] = useRecoilState(numState);
  // const [emailValue, setEmailValue] = useRecoilState(emailState);

  const handleTel1Change = (e) => {
    setTel1(e.target.value);
    //formData.tel1(e.target.value);
    //setTelNum(e.target.value);
  };
  // const handleTel2Change = (e) => {
  //   const updateFormData = { ...formData, tel2: e.target.value };
  //   setFormData(updateFormData);
  //   //setTelNum(e.target.value);
  // };
  // const handleTel3Change = (e) => {
  //   const updateFormData = { ...formData, tel3: e.target.value };
  //   setFormData(updateFormData);
  //   //setTelNum(e.target.value);
  // };
  const handleEmail = (e) => {
    const updateFormData = { ...formData, email: e.target.value };
    setFormData(updateFormData);
  };

  useEffect(() => {
    setTel1(tel1 || ""); // tel1 값이 있으면 사용, 없으면 빈 문자열
    setTel2(tel2 || ""); // tel2 값이 있으면 사용, 없으면 빈 문자열
    setTel3(tel3 || ""); // tel3 값이 있으면 사용, 없으면 빈 문자열
  }, [tel1, tel2, tel3]);
  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>전화번호</FirstTd>
            <SecondTd>
              <Input
                type="text"
                maxLength={3}
                ref={telInputRef}
                value={tel1}
                onChange={handleTel1Change}
              ></Input>{" "}
              -
              <Input
                type="text"
                maxLength={4}
                value={tel2}
                onChange={(e) => setTel2(e.target.value)}
              ></Input>{" "}
              -{" "}
              <Input
                type="text"
                maxLength={4}
                value={tel3}
                onChange={(e) => setTel3(e.target.value)}
              ></Input>
            </SecondTd>
          </Tr>
          <Tr>
            <FirstTd>이메일</FirstTd>
            <SecondTd>
              <Input
                type="text"
                placeholder="id"
                // ref={emailInput}
                value={formData.email}
                onChange={handleEmail}
              ></Input>{" "}
              @{" "}
              <Select
                options={[
                  { value: "naver", label: "naver.com" },
                  { value: "google", label: "google.ac.kr" },
                  { value: "gmail", label: "gmail.com" },
                ]}
              ></Select>
            </SecondTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default TableEdit;
