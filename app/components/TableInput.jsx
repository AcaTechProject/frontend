import styled from "styled-components";
import { useState } from "react";
import SelectBox from "../components/Select";

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
  padding: 20px 5px;
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
  height: 20px;
  margin-left: 15px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
const Inp = styled.input`
  width: 270px;
  margin-left: 10px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
const Button = styled.button`
  margin-left: 5px;
  color: white;
  background: black;
  font-size: 10px;
`;
const Table = () => {
  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>원생</FirstTd>
            <SecondTd>
              <Input type="text" maxLength={3}></Input> -
              <Input type="text" maxLength={4}></Input> -
              <Input type="text" maxLength={4}></Input>
            </SecondTd>
          </Tr>
          <Tr>
            <FirstTd>학부모</FirstTd>
            <SecondTd>
              <Input type="text" maxLength={3}></Input> -
              <Input type="text" maxLength={4}></Input> -
              <Input type="text" maxLength={4}></Input>
            </SecondTd>
          </Tr>
          <Tr>
            <FirstTd>가족관계</FirstTd>
            <SecondTd>
              <Inp type="text" placeholder="형제 자매 정보를 입력해주세요" />
              <Button>+</Button>
            </SecondTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default Table;
