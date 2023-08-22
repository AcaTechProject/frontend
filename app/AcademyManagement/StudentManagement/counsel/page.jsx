"use client";
import Button from "@/app/components/Button";
import styled from "styled-components";
import StudentList from "@/app/components/StudentList";
import { useRouter } from "next/navigation";
import { inputAtom } from "../../../recoil/atom";
import { useRecoilValue } from "recoil";
const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;
const Row = styled.div`
  display: flex;
  gap: 23px;
  margin-left: 78%;
`;

const Counsel = () => {
  const router = useRouter();
  const data = [];
  const headers = ["No", "상담과목", "일시", "담당교사"];

  const handleEdit = () => {
    router.push("/AcademyManagement/StudentManagement/counsel/CounselEdit");
  };
  const handleRegister = () => {
    router.push("/AcademyManagement/StudentManagement/counsel/CounselRegister");
  };
  const input = useRecoilValue(inputAtom);

  return (
    <Container>
      <h1>{input}</h1>
      <p>
        원생관리 {">"} 학생관리 {">"} 수강생 관리 {">"} 이름
      </p>
      <h2>김지수 학생 상담내역</h2>
      <Row>
        <Button
          $medium
          $primary
          width="106px"
          height="41px"
          onClick={handleEdit}
        >
          상담내역 관리
        </Button>
        <Button
          $medium
          $primary
          width="106px"
          height="41px"
          onClick={handleRegister}
        >
          상담 등록
        </Button>
      </Row>
      <StudentList data={data} headers={headers} />
    </Container>
  );
};
export default Counsel;
