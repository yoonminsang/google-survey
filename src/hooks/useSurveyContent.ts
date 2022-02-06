import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  addSurvey,
  addSurveyItem,
  chagneSurveyType,
  changeSurveyItem,
  changeSurveyTitle,
  selectSurvey,
} from '@/store/survey';
import { TSurveyType } from '@/types/survey';

export const useSurveyContent = () => {
  const dispatch = useDispatch();
  const surveys = useSelector((state: RootState) => state.survey.surveys);
  const selected = useSelector((state: RootState) => state.survey.selected);
  // TODO: usecallback??
  const findId = (id: number) => {
    const idIndex = surveys.findIndex((survey) => survey.id === id);
    if (idIndex === -1) {
      console.error('addSurveyItem id not found');
    }
    return idIndex;
  };

  const onChangeSurveyTitle = (e: React.ChangeEvent, id: number) => {
    const { value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const idIndex = findId(id);
    dispatch({ type: changeSurveyTitle.type, payload: { idIndex, value } });
  };
  const onChangeSurveyItem = (e: React.ChangeEvent, id: number, dataIndex: number) => {
    const { value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const idIndex = surveys.findIndex((survey) => survey.id === id);
    dispatch({ type: changeSurveyItem.type, payload: { idIndex, dataIndex, value } });
  };
  const onChangeSurveyType = (id: number, type: TSurveyType) => {
    const idIndex = findId(id);
    dispatch({ type: chagneSurveyType.type, payload: { idIndex, type } });
  };
  const onAddSurvey = () => {
    const maxId = Math.max(...surveys.map((survey) => survey.id));
    const nextSurvey = {
      id: maxId + 1,
      type: 'multiple',
      title: '',
      data: ['옵션 1'],
      isNeccessary: false,
    };
    dispatch({ type: addSurvey.type, payload: nextSurvey });
  };
  const onAddSurveyItem = (id: number) => {
    const idIndex = findId(id);
    const dataLength = surveys[idIndex].data.length;
    const nextSurveyItem = `옵션 ${dataLength + 1}`;
    dispatch({ type: addSurveyItem.type, payload: { idIndex, nextSurveyItem } });
  };
  const onSelectSurvey = (id: number) => {
    dispatch({ type: selectSurvey.type, payload: id });
  };

  return {
    surveys,
    selected,
    onChangeSurveyTitle,
    onChangeSurveyItem,
    onChangeSurveyType,
    onAddSurvey,
    onAddSurveyItem,
    onSelectSurvey,
  };
};
