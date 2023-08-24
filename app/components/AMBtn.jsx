import styled from "styled-components";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
const AMBtn = () => {
  const router = useRouter();
  return (
    <Button
      $large
      $secondary
      onClick={() => router.push("/AcademyManagement/attendance")}
    >
      출결관리
    </Button>
  );
};
export default AMBtn;
