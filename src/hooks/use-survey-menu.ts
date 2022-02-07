import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { chagneSurveyNeccessary } from '@/store/survey';
import { findSurveyId } from '@/utils';

export const useSurveyMenu = () => {
  const dispatch = useDispatch();
  const surveys = useSelector((state: RootState) => state.survey.surveys);
  const onChangeSurveyNeccessary = (id: number) => {
    const idIndex = findSurveyId(surveys, id);
    dispatch({ type: chagneSurveyNeccessary.type, payload: idIndex });
  };
  // TODO: DELETE, COPY
  return { onChangeSurveyNeccessary };
};
