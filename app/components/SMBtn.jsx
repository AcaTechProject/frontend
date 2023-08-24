import styled from "styled-components";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const SMBtn = () => {
  const router = useRouter();
  return (
    <Button
      $large
      $secondary
      onClick={() =>
        router.push("/AcademyManagement/StudentManagement/acamember")
      }
    >
      학생관리
    </Button>
  );
};
export default SMBtn;
