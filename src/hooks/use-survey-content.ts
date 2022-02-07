import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  addSurveyEtc,
  addSurveyItem,
  chagneSurveyType,
  changeSurveyItem,
  changeSurveyTitle,
  removeSurveyEtc,
  removeSurveyItem,
  selectSurvey,
} from '@/store/survey';
import { TSurveyType } from '@/types/survey';
import { findSurveyId } from '@/utils';

export const useSurveyContent = () => {
  const dispatch = useDispatch();
  const surveys = useSelector((state: RootState) => state.survey.surveys);
  const selected = useSelector((state: RootState) => state.survey.selected);

  const onChangeSurveyTitle = (e: React.ChangeEvent, id: number) => {
    const { value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const idIndex = findSurveyId(surveys, id);
    dispatch({ type: changeSurveyTitle.type, payload: { idIndex, value } });
  };
  const onChangeSurveyItem = (e: React.ChangeEvent, id: number, dataIndex: number) => {
    const { value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const idIndex = surveys.findIndex((survey) => survey.id === id);
    dispatch({ type: changeSurveyItem.type, payload: { idIndex, dataIndex, value } });
  };
  const onChangeSurveyType = (id: number, type: TSurveyType) => {
    const idIndex = findSurveyId(surveys, id);
    dispatch({ type: chagneSurveyType.type, payload: { idIndex, type } });
  };
  const onAddSurveyItem = (id: number) => {
    const idIndex = findSurveyId(surveys, id);
    const dataLength = surveys[idIndex].data.length;
    const nextSurveyItem = `옵션 ${dataLength + 1}`;
    dispatch({ type: addSurveyItem.type, payload: { idIndex, nextSurveyItem } });
  };
  const onRemoveSurveyItem = (id: number, dataIndex: number) => {
    const idIndex = findSurveyId(surveys, id);
    dispatch({ type: removeSurveyItem.type, payload: { idIndex, dataIndex } });
  };
  const onAddSurveyEtc = (id: number) => {
    const idIndex = findSurveyId(surveys, id);
    dispatch({ type: addSurveyEtc.type, payload: idIndex });
  };
  const onRemoveSurveyEtc = (id: number) => {
    const idIndex = findSurveyId(surveys, id);
    dispatch({ type: removeSurveyEtc.type, payload: idIndex });
  };
  const onSelectSurvey = (id: number) => {
    if (id === selected) return;
    dispatch({ type: selectSurvey.type, payload: id });
  };

  return {
    surveys,
    selected,
    onChangeSurveyTitle,
    onChangeSurveyItem,
    onChangeSurveyType,
    onAddSurveyItem,
    onSelectSurvey,
    onRemoveSurveyItem,
    onAddSurveyEtc,
    onRemoveSurveyEtc,
  };
};
