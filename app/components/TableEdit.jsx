import Select from "./Select";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

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
  text-align: center;
`;
const SecondTd = styled.td`
  border: 1px solid #C4C4C4
  padding: 10px 15px;
  width: 379px;
 
`;
const Input = styled.input`
  width: 50px;
  margin-left: 10px;
  border-radius: 10px;
  border: 1px solid #d3d2d2;
`;
const Inp = styled.input`
  width: 270px;
`;
const TableEdit = ({ onEditButtonClicked }) => {
  const router = useRouter();
  const telInputRefs = [useRef(null), useRef(null), useRef(null)];

  const [telNum, setTelNum] = useState(["", "", ""]);

  return (
    <>
      <TableContainer>
        <tbody>
          <Tr>
            <FirstTd>전화번호</FirstTd>
            <SecondTd>
              <Input
                type="text"
                maxLength={3}
                ref={telInputRefs[0]}
                value={telNum[0]}
                onChange={(e) =>
                  setTelNum([e.target.value, telNum[1], telNum[2]])
                }
              ></Input>{" "}
              -<Input type="text" maxLength={4} ref={telInputRefs[1]}></Input> -{" "}
              <Input type="text" maxLength={4} ref={telInputRefs[2]}></Input>
            </SecondTd>
          </Tr>
          <Tr>
            <FirstTd>이메일</FirstTd>
            <SecondTd>
              <Input type="text" placeholder="id"></Input> @{" "}
              <Select
                options={[
                  { value: "naver", label: "naver.com" },
                  { value: "google", label: "google.ac.kr" },
                  { value: "gmail", label: "gmail.com" },
                ]}
              ></Select>
            </SecondTd>
          </Tr>
        </tbody>
      </TableContainer>
    </>
  );
};
export default TableEdit;
