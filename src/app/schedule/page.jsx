"use client";
import React from "react";
import styled from "styled-components";
import Schedule from "./Schedule";

function page(props) {
  return (
    <div>
      <Title>Schedule 페이지</Title>
      <Schedule />
    </div>
  );
}

export default page;

const Title = styled.h1`
  color: blue;
  font-size: 30px;
`;
