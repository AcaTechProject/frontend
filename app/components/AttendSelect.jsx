import React from "react";
import styled from "styled-components";

const SelectContainer = styled.select`
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 14px;
  width: 152px;
  height: 44px;
`;

const Option = styled.option`
  font-size: 14px;
`;

const AttendSelect = ({ options, onChange }) => {
  return (
    <SelectContainer onChange={onChange}>
      {options.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectContainer>
  );
};

export default AttendSelect;
