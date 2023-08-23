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
  const [grade, setGrade] = useState("");

  const handleChange = (event) => {
    setGrade(event.target.value);
  };

  return (
    <>
      <Select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </>
  );
}
