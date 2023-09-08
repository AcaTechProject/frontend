// export default Select;
import React, { useState } from "react";

import styled from "styled-components";

const Select = styled.select`
  width: 235px;
  height: 35px;
  border: 1px solid #d3d2d2;
  border-radius: 10px;
  margin: 10px 0 0 30px;
`;
export default function LongSelect({ value, onChange, options }) {
  return (
    <>
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </>
  );
}
