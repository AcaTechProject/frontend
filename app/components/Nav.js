import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Link } from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const NavParent = styled.div`
  flex-grow: 1;
  height: 70px;
  box-shadow: 0 3px 0.5px 0 rgba(0, 0, 0, 0.05);
  background-color: rgba(236, 234, 254, 0.47);
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 2;
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
  const [userData, setUserData] = useState("");

  const handleLogin = () => {
    router.push("/Login");
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    axios
      .get(`http://localhost:8080/user/${userId}`)
      .then((response) => {
        setUserData(response.data);
        console.log("success!!", response);
      })
      .catch((error) => {
        console.log("요청 실패", error);
      });
  }, []);

  return (
    <>
      <NavParent>
        <NavTitle onClick={() => router.push("/")}>Prama Math</NavTitle>
        <Container>
          <Image
          src ={userData.user_image ? `https://acatech.s3.ap-northeast-2.amazonaws.com/${userData.user_image}` : '/default_profile.png'}
            alt="프로필"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
            onClick={() => router.push("/Mypage")}
          />

          <NavUser onClick={handleLogin}>{userData.user_name}님</NavUser>
        </Container>
      </NavParent>
    </>
  );
};
export default Nav;
