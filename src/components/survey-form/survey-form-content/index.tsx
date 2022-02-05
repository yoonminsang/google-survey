import React from 'react';
import styled from 'styled-components';
import SurveyItem from './servey-item';
import { ISurveys } from '@/types/survey';

const Wrapper = styled.div``;

const SurveyFormContent: React.FC = () => {
  const mockState: ISurveys = {
    surveys: [
      { type: 'short', title: '짧은제목', data: ['단답형 텍스트'] },
      { type: 'long', title: '긴제목', data: ['장문형 텍스트'] },
      { type: 'multiple', title: '멀티플 질문', data: ['치킨', '피자'] },
      { type: 'checkbox', title: '체크박스 질문', data: ['체크1', '체크2'] },
      { type: 'dropdown', title: '드롭다운 질문', data: ['드롭다운1', '드롭다운2'] },
    ],
    selected: 1,
  };

  const { surveys, selected } = mockState;
  return (
    <Wrapper>
      {surveys.map((survey, index) => {
        const { type, title, data } = survey;
        return <SurveyItem key={index} type={type} title={title} data={data} isSelected={selected === index} />;
      })}
    </Wrapper>
  );
};

export default SurveyFormContent;
