import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  font-weight: 700;

  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  ${(props) =>
    props.$large &&
    css`
      width: 106px;
      height: 41px;
      font-weight: 700;
      font-size: 14px;
    `}

  ${(props) =>
    props.$medium &&
    css`
      width: 95px;
      height: 35px;

      font-weight: 800;
      font-size: 14px;
    `}

    ${(props) =>
    props.$small &&
    css`
      width: 68px;
      height: 23px;
      font-weight: 400;
      font-size: 9px;
    `}

    ${(props) =>
    props.$primary &&
    css`
      background-color: #6956e5;
      color: #ffffff;
    `}

    ${(props) =>
    props.$secondary &&
    css`
      border: 2px solid #8146ff;
      background-color: #ffffff;
      color: #8146ff;
    `}

    ${(props) =>
    props.$tertiary &&
    css`
      background-color: #eceafe;
      color: #6956e5;
    `}

    ${(props) =>
    props.$disabled &&
    css`
      background-color: #aaaaaa;
      color: #ffffff;
      cursor: none;
    `};
`;

export default Button;
