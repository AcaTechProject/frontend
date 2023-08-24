import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import SelectBox from "../components/Select";
import { useRecoilState } from "recoil";
import { telState, parentState, valueState } from "../recoil/atom";
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
  margin: 4px 0 0 15px;
  font-size: 13px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
const Button = styled.button`
  margin-left: 5px;
  color: white;
  background: black;
  font-size: 10px;
`;
const ErrorMsg = styled.p`
  font-size: 10px;
  position: absolute;
  margin: 3px 0 0 15px;
  color: red;
`;
const Li = styled.li`
  font-size: 15px;
  margin-left: 12px;
`;
const Table = ({ parentInputRef, telInputRef }) => {
  //형제관계 입력칸
  const [value, setValue] = useState("");
  //형제관계 입력칸이 변할 배열들 다룸.
  const [values, setValues] = useRecoilState(valueState);
  const [tel, setTel] = useRecoilState(telState);
  const [parent, setParent] = useRecoilState(parentState);

  const checkValue = (e) => {
    console.log(value);
    setValue(e.target.value);
  };
  const handleTel = (e) => {
    setTel(e.target.value);
  };
  const handleParent = (e) => {
    setParent(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    setValues((currentArr) => [value, ...currentArr]);
    setValue("");
  };

  console.log(values);

  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>원생</FirstTd>
            <SecondTd>
              <Input
                type="text"
                maxLength={3}
                placeholder="010"
                value={tel}
                onChange={handleTel}
                ref={telInputRef}
              ></Input>{" "}
              -<Input type="text" id="tel" maxLength={4}></Input> -
              <Input type="text" maxLength={4}></Input>
            </SecondTd>
          </Tr>

          <Tr>
            <FirstTd>학부모</FirstTd>
            <SecondTd>
              <Input
                type="text"
                maxLength={3}
                placeholder="010"
                value={parent}
                onChange={handleParent}
                ref={parentInputRef}
              ></Input>{" "}
              -<Input type="text" maxLength={4}></Input> -
              <Input type="text" maxLength={4}></Input>
            </SecondTd>
          </Tr>
          <Tr>
            <FirstTd>가족관계</FirstTd>
            <SecondTd>
              <form onSubmit={onSubmit}>
                <Inp
                  type="text"
                  placeholder="형제 자매 정보를 입력해주세요"
                  onChange={checkValue}
                  value={value}
                />
                <Button>+</Button>
                <p>
                  {values.map((item, index) => (
                    <Li key={index}>{item}</Li>
                  ))}
                </p>
              </form>
            </SecondTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default Table;
