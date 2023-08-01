import styled from "styled-components";
import SidebarItems from "./SidebarItems";
const SidebarParent = styled.div`
  position: fixed;
  width: 248px;
  background: #eceafe78;
  box-shadow: 0.5px 0.5px 3px;
  height: 100%;
`;

const Logo = styled.div`
  padding: 20px 30px 0 30px;

  height: 50px;
  width: 170px;
  display: flex;
`;
const Title = styled.h2`
  position: relative;
  bottom: 15px;
  color: navy;
`;
const Menu = styled.div`
  margin-top: 76px;

  padding: 0 40px 0 50px;
`;

const StyledSidebarItem = styled.p`
  margin-bottom: 40px;
`;

const Logout = styled.div`
  position: absolute;
  bottom: 0;
  left: 50px;
`;
const Sidebar = () => {
  return (
    <>
      <SidebarParent>
        <Logo>
          <img src="" alt="logo"></img>
          <Title>AcaTech</Title>
        </Logo>
        <Menu>
          {SidebarItems.map((i) => (
            <StyledSidebarItem key={i.name}>{i.name}</StyledSidebarItem>
          ))}
        </Menu>
        <Logout>
          <p>로그아웃</p>
        </Logout>
        {/* <SidebarItem>
          <p>원생관리</p>
        </SidebarItem>
        <SidebarItem>
          <p>스케줄 관리</p>
        </SidebarItem> */}
      </SidebarParent>
    </>
  );
};

export default Sidebar;
