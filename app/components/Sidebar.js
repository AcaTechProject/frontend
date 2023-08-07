import { useRouter } from "next/navigation";
import styled from "styled-components";
//import SidebarItems from "./SidebarItems";
import { useState } from "react";
import { MdPerson, MdCalendarMonth, MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
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
  margin: 100px 20px 0 40px;
`;
const List = styled.div`
  display: flex;
  padding: 30px 29px 0 47px;
  text-align: center;
`;

const Link = styled.p`
  font-size: 20px;
  height: 20px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  color: ${(props) => (props.active ? "blue" : "black")};
  cursor: pointer;
`;

const StyledSidebarItem = styled.li`
  margin: 10px 0 30px 0;
  margin-left: -20px;
  cursor: pointer;
  list-style: none;
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 0 85px 116px 60px;
  font-size: 14px;
  color: #655f5f;
  gap: 10px;
`;
const MainMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const SubMenu = styled.ul`
  margin-left: 30px;
`;

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = (route) => {
    router.push(route);
    setSidebarOpen(false); // 메뉴 클릭 시 사이드바가 자동으로 닫히도록 설정
  };
  return (
    <>
      <SidebarParent>
        <Logo>
          <img src="" alt="logo"></img>
          <Title>AcaTech</Title>
        </Logo>

        <Menu>
          <MainMenu>
            <MdPerson size="25" />
            <Link
              href="/login"
              active={pathname === "/Login"}
              onClick={() => handleMenuClick("/Login")}
            >
              원생 관리
            </Link>
          </MainMenu>

          <SubMenu>
            <StyledSidebarItem onClick={() => handleMenuClick("/attendance")}>
              -출결 관리
            </StyledSidebarItem>
            <StyledSidebarItem
              onClick={() => handleMenuClick("/student-management")}
            >
              -학생 관리
              <ul>
                <StyledSidebarItem
                  onClick={() => handleMenuClick("/enrolled-students")}
                >
                  수강생
                </StyledSidebarItem>
                <StyledSidebarItem
                  onClick={() => handleMenuClick("/new-counseling")}
                >
                  신규 상담
                </StyledSidebarItem>
              </ul>
            </StyledSidebarItem>
          </SubMenu>
          <MainMenu>
            <MdCalendarMonth size="25" />
            <Link href="/login">일정 관리</Link>
          </MainMenu>
          <SubMenu>
            <StyledSidebarItem
              onClick={() => handleMenuClick("/ScheduleManagement/schedule")}
            >
              -전체 일정
            </StyledSidebarItem>
            <StyledSidebarItem
              onClick={() => handleMenuClick("/ScheduleManagement/register")}
            >
              -일정 등록
            </StyledSidebarItem>
          </SubMenu>
        </Menu>

        <Logout>
          <MdLogout size="20" />
          <p>로그아웃</p>
        </Logout>
      </SidebarParent>
    </>
  );
};

export default Sidebar;
