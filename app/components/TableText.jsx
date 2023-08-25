import styled from "styled-components";
import { useRecoilState } from "recoil";
import { textState } from "../../recoil/atom";

const TableContainer = styled.table`
  border: 1px solid #c4c4c4;
  border-collapse: collapse;
  width: 606px;
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
  width: 400px;
  height: 0 auto;
  border-radius: 5px;
  border: 1px solid #d3d2d2;
`;
const TableText = ({ title, placeholder, textRef }) => {
  const [text, setText] = useRecoilState(textState);
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>{title}</FirstTd>
            <SecondTd>
              <Textarea
                placeholder={placeholder}
                value={text}
                ref={textRef}
                onChange={handleText}
              />
            </SecondTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default TableText;
