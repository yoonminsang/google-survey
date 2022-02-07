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
    onRemoveSurveyItem,
    onAddSurveyEtc,
    onRemoveSurveyEtc,
  } = useSurveyContent();
  return (
    <Wrapper>
      {surveys.map((survey) => {
        const { id } = survey;
        return (
          <SurveyItem
            key={id}
            survey={survey}
            isSelected={selected === id}
            onChangeSurveyTitle={onChangeSurveyTitle}
            onChangeSurveyItem={onChangeSurveyItem}
            onChangeSurveyType={onChangeSurveyType}
            onAddSurveyItem={onAddSurveyItem}
            onSelectSurvey={onSelectSurvey}
            onRemoveSurveyItem={onRemoveSurveyItem}
            onAddSurveyEtc={onAddSurveyEtc}
            onRemoveSurveyEtc={onRemoveSurveyEtc}
          />
        );
      })}
    </Wrapper>
  );
};

export default SurveyFormContent;
