"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import Button from "@/app/components/Button";

function NewCounselRegister({ params }) {
  const router = useRouter();
  const [counselInfo, setCounselInfo] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(
          `http://localhost:8080/newconsulting/${params.id}`,
          options
        );
        const data = await resp.json();
        setCounselInfo(data);
        console.log(data);
      } catch {
        console.error("error");
      }
    };

    fetchData();
    console.log(counselInfo);
  }, []);

  const handleToList = () => {
    router.push(`/AcademyManagement/StudentManagement/counsel`);
  };

  return (
    <PageContainer>
      <NewRegisterContainer>
        <p>
          원생관리 {">"} 학생관리 {">"} 신규상담 {">"} 상담등록
        </p>

        <NewRegisterHeader>
          <NewRegisterBtnWrapper>
            <Button
              type="button"
              $secondary
              $large
              style={{ marginRight: "25px" }}
            >
              출결관리
            </Button>
            <Button type="button" $primary $large>
              학생관리
            </Button>
          </NewRegisterBtnWrapper>

          <NewRegisterBtnWrapper>
            <Button $tertiary $medium onClick={handleToList}>
              목록
            </Button>
          </NewRegisterBtnWrapper>
        </NewRegisterHeader>

        {counselInfo.length > 0 && (
          <>
            <NewRegisterBody>
              <NewRegisterInfoLeft>
                <Row style={{ gap: "0px" }}>
                  <P style={{ fontSize: "18px", lineHeight: "18px" }}>
                    {counselInfo[0].st_name}
                  </P>
                  <P
                    style={{ fontSize: "18px", lineHeight: "18px" }}
                  >{`(${counselInfo[0].st_gender})`}</P>
                </Row>
                <Row>
                  <P>생년월일 |</P>
                  <p style={{ lineHeight: "16px" }}>
                    {counselInfo[0].st_birth}
                  </p>
                </Row>
                <Row style={{ marginRight: "10px" }}>
                  <P style={{ marginLeft: "50px" }}>학교 |</P>
                  <p style={{ lineHeight: "16px" }}>
                    {counselInfo[0].st_school}
                  </p>
                </Row>
                <Row>
                  <P>학년 |</P>
                  <p style={{ lineHeight: "16px" }}>
                    {counselInfo[0].st_grade}
                  </p>
                </Row>
              </NewRegisterInfoLeft>
              <NewRegisterInfoRight>
                <Table>
                  <thead>
                    {/* 학원생 휴대폰번호 */}
                    <Tr>
                      <Th>원생</Th>
                      <Td>
                        <span>{counselInfo[0].st_phone.substr(0, 3)}</span>

                        <hr style={{ width: "10px", height: "1px" }} />
                        <span>{counselInfo[0].st_phone.substr(3, 4)}</span>
                        <hr style={{ width: "10px", height: "1px" }} />

                        <span>{counselInfo[0].st_phone.substr(7, 4)}</span>
                      </Td>
                    </Tr>
                    {/* 학부모 휴대폰번호 */}
                    <Tr>
                      <Th>학부모</Th>
                      <Td>
                        <span>{counselInfo[0].st_pa_phone.substr(0, 3)}</span>
                        <hr style={{ width: "10px", height: "1px" }} />
                        <span>{counselInfo[0].st_pa_phone.substr(3, 4)}</span>

                        <hr style={{ width: "10px", height: "1px" }} />
                        <span>{counselInfo[0].st_pa_phone.substr(7, 4)}</span>
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
                      <Td style={{ margin: "0 auto" }}>
                        <span
                          style={{
                            color: "#6B7280",
                            fontSize: "14px",
                          }}
                        >
                          {counselInfo[0].st_class}
                        </span>
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
                        <span
                          style={{
                            color: "#6B7280",
                            fontSize: "14px",
                            textAlign: "center",
                          }}
                        >
                          {counselInfo[0].st_etc}
                        </span>
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
              <CounselContents>{counselInfo[0].st_content}</CounselContents>
            </div>
          </>
        )}
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
`;

const NewRegisterInfoRight = styled.div`
  width: 473px;
  height: 235px;
  border: 1px solid #d3d2d2;
  border-radius: 10px;
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

const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 321px;
  justify-content: center;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const CounselContents = styled.article`
  width: 813px;
  height: 183px;
  color: #6b7280;
  font-size: 14px;
  padding: 8px 19px;
  border: 1px solid #d3d2d2;
  border-radius: 5px;
  overflow: "hidden";
`;
