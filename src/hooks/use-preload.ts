import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { changeAnswerStr, init } from '@/store/preload';
import { SelectChangeEvent } from '@mui/material';

export const usePreload = () => {
  const dispatch = useDispatch();
  const { surveys } = useSelector((state: RootState) => state.survey);
  const { preload } = useSelector((state: RootState) => state.preload);

  const onInit = () => {
    const nextPreload = surveys.map(({ id, type, title, isNeccessary, etc }) => {
      switch (type) {
        case 'short':
        case 'long':
        case 'dropdown':
          return { id, type, title, answer: '', isNeccessary };
        case 'multiple':
          return { id, type, title, answer: '', isNeccessary, isEtc: etc, etcAnswer: '' };
        case 'checkbox':
          return { id, type, title, answer: [], isNeccessary, isEtc: etc, etcAnswer: '' };
      }
    });
    dispatch({ type: init.type, payload: nextPreload });
  };
  const onChangeAnswerStr = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
    index: number,
  ) => {
    const answer = e.target.value;
    dispatch({ type: changeAnswerStr.type, payload: { index, answer } });
  };
  const onChangeAnswerStrByClick = (e: SelectChangeEvent) => {
    console.log(e.target.value);
  };

  return {
    preload,
    onInit,
    onChangeAnswerStr,
    onChangeAnswerStrByClick,
  };
};
