import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Link } from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavParent = styled.div`
  flex-grow: 1;
  height: 70px;
  box-shadow: 0 3px 0.5px 0 rgba(0, 0, 0, 0.05);
  background-color: rgba(236, 234, 254, 0.47);
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
`;
const NavTitle = styled.h1`
  flex-grow: 1;
  margin-left: 45%;
  padding: 20px 0 0 0;
  position: relative;
`;
const NavUser = styled.span`
  color: blue;
  cursor: pointer;
  padding: 10px 0 0 0;
`;
const Container = styled.div`
  display: flex;
  margin: 10px 130px 0 0;
  gap: 10px;
`;

const Nav = () => {
  const router = useRouter();
  const [img, setImg] = useState("");

  const handleLogin = () => {
    router.push("/Login");
  };

  return (
    <>
      <NavParent>
        <NavTitle onClick={() => router.push("/")}>Prama Math</NavTitle>
        <Container>
          <Image
            src={img ? img : `/default_profile.png`}
            alt="프로필"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
            onClick={() => router.push("/Mypage")}
          />

          <NavUser onClick={handleLogin}>김하늘님</NavUser>
        </Container>
      </NavParent>
    </>
  );
};
export default Nav;
