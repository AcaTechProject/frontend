import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import SelectBox from "../components/Select";
import { useRecoilState } from "recoil";
import {
  studentTel1State,
  studentTel2State,
  studentTel3State,
  parentTel1State,
  parentTel2State,
  parentTel3State,
  valueState,
  familyState,
} from "../../recoil/atom";
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
const TableInput = ({ parentInputRef, telInputRef, familyInputRef }) => {
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");

  const [parent1, setParent1] = useState("");
  const [parent2, setParent2] = useState("");
  const [parent3, setParent3] = useState("");

  //형제관계 입력칸
  const [family, setFamily] = useRecoilState(familyState);
  //형제관계 입력칸이 변할 배열들 다룸.
  const [arr, setArr] = useRecoilState(valueState);
  const [studentTel1, setStudentTel1] = useRecoilState(studentTel1State);
  const [studentTel2, setStudentTel2] = useRecoilState(studentTel2State);
  const [studentTel3, setStudentTel3] = useRecoilState(studentTel3State);

  const handleTel1 = (event) => {
    setTel1(event.target.value);
  };

  const handleTel2 = (event) => {
    setTel2(event.target.value);
  };

  const handleTel3 = (event) => {
    setTel3(event.target.value);
  };

  const [studentParent1, setStudentParent1] = useRecoilState(parentTel1State);
  const [studentParent2, setStudentParent2] = useRecoilState(parentTel2State);
  const [studentParent3, setStudentParent3] = useRecoilState(parentTel3State);

  const checkValue = (e) => {
    console.log(family);
    setFamily(e.target.value);
  };

  const handleParent1 = (e) => {
    setParent1(e.target.value);
  };
  const handleParent2 = (e) => {
    setParent2(e.target.value);
  };
  const handleParent3 = (e) => {
    setParent3(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (family === "") {
      return;
    }
    setArr((currentArr) => [family, ...currentArr]);
    setFamily("");
  };

  console.log(arr);

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
                value={tel1 !== "" ? tel1 : studentTel1}
                onChange={handleTel1}
                ref={telInputRef}
              ></Input>{" "}
              -
              <Input
                type="text"
                id="tel"
                maxLength={4}
                value={tel2 !== "" ? tel2 : studentTel2}
                onChange={handleTel2}
              ></Input>{" "}
              -
              <Input
                type="text"
                maxLength={4}
                value={tel3 !== "" ? tel3 : studentTel3}
                onChange={handleTel3}
              ></Input>
            </SecondTd>
          </Tr>

          <Tr>
            <FirstTd>학부모</FirstTd>
            <SecondTd>
              <Input
                type="text"
                maxLength={3}
                placeholder="010"
                value={parent1 !== "" ? parent1 : studentParent1}
                onChange={handleParent1}
                ref={parentInputRef}
              ></Input>{" "}
              -
              <Input
                type="text"
                maxLength={4}
                value={parent2 !== "" ? parent2 : studentParent2}
                onChange={handleParent2}
              ></Input>{" "}
              -
              <Input
                type="text"
                maxLength={4}
                value={parent3 !== "" ? parent3 : studentParent3}
                onChange={handleParent3}
              ></Input>
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
                  value={family}
                  ref={familyInputRef}
                />
                <Button>+</Button>
                <p>
                  {arr.map((item, index) => (
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
export default TableInput;
