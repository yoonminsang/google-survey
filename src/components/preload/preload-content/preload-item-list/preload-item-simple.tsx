import { TPreload } from '@/types/preload';
import { Input } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  id: number;
  type: 'short' | 'long';
  preload: TPreload[];
  index: number;
}

const PreloadItemSimple: React.FC<IProps> = ({ id, type, preload, index }) => {
  const width = type === 'short' ? '395px' : '590px';
  const tag = type === 'short' ? 'input' : 'textarea';
  const { answer } = preload[index];
  return (
    <div>
      <Input sx={{ width: width }} inputComponent={tag} value={answer} />
    </div>
  );
};

export default PreloadItemSimple;
