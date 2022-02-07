import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { changeHeader } from '@/store/survey';

export const useSurveyHeader = () => {
  const dispatch = useDispatch();
  const header = useSelector((state: RootState) => state.survey.header);
  const onChange = (e: React.ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement | HTMLTextAreaElement;
    dispatch({ type: changeHeader.type, payload: { key: name, value } });
  };
  return { header, onChange };
};
