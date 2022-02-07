import React from 'react';
import SurveyFormItmeWrapper from '@/components/survey-form/styled/sruvey-form-item-wrapper';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Wrapper = styled(SurveyFormItmeWrapper)`
  border-top: 10px solid rgb(103, 58, 183);
  > * {
    margin: 0 24px;
    margin-top: 20px;
  }
  > *:last-child {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  height: 48px;
`;

const Description = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const PreloadHeader = () => {
  const { title, description } = useSelector((state: RootState) => state.survey.header);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default PreloadHeader;
