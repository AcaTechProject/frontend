// import styled from "styled-components";
import { useState } from "react";
import styled from "styled-components";
const Select = ({ style, options, value, onChange }) => {
  //   const selectList = ["naver.com", "google.co.kr", "daum.net"];

  return (
    <>
      <select
        onChange={onChange}
        value={value}
        style={{
          width: "120px",
          height: "30px",
          fontSize: "14px",
          border: "1px solid #d3d2d2",
          borderRadius: "5px",
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
