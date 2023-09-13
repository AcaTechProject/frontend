"use client";

import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";

function NewCounselRegister() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("female");
  const [birth, setBirth] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [className, setClassName] = useState("");
  const [content, setContent] = useState("");
  const [etc, setEtc] = useState("");

  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const [paPhone1, setPaPhone1] = useState("");
  const [paPhone2, setPaPhone2] = useState("");
  const [paPhone3, setPaPhone3] = useState("");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  };

  const fetchData = async () => {
    const resp = await fetch(`http://localhost:8080/newconsulting`, options);
    const studentsInfo = await resp.json();
    return console.log(studentsInfo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectGrade = (e) => {
    setGrade(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectClass = (e) => {
    setClassName(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNum = `${phone1},${phone2}${phone3}`;
    const paPhoneNum = `${paPhone1},${paPhone2}${paPhone3}`;

    fetch(`http://localhost:8080/newconsulting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        st_name: name,
        st_gender: gender,
        st_birth: birth,
        st_school: school,
        st_grade: grade,
        st_pa_phone: paPhoneNum,
        st_phone: phoneNum,
        st_class: className,
        st_content: content,
        st_etc: etc,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleSelectGender = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const handlePhone1Change = (e) => {
    setPhone1(e.target.value);
  };

  const handlePhone2Change = (e) => {
    setPhone2(e.target.value);
  };

  const handlePhone3Change = (e) => {
    setPhone3(e.target.value);
  };

  const handlePaPhone1Change = (e) => {
    setPaPhone1(e.target.value);
  };

  const handlePaPhone2Change = (e) => {
    setPaPhone2(e.target.value);
  };

  const handlePaPhone3Change = (e) => {
    setPaPhone3(e.target.value);
  };

  return (
    <PageContainer>
      <NewRegisterContainer>
        <form onSubmit={handleSubmit}>
          <p>
            원생관리 {">"} 학생관리 {">"} 신규상담 {">"} 상담등록
          </p>
          <NewRegisterHeader>
            <NewRegisterBtnWrapper>
              <Button $secondary $large style={{ marginRight: "25px" }}>
                출결관리
              </Button>
              <Button $primary $large>
                학생관리
              </Button>
            </NewRegisterBtnWrapper>
            <NewRegisterBtnWrapper>
              <Button
                $tertiary
                $medium
                style={{ marginRight: "30px" }}
                onClick={() => setIsOpen(true)}
              >
                취소
              </Button>
              <Button $tertiary $medium onSubmit={handleSubmit}>
                등록
              </Button>
              {isOpen ? (
                <Modal
                  onCheck={() => setIsOpen(false)}
                  onClose={() => setIsOpen(false)}
                  message={
                    "작성중이던 정보는 저장되지 않습니다. 취소하시겠습니까?"
                  }
                />
              ) : null}
            </NewRegisterBtnWrapper>
          </NewRegisterHeader>
          <NewRegisterBody>
            <NewRegisterInfoLeft>
              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <input
                  type="text"
                  placeholder="이름을 입력해주세요"
                  name="st_name"
                  style={{
                    width: "143px",
                    height: "44px",
                    border: "1px solid #d3d2d2",
                    borderRadius: "10px",
                  }}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <select
                  name="st_gender"
                  style={{
                    width: "101px",
                    height: "44px",
                    border: "1px solid #d3d2d2",
                    borderRadius: "10px",
                    padding: "10px",
                    marginLeft: "10px",
                  }}
                  onChange={handleSelectGender}
                  value={gender}
                >
                  <option value="female">여</option>
                  <option value="male">남</option>
                </select>
              </div>
              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <span>생년월일 |</span>
                <input
                  type="text"
                  placeholder="8자리를 입력해주세요"
                  name="st_birth"
                  style={{
                    width: "159px",
                    height: "30px",
                    border: "1px solid #d3d2d2",
                    borderRadius: "10px",
                    paddingLeft: "10px",
                    marginLeft: "20px",
                  }}
                  onChange={(e) => setBirth(e.target.value)}
                  value={birth}
                />
              </div>
              <div
                style={{
                  marginLeft: "30px",
                  marginBottom: "20px",
                }}
              >
                <span>학교 |</span>
                <input
                  type="text"
                  placeholder="학교를 입력해주세요"
                  name="st_school"
                  style={{
                    width: "159px",
                    height: "30px",
                    border: "1px solid #d3d2d2",
                    borderRadius: "10px",
                    paddingLeft: "10px",
                    marginLeft: "20px",
                  }}
                  onChange={(e) => setSchool(e.target.value)}
                  value={school}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "50px",
                }}
              >
                <select
                  name="st_grade"
                  onChange={handleSelectGrade}
                  style={{
                    width: "150px",
                    height: "30px",
                    border: "1px solid #d3d2d2",
                    borderRadius: "10px",
                    padding: "0 10px",
                  }}
                  value={grade}
                >
                  <option value="1학년">1학년</option>
                  <option value="2학년">2학년</option>
                  <option value="3학년">3학년</option>
                  <option value="4학년">4학년</option>
                  <option value="5학년">5학년</option>
                  <option value="6학년">6학년</option>
                </select>
              </div>
            </NewRegisterInfoLeft>
            <NewRegisterInfoRight>
              <Table>
                <thead>
                  {/* 학원생 휴대폰번호 */}
                  <Tr>
                    <Th>원생</Th>
                    <Td>
                      <TInput
                        type="text"
                        name="st_phone1"
                        maxLength={4}
                        onChange={handlePhone1Change}
                        value={phone1}
                      />
                      <hr style={{ width: "10px", height: "1px" }} />
                      <TInput
                        type="text"
                        name="st_phone2"
                        maxLength={4}
                        onChange={handlePhone2Change}
                        value={phone2}
                      />
                      <hr style={{ width: "10px", height: "1px" }} />
                      <TInput
                        type="text"
                        name="st_phone3"
                        maxLength={4}
                        onChange={handlePhone3Change}
                        value={phone3}
                      />
                    </Td>
                  </Tr>
                  {/* 학부모 휴대폰번호 */}
                  <Tr>
                    <Th>학부모</Th>
                    <Td>
                      <TInput
                        type="text"
                        name="st_pa_phone1"
                        onChange={handlePaPhone1Change}
                        value={paPhone1}
                      />
                      <hr style={{ width: "10px", height: "1px" }} />
                      <TInput
                        type="text"
                        name="st_pa_phone2"
                        onChange={handlePaPhone2Change}
                        value={paPhone2}
                      />
                      <hr style={{ width: "10px", height: "1px" }} />
                      <TInput
                        type="text"
                        name="st_pa_phone3"
                        onChange={handlePaPhone3Change}
                        value={paPhone3}
                      />
                    </Td>
                  </Tr>
                </thead>
              </Table>

              <Table style={{ marginTop: "8px" }}>
                <thead>
                  <Tr>
                    <Th>희망 수강 과목</Th>
                  </Tr>
                </thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <select
                        name="st_class"
                        onChange={handleSelectClass}
                        style={{
                          margin: "0 auto",
                          width: "89px",
                          height: "26px",
                          border: "26px",
                          outline: "none",
                          marginTop: "5px",
                          border: "1px solid #d3d2d2",
                          borderRadius: "10px",
                        }}
                        value={className}
                      >
                        <option value="국어">국어</option>
                        <option value="영어">영어</option>
                        <option value="수학">수학</option>
                        <option value="과학">과학</option>
                      </select>
                    </Td>
                  </Tr>
                </Tbody>
                <thead>
                  <Tr>
                    <Th>기타 특이 사항</Th>
                  </Tr>
                </thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <textarea
                        name="etc"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                          outline: "none",
                          paddingLeft: "10px",
                          overflow: "hidden",
                        }}
                        onChange={(e) => setEtc(e.target.value)}
                        value={etc}
                      ></textarea>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </NewRegisterInfoRight>
          </NewRegisterBody>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <span
              style={{
                fontWeight: "700",
              }}
            >
              상담내용
            </span>
            {/* 상담내용 서버 처리 방법 논의 */}
            <NewRegisterTextarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
            ></NewRegisterTextarea>
          </div>
        </form>
      </NewRegisterContainer>
    </PageContainer>
  );
}

export default NewCounselRegister;

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 116px 70px 55px 85px;
`;

const NewRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewRegisterHeader = styled.div`
  width: 814px;
  height: 75px;
  display: flex;
  justify-content: space-between;
`;

const NewRegisterBtnWrapper = styled.div``;

const NewRegisterBody = styled.div`
  width: 815px;
  height: 100%;
  display: flex;
`;

const NewRegisterInfoLeft = styled.div`
  width: 321px;
  height: 235px;
  margin-right: 28px;
  border: 2px solid #d3d2d2;
  border-radius: 10px;
  padding: 10px 0 0 20px;
`;
const NewRegisterInfoRight = styled.div`
  width: 473px;
  height: 235px;
  border: 1px solid #d3d2d2;
  border-radius: 10px;
`;

const NewRegisterTextarea = styled.textarea`
  width: 814px;
  height: 183px;
  border: 1px solid #d3d2d2;
  border-radius: 5px;
`;

const Table = styled.table`
  text-decoration: none;
  width: 469px;
  height: 81px;
  border: 1px solid #d3d2d2;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  border: 1px solid #d3d2d2;
`;
const Th = styled.th`
  width: 106px;
  height: 30px;
  background-color: #eceafe;
`;

const Td = styled.td`
  height: 100%;
  display: flex;
  height: 40px;
`;

const Tbody = styled.tbody``;

const TInput = styled.input`
  width: 65px;
  height: 18px;
  border: 1px solid #d3d2d2;
  border-radius: 10px;
`;
