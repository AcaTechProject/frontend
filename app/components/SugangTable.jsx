//가로 표
import styled from "styled-components";
import Select from "./Select";
import { useState } from "react";

const TableContainer = styled.table`
  border: 1px solid #d3d2d2;
  border-collapse: collapse;
  width: 606px;
  height: 80px;
  border-radius: 20px;
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
  border: 1px solid #c4c4c4;
  padding: 10px 5px;
  width: 379px;
  text-align: center;
  height: 80px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
const Button = styled.button`
  width: 25px;
  height: 20px;
  color: white;
  background: black;
`;
const Textarea = styled.textarea`
  width: 500px;
  border: 1px solid #c4c4c4;
  height: auto;
`;
const Result = styled.div`
  margin-top: 15px;
`;

const SugangTable = () => {
  const [choice, setChoice] = useState("");
  const [teacher, setTeacher] = useState("");
  const [result, setResult] = useState([]);

  const handleSubjectChange = (e) => {
    setChoice(e.target.value);
  };
  const handleTeacherChange = (e) => {
    setTeacher(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (choice && teacher) {
      setResult((currentArr) => [`${choice},${teacher}`, ...currentArr]);
      setChoice("");
      setTeacher("");
    }
  };
  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>수강 과목 및 분반</FirstTd>
          </Tr>
          <Tr>
            <SecondTd>
              <Row>
                <form onSubmit={onSubmit}>
                  <Select
                    options={[
                      {
                        value: "국어",
                        label: "국어",
                      },
                      {
                        value: "영어",
                        label: "영어",
                      },
                      { value: "math", label: "수학" },
                    ]}
                    onChange={handleSubjectChange}
                  />
                  <Select
                    options={[
                      {
                        value: "국어 김은진A",
                        label: "국어 김은진A",
                      },
                      {
                        value: "영어 김무무A",
                        label: "영어 김무무A",
                      },
                      { value: "수학 김아개", label: "수학 김아개B" },
                    ]}
                    onChange={handleTeacherChange}
                  />
                  <Button> + </Button>
                </form>
              </Row>
              <Result>
                {result.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                {/* {choice}
                &nbsp;&nbsp;
                {teacher} */}
              </Result>
            </SecondTd>
          </Tr>
          <Tr>
            <FirstTd>기타 특이 사항</FirstTd>
          </Tr>
          <Tr>
            <SecondTd>
              <Textarea></Textarea>
            </SecondTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default SugangTable;
