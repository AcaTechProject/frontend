import styled from "styled-components";

const TableContainer = styled.table`
  border: 1px solid #c4c4c4;
  border-collapse: collapse;
  width: 506px;
  height: 80px;
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
  padding: 10px 5px;
  width: 379px;
  text-align: center;
`;
const Textarea = styled.textarea`
  width: 300px;
  height: 0 auto;
  border-radius: 10px;
  border: 1px solid #d3d2d2;
`;
const TableText = ({ title }) => {
  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>{title}</FirstTd>
            <SecondTd>
              <Textarea />
            </SecondTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default TableText;
