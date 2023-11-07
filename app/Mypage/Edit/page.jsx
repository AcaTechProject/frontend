"use client";
import ProfileImage from "@/app/components/ProfileImage";
import Table from "../../components/Table";
import Image from "next/image";
import styled from "styled-components";
import TableEdit from "@/app/components/TableEdit";
import TableText from "@/app/components/TableText";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
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

const Containers = styled.div`
  width: 255px;
  text-align: center;
  margin-left: 50px;
`;
const Labels = styled.label`
  color: #0095f6;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  text-align: center;
`;
const InputImg = styled.input`
  display: none;
`;

const Edit = () => {
  const router = useRouter();

  const [selectedSubject, setSelectedSubject] = useState("");
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({});
  const [uploadImgPath, setUploadImgPath] = useState(""); 

  const telInputRef = useRef(null);
  const clsRef = useRef(null);

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

  const [cls, setCls] = useState("");
  const [grade, setGrade] = useState("");

  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  //사용자가 이미지를 선택한 후 호출됨.
  const handlePick = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImg(imageUrl);

    if (file) {
      uploadImage(file);
    }
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setImg(reader.result); // 미리보기
    };
    
    reader.readAsDataURL(file); // 파일을 URL로 읽어옴
  
  };
  
  

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    axios
      .post(`http://localhost:8080/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("formData",formData);
        console.log("이미지 업로드 성공", response.data);
        setUploadImgPath(response.data.path);
        console.log("path",response.data.path);
      })
      .catch((error) => {
        console.log("이미지 업로드 실패", error);
      });
  };

  const handleComplete = () => {
    const userId = sessionStorage.getItem("userId");
    if (tel1 === "" || tel2 === "" || tel3 === "") {
      alert("전화번호를 모두 입력해주세요");
      telInputRef.current.focus();
      // 비어있는 입력 필드를 찾아 해당 입력 필드에 초점을 맞춤.
    } else if (cls === "") {
      alert("담당수업의 정보를 예시와 같이 입력해주세요.");
      clsRef.current.focus();
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
        user_image: uploadImgPath,
        user_class: cls,
      })
      .then((response) => {
        console.log("수정 요청 성공");

        const finalUploadImgFile = document.getElementById("profileImg").files[0];

        // 이미지 업로드 요청
      if (finalUploadImgFile) {
        uploadImage(finalUploadImgFile);
        router.push("/Mypage");
      } else {
        // 이미지가 없을 경우에는 바로 마이페이지로 이동
        router.push("/Mypage");
        setTel1(tel1);
        setTel2(tel2);
        setTel3(tel3);
        setEmail(userData.user_email);
        setCls(userData.user_class);
        setGrade(userData.user_grade);
        setImg(userData.user_image)
        
      }
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
          {/* <ProfileImage img={img} /> */}
          <Containers>
      <Image
        src="https://acatech.s3.ap-northeast-2.amazonaws.com//{user_image}"
        alt="프로필"
        width={250}
        height={250}
        style={{ borderRadius: "50%", textAlign: "center" }}
      />
      <Labels htmlFor="profileImg">이미지 추가</Labels>
      <InputImg
        type="file"
        accept="image/*"
        id="profileImg"
        alt="프로필"
        onChange={handlePick}
        // ref={imgRef}
      />
    </Containers>
          {/* <Label htmlFor="profileImg">이미지 추가</Label> */}
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