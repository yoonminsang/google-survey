import { IPreloadSimple } from '@/types/preload';
import { Input } from '@mui/material';
import React from 'react';

interface IProps {
  type: 'short' | 'long';
  preloadData: IPreloadSimple;
  index: number;
  onChangeAnswerStr: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
}

const PreloadItemSimple: React.FC<IProps> = ({ type, preloadData, index, onChangeAnswerStr }) => {
  const width = type === 'short' ? '395px' : '590px';
  const tag = type === 'short' ? 'input' : 'textarea';
  const { answer } = preloadData;
  return (
    <div>
      <Input sx={{ width: width }} inputComponent={tag} value={answer} onChange={(e) => onChangeAnswerStr(e, index)} />
    </div>
  );
};

export default PreloadItemSimple;
