import React from 'react';
import { Input, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styled from 'styled-components';

interface IProps {
  id: number;
  data: string[];
}

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const Wrapper = styled(FormControl)`
  width: 176px;
`;

const PreloadItemDropdown: React.FC<IProps> = ({ id, data }) => {
  const [checked, setChecked] = React.useState([false, false, false]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = +event.target.value;
    setChecked(() => {
      const nextChecked = checked.slice();
      nextChecked[index] = event.target.checked;
      return nextChecked;
    });
  };

  return (
    <Wrapper>
      <InputLabel id="select-label">타입</InputLabel>
      <Select
        labelId="select-label"
        value="short"
        label="type"
        // onChange={}
      >
        <MenuItem value="short">단답형</MenuItem>
        <MenuItem value="long">장문형</MenuItem>
        <MenuItem value="multiple">객관식</MenuItem>
        <MenuItem value="checkbox">체크박스</MenuItem>
        <MenuItem value="dropdown">드롭다운</MenuItem>
      </Select>
    </Wrapper>
  );
};

export default PreloadItemDropdown;
