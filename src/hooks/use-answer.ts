import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { init } from '@/store/preload';
import { IPreloadCheckbox, IPreloadMultiple } from '@/types/preload';
import { addAnswer } from '@/store/answer';
import { IAnswer } from '@/types/answer';
import { usePreloadInit } from './use-preload-init';

// TODO: 리팩토링
export const useAnswer = () => {
  const { onInit } = usePreloadInit();
  const dispatch = useDispatch();
  const preload = useSelector((state: RootState) => state.preload.preload);

  const onAddAnswer = () => {
    const arr: IAnswer[] = [];
    for (let i = 0; i < preload.length; i++) {
      switch (preload[i].type) {
        case 'short':
        case 'long':
        case 'dropdown':
          if (preload[i].isNeccessary && preload[i].answer === '') {
            alert('필수항목을 입력해주세요');
            return;
          }
        case 'multiple':
        case 'checkbox':
          if (
            preload[i].answer.includes('기타') &&
            (preload[i] as IPreloadMultiple | IPreloadCheckbox).etcAnswer === ''
          ) {
            alert('기타항목을 입력해주세요');
            return;
          }
      }
      if (preload[i].answer.includes('기타')) {
        const { id, answer, etcAnswer } = preload[i] as IPreloadCheckbox;
        arr.push({ id, answer, etcAnswer });
      } else {
        const { id, answer } = preload[i] as IPreloadCheckbox;
        arr.push({ id, answer });
      }
    }
    dispatch({ type: addAnswer.type, payload: arr });
    onInit();
  };
  return {
    onAddAnswer,
  };
};
