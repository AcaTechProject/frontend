//가로 표
import styled from "styled-components";
import TableRow from "./TableRow";
const TableContainer = styled.table`
  border: 1px solid #d3d2d2;
  border-collapse: collapse;
  width: 506px;
  height: 80px;
  border-radius: 20px;
  margin-top: 10px;
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
const MemberTable = () => {
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
      <TableRow />
    </>
  );
};
export default MemberTable;
