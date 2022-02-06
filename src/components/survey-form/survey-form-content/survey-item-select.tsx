import React from 'react';
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
  id: number;
  type: TSurveyType;
  isSelected: boolean;
  onChangeSurveyType: (id: number, type: TSurveyType) => void;
}
const SurveyItemSelect: React.FC<IProps> = ({ id, type, isSelected, onChangeSurveyType }) => {
  return (
    <Wrapper className={!isSelected ? 'blind' : ''}>
      <InputLabel id="select-label">타입</InputLabel>
      <Select
        labelId="select-label"
        value={type}
        label="type"
        onChange={(e) => onChangeSurveyType(id, e.target.value as TSurveyType)}
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

export default SurveyItemSelect;
