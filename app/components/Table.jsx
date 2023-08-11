import styled from "styled-components";

const TableContainer = styled.table`
  border: 1px solid #c4c4c4;
  border-collapse: collapse;
  width: 506px;
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
`;
const SecondTd = styled.td`
  border: 1px solid #C4C4C4
  padding: 10px 5px;
  width: 379px;
`;
const Table = ({ data }) => {
  return (
    <>
      <TableContainer>
        <tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <FirstTd>{row.title}</FirstTd>
              <SecondTd>{row.value}</SecondTd>
            </Tr>
          ))}
        </tbody>
      </TableContainer>
    </>
  );
};
export default Table;
