import styled from "styled-components";
import { useRouter } from "next/navigation";
//import { Link } from "react-router-dom";
const NavParent = styled.div`
  flex-grow: 1;

  height: 70px;
  box-shadow: 0 4px 0.5px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(236, 234, 254, 0.47);
  display: flex;
  align-items: center;
`;
const NavTitle = styled.h1`
  margin-left: 45%;
`;
const NavUser = styled.span`
  color: blue;
  margin-left: 500px;
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
        <NavTitle>Prama Math</NavTitle>
        <NavUser onClick={handleLogin}>김하늘님</NavUser>
      </NavParent>
    </>
  );
};
export default Nav;
