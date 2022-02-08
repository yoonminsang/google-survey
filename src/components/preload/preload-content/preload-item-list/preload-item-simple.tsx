import { TPreload } from '@/types/preload';
import { Input } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  id: number;
  type: 'short' | 'long';
  preload: TPreload[];
  index: number;
  onChangeAnswerStr: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
}

const PreloadItemSimple: React.FC<IProps> = ({ id, type, preload, index, onChangeAnswerStr }) => {
  const width = type === 'short' ? '395px' : '590px';
  const tag = type === 'short' ? 'input' : 'textarea';
  const { answer } = preload[index];
  return (
    <div>
      <Input sx={{ width: width }} inputComponent={tag} value={answer} onChange={(e) => onChangeAnswerStr(e, index)} />
    </div>
  );
};

export default PreloadItemSimple;
