import { useRouter } from "next/navigation";
import styled, { css } from "styled-components";
import { useState } from "react";
//import { MdLogout } from "react-icons/md";
import { Menu, SubMenu, MenuItem, Sidebar } from "react-pro-sidebar";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

//css
const SidebarParent = styled.div`
  margin: 1px 4px 0 0;
  position: fixed;
  box-shadow: 4px 0 0.5px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(236, 234, 254, 0.47);
  height: 100%;
  width: 248px;
  z-index: 3;
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
const Body = styled.div`
  margin-top: 20px;
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

const StyledMenuItem = styled(MenuItem)`
  color: black;

  ${({ active }) =>
    active &&
    css`
      color: #3629b7;
      font-weight: bold;
    `}
`;

//메뉴 data 배열

const sidebar = () => {
  const router = useRouter();

  const [selectedMenu, setSelectedMenu] = useState(null);

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

        {/* 메뉴 시작 */}
        <Body>
          <Sidebar>
            <Menu>
              <MenuItem style={{ marginTop: "50px" }}></MenuItem>
              <div style={{ padding: "20px" }}>
                <SubMenu
                  label="원생관리"
                  icon={<AccountCircleRoundedIcon />}
                  style={{ fontSize: "20px" }}
                >
                  <StyledMenuItem
                    active={selectedMenu === "출결관리"}
                    onClick={() => {
                      setSelectedMenu("출결관리");
                      router.push("/AcademyManagement/attendance");
                    }}
                  >
                    출결관리
                  </StyledMenuItem>
                  <SubMenu label="학생 관리">
                    <StyledMenuItem
                      active={selectedMenu === "수강생 관리"}
                      onClick={() => {
                        setSelectedMenu("수강생 관리");
                        router.push(
                          "/AcademyManagement/StudentManagement/acamember"
                        );
                      }}
                    >
                      수강생 관리
                    </StyledMenuItem>
                    <StyledMenuItem
                      active={selectedMenu === "상담 관리"}
                      onClick={() => {
                        setSelectedMenu("상담 관리");
                        router.push(
                          "/AcademyManagement/StudentManagement/counsel"
                        );
                      }}
                    >
                      신규 상담
                    </StyledMenuItem>
                  </SubMenu>
                </SubMenu>
                <br />
                <br />
                <SubMenu
                  label="일정 관리"
                  icon={<CalendarMonthIcon />}
                  style={{ fontSize: "20px" }}
                  active={selectedMenu === "일정 관리"}
                  onClick={() => {
                    setSelectedMenu("일정 관리");
                    router.push("/ScheduleManagement/schedule");
                  }}
                >
                  <StyledMenuItem
                    active={selectedMenu === "일정 등록"}
                    onClick={() => {
                      setSelectedMenu("일정 등록");
                      router.push("/ScheduleManagement/register");
                    }}
                  >
                    일정 등록
                  </StyledMenuItem>
                  <StyledMenuItem
                    active={selectedMenu === "전체 일정"}
                    onClick={() => {
                      setSelectedMenu("전체 일정");
                      router.push("/ScheduleManagement/schedule");
                    }}
                  >
                    전체 일정
                  </StyledMenuItem>
                </SubMenu>
              </div>
            </Menu>
          </Sidebar>
        </Body>
        <Logout>
          {/* <MdLogout size="20" /> */}
          <p>로그아웃</p>
        </Logout>
      </SidebarParent>
    </>
  );
};

export default sidebar;
