import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { init } from '@/store/preload';

export const useAnswer = () => {
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
            checkArr: Array(data.length + 1).fill(false),
            answer: [],
            isNeccessary,
            etcAnswer: '',
          };
      }
    });
    dispatch({ type: init.type, payload: nextPreload });
  };

  return {
    onInit,
  };
};
