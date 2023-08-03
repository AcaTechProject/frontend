import { useRouter } from "next/navigation";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const SidebarParent = styled.div`
  margin: 1px 4px 0 0;
  position: fixed;
  box-shadow: 4px 0 0.5px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(236, 234, 254, 0.47);
  height: 100%;
  width: 248px;
`;

const Logo = styled.div`
  padding: 30px 29px 0 47px;
  flex-grow: 0;
  height: 50px;
  width: 172px;
  display: flex;
`;
const Title = styled.h2`
  position: relative;
  bottom: 15px;
  color: navy;
`;
const Menu = styled.div`
  margin-top: 70px;
  padding: 0 85px 116px 100px;
`;

const StyledSidebarItem = styled.p`
  margin-bottom: 40px;
  cursor: pointer;
`;

const Logout = styled.div`
  position: absolute;
  top: 591px;
  padding: 0 85px 116px 100px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #655f5f;
`;
const Sidebar = () => {
  const router = useRouter();

  const handleMenuClick = (id) => {
    if (id === 1) {
      router.push("/schedule");
    }
  };

  return (
    <>
      <SidebarParent>
        <Logo>
          <img src="" alt="logo"></img>
          <Title>AcaTech</Title>
        </Logo>
        <Menu>
          {SidebarItems.map((i, id) => (
            <StyledSidebarItem key={id} onClick={() => handleMenuClick(id)}>
              {i.name}
            </StyledSidebarItem>
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
