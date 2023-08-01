import styled from "styled-components";

const NavParent = styled.div`
  background: #eceafe78;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 73px;

  padding: 0 20px;
  margin-left: 248px;
`;
const NavTitle = styled.h1`
  margin-left: 615px;
`;
const NavUser = styled.p`
  color: blue;
  margin-left: auto; 
}


`;

const Nav = () => {
  return (
    <div>
      <NavParent>
        <NavTitle>Prama Math</NavTitle>
        <NavUser>김하늘님</NavUser>
      </NavParent>
    </div>
  );
};
export default Nav;
