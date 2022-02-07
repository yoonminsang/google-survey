import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';
import { RootState } from '@/store';
import { chagneSurveyNeccessary, copySurvey, removeSurvey } from '@/store/survey';
import { findSurveyId } from '@/utils';

export const useSurveyMenu = () => {
  const dispatch = useDispatch();
  const surveys = useSelector((state: RootState) => state.survey.surveys);
  const onChangeSurveyNeccessary = (id: number) => {
    const idIndex = findSurveyId(surveys, id);
    dispatch({ type: chagneSurveyNeccessary.type, payload: idIndex });
  };
  const onRemoveSurvey = (id: number) => {
    const idIndex = findSurveyId(surveys, id);
    dispatch({ type: removeSurvey.type, payload: idIndex });
  };
  const onCopySurvey = (id: number) => {
    const idIndex = findSurveyId(surveys, id);
    const maxId = Math.max(...surveys.map((survey) => survey.id));
    const nextSurvey = produce(surveys[idIndex], (draft) => {
      draft.id = maxId + 1;
    });
    dispatch({ type: copySurvey.type, payload: { idIndex, nextSurvey } });
  };
  return { onChangeSurveyNeccessary, onRemoveSurvey, onCopySurvey };
};
