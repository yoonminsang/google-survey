import React from 'react';
import styled from 'styled-components';
import SurveyItem from './survey-item';
import { useSurveyContent } from '@/hooks/use-survey-content';

const Wrapper = styled.div``;

const SurveyFormContent: React.FC = () => {
  const {
    surveys,
    selected,
    onChangeSurveyTitle,
    onChangeSurveyItem,
    onChangeSurveyType,
    onAddSurveyItem,
    onSelectSurvey,
  } = useSurveyContent();
  return (
    <Wrapper>
      {surveys.map((survey) => {
        const { id, type, title, data } = survey;
        return (
          <SurveyItem
            key={id}
            id={id}
            type={type}
            title={title}
            data={data}
            isSelected={selected === id}
            onChangeSurveyTitle={onChangeSurveyTitle}
            onChangeSurveyItem={onChangeSurveyItem}
            onChangeSurveyType={onChangeSurveyType}
            onAddSurveyItem={onAddSurveyItem}
            onSelectSurvey={onSelectSurvey}
          />
        );
      })}
    </Wrapper>
  );
};

export default SurveyFormContent;
