//가로 표
import styled from "styled-components";

const TableContainer = styled.table`
  border: 1px solid #d3d2d2;
  border-collapse: collapse;
  width: 606px;
  height: 85px;
  margin-top: 20px;
`;
const Tr = styled.tr`
  padding: 10px 35px;
  border-radius: 15px 15px 10px 0px;
`;
const FirstTd = styled.td`
  border: 1px solid #c4c4c4;
  padding: 5px 5px;
  background: #eceafe;
  text-align: center;
  height: 30px;
`;
const SecondTd = styled.td`
  border: 1px solid #c4c4c4;
  text-align: center;
  height: 35px;
`;
const ThirdTd = styled.td`
  text-align: Center;
  width: 606px;
  height: auto;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
const attendTable = () => {
  const tableData = [
    {
      title: "수강 과목 및 분반",
      value: "국어 / 국어 A",
    },
    {
      title: "기타 특이 사항 ",
      value: "",
    },
  ];
  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>출석</FirstTd>
            <FirstTd>지각</FirstTd>
            <FirstTd>결석</FirstTd>
            <FirstTd>기타</FirstTd>
          </Tr>
          <Tr>
            <SecondTd>00 / 30</SecondTd>
            <SecondTd>00 / 30</SecondTd>
            <SecondTd>00 / 30</SecondTd>
            <SecondTd>00 / 30</SecondTd>
          </Tr>
        </tbody>
      </TableContainer>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>수강과목 및 분반</FirstTd>
          </Tr>
          <Tr>
            <SecondTd>국어 / 국어A</SecondTd>
          </Tr>
          <Tr>
            <FirstTd>기타 특이 사항</FirstTd>
          </Tr>
          <Tr>
            <ThirdTd>국어 / 국어A</ThirdTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default attendTable;
