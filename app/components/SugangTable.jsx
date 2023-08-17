//가로 표
import styled from "styled-components";
import Select from "./Select";

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
const SugangTable = () => {
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
                <Select
                  options={[
                    {
                      value: "kor",
                      label: "국어",
                    },
                    {
                      value: "eng",
                      label: "영어",
                    },
                    { value: "math", label: "수학" },
                  ]}
                />
                <Select
                  options={[
                    {
                      value: "kor",
                      label: "국어 김은진A",
                    },
                    {
                      value: "eng",
                      label: "영어 김무무A",
                    },
                    { value: "math", label: "수학 김아개B" },
                  ]}
                />
                <Button> + </Button>
              </Row>
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
