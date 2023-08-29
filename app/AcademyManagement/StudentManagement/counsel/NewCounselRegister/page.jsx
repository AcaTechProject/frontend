"use client";

import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";

function NewCounselRegister() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageContainer>
      <NewRegisterContainer>
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
            <Button $tertiary $medium style={{ marginRight: "30px" }}>
              취소
            </Button>
            <Button $tertiary $medium onClick={() => setIsOpen(true)}>
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
                style={{
                  width: "143px",
                  height: "44px",
                  border: "1px solid #d3d2d2",
                  borderRadius: "10px",
                }}
              />
              <select
                style={{
                  width: "101px",
                  height: "44px",
                  border: "1px solid #d3d2d2",
                  borderRadius: "10px",
                  padding: "10px",
                  marginLeft: "10px",
                }}
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
                placeholder="생년월일을 입력해주세요"
                style={{
                  width: "159px",
                  height: "30px",
                  border: "1px solid #d3d2d2",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  marginLeft: "20px",
                }}
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
                style={{
                  width: "159px",
                  height: "30px",
                  border: "1px solid #d3d2d2",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  marginLeft: "20px",
                }}
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
                style={{
                  width: "150px",
                  height: "30px",
                  border: "1px solid #d3d2d2",
                  borderRadius: "10px",
                  padding: "0 10px",
                }}
              >
                <option value="first-grade">1학년</option>
                <option value="second-grade">2학년</option>
                <option value="third-grade">3학년</option>
                <option value="fourth-grade">4학년</option>
                <option value="fifth-grade">5학년</option>
                <option value="sixth-grade">6학년</option>
              </select>
            </div>
          </NewRegisterInfoLeft>
          <NewRegisterInfoRight>
            <Table>
              <Tbody>
                <Tr>
                  <Th>원생</Th>
                  <Td>
                    <TInput type="text" />
                    <hr style={{ width: "10px", height: "1px" }} />
                    <TInput type="text" />
                    <hr style={{ width: "10px", height: "1px" }} />
                    <TInput type="text" />
                  </Td>
                </Tr>
                <Tr>
                  <Th>학부모</Th>
                  <Td>
                    <TInput type="text" />
                    <hr style={{ width: "10px", height: "1px" }} />
                    <TInput type="text" />
                    <hr style={{ width: "10px", height: "1px" }} />
                    <TInput type="text" />
                  </Td>
                </Tr>
              </Tbody>
            </Table>

            <Table style={{ marginTop: "8px" }}>
              <Tr>
                <Th>희망 수강 과목</Th>
              </Tr>
              <Tr>
                <Td>
                  <select
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
                  >
                    <option value="korean">국어A</option>
                    <option value="korean">국어B</option>
                    <option value="english">영어A</option>
                    <option value="english">영어B</option>
                  </select>
                </Td>
              </Tr>
              <Tr>
                <Th>기타 특이 사항</Th>
              </Tr>
              <Tr>
                <Td>
                  <textarea
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      outline: "none",
                      paddingLeft: "10px",
                      overflow: "hidden",
                    }}
                  ></textarea>
                </Td>
              </Tr>
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
          <NewRegisterTextarea></NewRegisterTextarea>
        </div>
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
