"use client";

import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";

function NewCounselRegister() {
  const [form, setForm] = useState({
    st_name: "",
    st_gender: "female",
    st_birth: "",
    st_school: "",
    st_grade: "1학년",
    st_paPhone: "",
    st_phone1: "",
    st_phone2: "",
    st_phone3: "",
    st_paPhone1: "",
    st_paPhone2: "",
    st_paPhone3: "",
    st_className: "국어",
    st_content: "",
    st_etc: "",
  });

  const [isOpen, setIsOpen] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNum = `${form.st_phone1}${form.st_phone2}${form.st_phone3}`;
    const paPhoneNum = `${form.st_paPhone1}${form.st_paPhone2}${form.st_paPhone3}`;

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        st_name: form.st_name,
        st_gender: form.st_gender,
        st_birth: form.st_birth,
        st_school: form.st_school,
        st_grade: form.st_grade,
        st_pa_phone: paPhoneNum,
        st_phone: phoneNum,
        st_class: form.st_className,
        st_content: form.st_content,
        st_etc: form.st_etc,
      }),
    };

    fetch(`http://localhost:8080/newconsulting`, postOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
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
                  onChange={handleChange}
                  value={form.st_name}
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
                  onChange={handleChange}
                  value={form.st_gender}
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
                  onChange={handleChange}
                  value={form.st_birth}
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
                  onChange={handleChange}
                  value={form.st_school}
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
                  onChange={handleChange}
                  style={{
                    width: "150px",
                    height: "30px",
                    border: "1px solid #d3d2d2",
                    borderRadius: "10px",
                    padding: "0 10px",
                  }}
                  value={form.st_grade}
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
                        maxLength={3}
                        onChange={handleChange}
                        value={form.st_phone1}
                      />
                      <hr style={{ width: "10px", height: "1px" }} />
                      <TInput
                        type="text"
                        name="st_phone2"
                        maxLength={4}
                        onChange={handleChange}
                        value={form.st_phone2}
                      />
                      <hr style={{ width: "10px", height: "1px" }} />
                      <TInput
                        type="text"
                        name="st_phone3"
                        maxLength={4}
                        onChange={handleChange}
                        value={form.st_phone3}
                      />
                    </Td>
                  </Tr>
                  {/* 학부모 휴대폰번호 */}
                  <Tr>
                    <Th>학부모</Th>
                    <Td>
                      <TInput
                        type="text"
                        name="st_paPhone1"
                        maxLength={3}
                        onChange={handleChange}
                        value={form.st_paPhone1}
                      />
                      <hr style={{ width: "10px", height: "1px" }} />
                      <TInput
                        type="text"
                        name="st_paPhone2"
                        maxLength={4}
                        onChange={handleChange}
                        value={form.st_paPhone2}
                      />
                      <hr style={{ width: "10px", height: "1px" }} />
                      <TInput
                        type="text"
                        name="st_paPhone3"
                        maxLength={4}
                        onChange={handleChange}
                        value={form.st_paPhone3}
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
                        onChange={handleChange}
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
                        value={form.st_className}
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
                        name="st_etc"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                          outline: "none",
                          paddingLeft: "10px",
                          overflow: "hidden",
                        }}
                        onChange={handleChange}
                        value={form.st_etc}
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
            <NewRegisterTextarea
              name="st_content"
              onChange={handleChange}
              value={form.st_content}
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
