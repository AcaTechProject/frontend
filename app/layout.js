"use client";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar.jsx";
import Nav from "./components/Nav";
import styled from "styled-components";
import StyledComponentsRegistry from "./lib/register";
import { RecoilRoot } from "recoil";

const inter = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');`;

const Container = styled.div`
display: flex,
flex-direction:column
`;
// metadata를 컴포넌트 밖으로 이동시켜서 따로 export
const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideSidebar = pathname === "/Login" || pathname === "/Join";
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <RecoilRoot>
            {!hideSidebar && <Sidebar />}
            <Container>
              <Nav />
              <div style={{ flex: 1, marginLeft: 248 }}>{children}</div>
            </Container>
          </RecoilRoot>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
