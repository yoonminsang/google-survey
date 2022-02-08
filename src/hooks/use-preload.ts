import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';
import { RootState } from '@/store';
import { changeAnswerStr, changeCheckbox, changeEtcAnswer } from '@/store/preload';
import { SelectChangeEvent } from '@mui/material';
import { IPreloadCheckbox } from '@/types/preload';

export const usePreload = () => {
  const dispatch = useDispatch();
  const { surveys } = useSelector((state: RootState) => state.survey);
  const { preload } = useSelector((state: RootState) => state.preload);

  const onChangeAnswerStr = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
    index: number,
  ) => {
    const answer = e.target.value;
    dispatch({ type: changeAnswerStr.type, payload: { index, answer } });
  };
  const onChangeEtcAnswer = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const etcAnswer = e.target.value;
    dispatch({ type: changeEtcAnswer.type, payload: { index, etcAnswer } });
  };
  const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const checkArrIndex = +e.target.value;
    const nextCheckArr = produce((preload[index] as IPreloadCheckbox).checkArr, (draft) => {
      draft[checkArrIndex] = !draft[checkArrIndex];
    });
    const nextAnswer: string[] = [];
    surveys[index].data.forEach((str, i) => {
      if (nextCheckArr[i]) nextAnswer.push(str);
    });
    if (nextAnswer[nextAnswer.length - 1]) nextAnswer.push('기타');
    dispatch({ type: changeCheckbox.type, payload: { index, nextCheckArr, nextAnswer } });
  };

  return {
    preload,
    onChangeAnswerStr,
    onChangeEtcAnswer,
    onChangeCheckBox,
  };
};
