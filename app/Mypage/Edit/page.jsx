"use client";
import ProfileImage from "@/app/components/ProfileImage";
import Table from "../../components/Table";
import styled from "styled-components";
import TableEdit from "@/app/components/TableEdit";
import TableText from "@/app/components/TableText";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  numStateA,
  numStateB,
  numStateC,
  emailState,
  formDataState,
  selectedSubjectState,
  clsState,
  gradeState,
} from "@/recoil/atom";
import axios from "axios";

const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;
const Title = styled.h2`
  font-size: 25px;
  color: #3629b7;
`;
const Body = styled.section`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0 0 20px;
  width: 50%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -70px;
  width: 50%;
  gap: 40px;
  margin-right: 70px;
`;
const Button = styled.button`
  border-radius: 5px;
  color: white;
  background: #6956e5;
  width: 110px;
  height: 33px;
  border: 0;
`;
const Label = styled.label`
  color: #0095f6;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  margin-left: 100px;
  margin-left: 150px;
`;

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
const SubjectIn = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d3d2d2;
`;
const Edit = () => {
  // const [num, setNum] = useRecoilState(numState);
  // const [email, setEmail] = useRecoilState(emailState);
  const router = useRouter();
  const [formData, setFormData] = useRecoilState(formDataState);
  const [selectedSubject, setSelectedSubject] =
    useRecoilState(selectedSubjectState);
  const [userData, setUserData] = useState({});
  // const [userPhone, setUserPhone] = useState({});
  // const [userEmail, setUserEmail] = useState("");

  const telInputRef = useRef(null);
  const clsRef = useRef(null);

  //   if (num === "") {
  //     alert("전화번호가 입력되지 않았습니다");
  //   } else {
  //     router.push("/Login");
  //   }
  //   if (text === "") {
  //     alert("담당수업의 정보를 입력해주세요");
  //     //tableTextInputRef.current.focus();
  //   } else {
  //     alert("수정 완료");
  //     router.push("/Mypage");
  //   }
  //   if (num === "") {
  //     alert("전화번호가 입력되지 않았습니다.");
  //     telInput.current.focus();
  //   } else if (email === "") {
  //     alert("이메일이 입력되지 않았습니다.");
  //     emailInput.current.focus();
  //   } else if (text === "") {
  //     alert("담당수업의 정보를 예시와 같이 입력해주세요.");
  //     textRef.current.focus();
  //   } else {
  //     alert("수정이 완료되었습니다");
  //     router.push("/Mypage");
  //   }
  // };

  const tableData2 = [
    {
      title: "담당 과목",
      // value: selectedSubject,
      value: userData.user_major,
    },
  ];
  const handleClick = () => {
    alert("수정이 취소되었습니다");
    router.push("/Mypage");
  };
  // const [num1, setNum1] = useRecoilState(numStateA);
  // const [num2, setNum2] = useRecoilState(numStateB);
  // const [num3, setNum3] = useRecoilState(numStateC);
  const [cls, setCls] = useRecoilState(clsState);
  const [grade, setGrade] = useRecoilState(gradeState);

  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  //const text = useRecoilState(editedTextState);

  const handleComplete = () => {
    const userId = sessionStorage.getItem("userId");
    if (tel1 === "" || tel2 === "" || tel3 === "") {
      alert("전화번호를 모두 입력해주세요");
      telInputRef.current.focus();
      //   // 비어있는 입력 필드를 찾아 해당 입력 필드에 초점을 맞춥니다
    } else if (cls === "") {
      alert("담당수업의 정보를 예시와 같이 입력해주세요.");
      clsRef.current.focus();
    } else {
      //router.push("/Mypage");
    }

    setSelectedSubject(selectedSubject);

    axios
      .patch(`http://localhost:8080/user/${userId}`, {
        // 수정할 데이터를 전달
        // tel1, tel2, tel3, email 등을 보내면 서버에서 이에 맞게 처리
        user_phone: `${tel1}-${tel2}-${tel3}`,
        user_email: email,
        // user_class: cls,
        user_grade: grade,
        user_image: "김경령_수정.jpg",
        user_class: cls,
      })
      .then((response) => {
        console.log("수정 요청 성공");
        // 수정 요청 성공 시 처리
        router.push("/Mypage"); // 수정 완료 후 페이지 이동
        setTel1(tel1);
        setTel2(tel2);
        setTel3(tel3);
        setEmail(userData.user_email);
        setCls(userData.user_class);
        setGrade(userData.user_grade);
      })
      .catch((error) => {
        console.log("수정 요청 실패", error);
        // 수정 요청 실패 시 처리
      });
  };
  //입력한 정보 get 하기
  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    axios
      .get(`http://localhost:8080/user/${userId}`)
      .then((response) => {
        setUserData(response.data);
        const userPhone = response.data.user_phone;
        const [tel1, tel2, tel3] = userPhone.split("-");

        // setUserEmail(userData.user_email);

        setFormData({
          ...formData,

          email: response.data.user_email,
        });

        // 추가로 전화번호 데이터 업데이트
        setTel1(tel1);
        setTel2(tel2);
        setTel3(tel3);
        setEmail(userData.user_email);
        setCls(userData.user_class);
        setGrade(userData.user_grade);
      })
      .catch((error) => {
        console.log("수정 요청 실패", error);
      });
  }, []);

  return (
    <Container>
      <Title>마이 페이지</Title>
      <Body>
        <Left>
          <ProfileImage img={img} />
          <Label htmlFor="profileImg">이미지 추가</Label>
        </Left>

        <Right>
          <div>
            <h3>기본 정보</h3>
            <TableEdit
              formData={formData}
              setFormData={setFormData}
              telInputRef={telInputRef}
              tel1={tel1}
              tel2={tel2}
              tel3={tel3}
              setTel1={setTel1}
              setTel2={setTel2}
              setTel3={setTel3}
              email={email}
              setEmail={setEmail}
            />
            {/* <TableEdit telInput={telInput}></TableEdit> */}
            {/* <TableEdit telInput={telInput} emailInput={emailInput} />
            </div> */}
          </div>
          <div>
            <h3>담당 과목</h3>
            <Table data={tableData2}></Table>
          </div>
          <div>
            <h3>담당 수업</h3>
            <TableContainer>
              <tbody>
                <Tr>
                  <FirstTd>담당 수업</FirstTd>
                  <SecondTd>
                    <SubjectIn
                      placeholder="ex) [국어 김oo A] 괄호 안의 내용과 같이 입력해주세요 "
                      value={cls}
                      ref={clsRef}
                      onChange={(e) => setCls(e.target.value)}
                    />
                  </SecondTd>
                </Tr>
              </tbody>
            </TableContainer>
          </div>
          <div>
            <h3>담당 학년</h3>
            <TableContainer>
              <tbody>
                <Tr>
                  <FirstTd>담당 학년</FirstTd>
                  <SecondTd>
                    <SubjectIn
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                    />
                  </SecondTd>
                </Tr>
              </tbody>
            </TableContainer>
          </div>
          <div style={{ display: "flex", gap: "46px" }}>
            <Button onClick={handleClick}>수정 취소</Button>
            <Button onClick={handleComplete}>수정 완료</Button>
          </div>
        </Right>
      </Body>
    </Container>
  );
};

export default Edit;
