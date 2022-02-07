import { Input } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  id: number;
  type: 'short' | 'long';
}

const PreloadItemSimple: React.FC<IProps> = ({ id, type }) => {
  const inputWidth = type === 'short' ? '395px' : '590px';
  return (
    <div>
      <Input sx={{ width: inputWidth }} />
    </div>
  );
};

export default PreloadItemSimple;
