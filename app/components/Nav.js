import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Link } from "next/link";
const NavParent = styled.div`
  flex-grow: 1;
  height: 70px;
  box-shadow: 0 4px 0.5px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(236, 234, 254, 0.47);
  display: flex;
  align-items: center;
`;
const NavTitle = styled.h1`
  flex-grow: 1;
  text-align: center;
  padding: 20px 0 0 0;
  position: relative;
`;
const NavUser = styled.span`
  color: blue;
  cursor: pointer;
  margin-left: auto;
`;

const Nav = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/Login");
  };
  // const handleTitle = () => {
  //   router.push("/");
  // };

  return (
    <>
      <NavParent>
        <NavTitle onClick={() => router.push("/")}>Prama Math</NavTitle>
        <NavUser onClick={handleLogin}>김하늘님</NavUser>
      </NavParent>
    </>
  );
};
export default Nav;
