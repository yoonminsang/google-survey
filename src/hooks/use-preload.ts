import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { changeAnswerStr, changeEtcAnswer, init } from '@/store/preload';
import { SelectChangeEvent } from '@mui/material';

export const usePreload = () => {
  const dispatch = useDispatch();
  const { surveys } = useSelector((state: RootState) => state.survey);
  const { preload } = useSelector((state: RootState) => state.preload);

  const onInit = () => {
    const nextPreload = surveys.map(({ id, data, type, title, isNeccessary, etc }) => {
      switch (type) {
        case 'short':
        case 'long':
        case 'dropdown':
          return { id, type, title, answer: '', isNeccessary };
        case 'multiple':
          return { id, type, title, answer: '', isNeccessary, etcAnswer: '' };
        case 'checkbox':
          return {
            id,
            type,
            title,
            checkArr: Array(data.length).fill(false),
            answer: [],
            isNeccessary,
            etcAnswer: '',
          };
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
  const onChangeEtcAnswer = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const etcAnswer = e.target.value;
    console.log('onchagne answer etc', etcAnswer, index);
    dispatch({ type: changeEtcAnswer.type, payload: { index, etcAnswer } });
  };

  return {
    preload,
    onInit,
    onChangeAnswerStr,
    onChangeEtcAnswer,
  };
};
