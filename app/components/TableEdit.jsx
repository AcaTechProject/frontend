import Select from "./Select";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { telState, emailState } from "../../recoil/atom";

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
const TableEdit = ({ telInput, emailInput }) => {
  const router = useRouter();

  const [num, setNum] = useRecoilState(telState);
  const [email, setEmail] = useRecoilState(emailState);

  const handleTel = (e) => {
    setNum(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
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
                ref={telInput}
                value={num}
                onChange={handleTel}
              ></Input>{" "}
              -<Input type="text" maxLength={4}></Input> -{" "}
              <Input type="text" maxLength={4}></Input>
            </SecondTd>
          </Tr>
          <Tr>
            <FirstTd>이메일</FirstTd>
            <SecondTd>
              <Input
                type="text"
                placeholder="id"
                ref={emailInput}
                value={email}
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
