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
  padding: 0 0px 50px 10px;
  font-size: 19px;
  color: navy;
`;
const Menu = styled.div`
  margin-top: 10px;
`;
const List = styled.div`
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
const Btn = styled.button`
  border: 0;
  background: rgba(236, 234, 254, 0.47);
  font-size: 17px;
`;

const StyledSidebarItem = styled.li`
  margin: 10px;
  cursor: pointer;
  list-style: none;
`;

const First = styled.div`
  display: flex;
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
  padding: 60px 0 0 60px;
  align-items: center;
  gap: 10px;
  display: flex;
`;
const SubMenu = styled.ul`
  padding: 0 0 0 80px;
`;

const menuData = [
  {
    icon: MdPerson,
    title: "원생 관리",
    route: "/login",
    subItems: [
      { title: "출결 관리", route: "/AcademyManagement/attendance" },
      {
        title: "학생 관리",
        route: "/AcademyManagement/StudentManagement/acamember",
      },
      {
        title: "수강생 관리",
        route: "/AcademyManagement/StudentManagement/acamember",
      },

      {
        title: "신규 상담",
        route: "/AcademyManagement/StudentManagement/counsel",
      },
    ],
  },
  {
    icon: MdCalendarMonth,
    title: "일정 관리",
    route: "/login",
    subItems: [
      { title: "전체 일정", route: "/ScheduleManagement/schedule" },
      { title: "일정 등록", route: "/ScheduleManagement/register" },
    ],
  },
  // Add more menu items as needed
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [view, setView] = useState(false);

  const handleMenuClick = (route) => {
    router.push(route);
    setSidebarOpen(false); // 메뉴 클릭 시 사이드바가 자동으로 닫히도록 설정
  };

  const handleDrop = () => {
    setView(!view);
  };
  return (
    <>
      <SidebarParent>
        <Logo>
          <img
            src="/logo.png"
            alt="logo"
            width={45}
            height={45}
            style={{ borderRadius: "80px" }}
          ></img>

          <Title>AcaTech</Title>
        </Logo>

        <Menu>
          <MainMenu>
            <MdPerson size="25" />
            <Link
              href={menuData[0].route}
              active={router.pathname === menuData[0].route}
              onClick={() => handleMenuClick(menuData[0].route)}
            >
              {menuData[0].title}
            </Link>
            <Btn onClick={handleDrop}>{view ? "⌄" : "^"}</Btn>
          </MainMenu>
          {view && (
            <SubMenu>
              {menuData[0].subItems.map((subItem, subIndex) => (
                <StyledSidebarItem
                  key={subIndex}
                  onClick={() => handleMenuClick(subItem.route)}
                >
                  -{subItem.title}
                </StyledSidebarItem>
              ))}
            </SubMenu>
          )}

          <MainMenu>
            <MdCalendarMonth size="25" />
            <Link
              href={menuData[1].route}
              active={router.pathname === menuData[1].route}
              onClick={() => handleMenuClick(menuData[1].route)}
            >
              {menuData[1].title}
            </Link>
            <Btn onClick={handleDrop}>{view ? "⌄" : "^"}</Btn>
          </MainMenu>
          {view && menuData[1].subItems.length > 0 && (
            <SubMenu>
              {menuData[1].subItems.map((subItem, subIndex) => (
                <StyledSidebarItem
                  key={subIndex}
                  onClick={() => handleMenuClick(subItem.route)}
                >
                  -{subItem.title}
                </StyledSidebarItem>
              ))}
            </SubMenu>
          )}

          {/* Add more main menu items here if needed */}
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
