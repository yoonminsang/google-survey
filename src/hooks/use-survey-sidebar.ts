import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addSurvey } from '@/store/survey';

export const useSurveySidebar = () => {
  const dispatch = useDispatch();
  const surveys = useSelector((state: RootState) => state.survey.surveys);
  const onAddSurvey = () => {
    const maxId = surveys.length > 0 ? Math.max(...surveys.map((survey) => survey.id)) : 0;
    const nextSurvey = {
      id: maxId + 1,
      type: 'multiple',
      title: '',
      data: ['옵션 1'],
      isNeccessary: false,
    };
    dispatch({ type: addSurvey.type, payload: nextSurvey });
  };
  return { onAddSurvey };
};
