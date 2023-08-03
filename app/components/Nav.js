import styled from "styled-components";

const NavParent = styled.div`
  flex-grow: 1;
  margin-left: 248px;
  height: 70px;
  box-shadow: 0 4px 0.5px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(236, 234, 254, 0.47);
  display: flex;
  align-items: center;
<<<<<<< HEAD
=======
  height: 10vh;

  padding: 0 20px;
  margin-left: 248px;
>>>>>>> 2784e142205d70ac8aa47a210c58150334d912bf
`;
const NavTitle = styled.h1`
  margin-left: 610px;
`;
const NavUser = styled.span`
  color: blue;
  margin-left: 500px;
`;

const Nav = () => {
  return (
    <>
      <NavParent>
        <NavTitle>Prama Math</NavTitle>
        <NavUser>김하늘님</NavUser>
      </NavParent>
    </>
  );
};
export default Nav;
