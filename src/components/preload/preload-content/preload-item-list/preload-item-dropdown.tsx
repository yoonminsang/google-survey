import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import styled from 'styled-components';
import { TPreload } from '@/types/preload';

interface IProps {
  id: number;
  data: string[];
  preload: TPreload[];
  index: number;
  onChangeAnswerStr: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
    index: number,
  ) => void;
}

const Wrapper = styled(FormControl)`
  width: 176px;
`;

const PreloadItemDropdown: React.FC<IProps> = ({ id, data, preload, index, onChangeAnswerStr }) => {
  const answer = preload[index].answer as string;
  return (
    <Wrapper>
      <InputLabel id="select-label">타입</InputLabel>
      <Select
        labelId="select-label"
        value={answer}
        label="type"
        onChange={(e: SelectChangeEvent<string>) => onChangeAnswerStr(e, index)}
      >
        {data.map((str, index) => (
          <MenuItem key={index} value={str}>
            {str}
          </MenuItem>
        ))}
      </Select>
    </Wrapper>
  );
};

export default PreloadItemDropdown;
