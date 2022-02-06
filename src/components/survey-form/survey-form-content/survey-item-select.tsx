import React, { useState } from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { TSurveyType } from '@/types/survey';

const Wrapper = styled(FormControl)`
  width: 210px;
  &.blind {
    opacity: 0;
    user-select: none;
    pointer-events: none;
  }
`;

interface IProps {
  isSelected: boolean;
}
const SurveyItemSelect: React.FC<IProps> = ({ isSelected }) => {
  const [age, setAge] = useState<TSurveyType>('short');
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Wrapper className={!isSelected ? 'blind' : ''}>
      <InputLabel id="select-label">타입</InputLabel>
      <Select labelId="select-label" value={age} label="type" onChange={handleChange}>
        <MenuItem value="short">단답형</MenuItem>
        <MenuItem value="long">장문형</MenuItem>
        <MenuItem value="multiple">객관식</MenuItem>
        <MenuItem value="chekcbox">체크박스</MenuItem>
        <MenuItem value="dropdown">드롭다운</MenuItem>
      </Select>
    </Wrapper>
  );
};

export default SurveyItemSelect;
