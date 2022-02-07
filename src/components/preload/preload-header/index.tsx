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

const Border = styled.div`
  border-top: 1px solid #dadce0;
  margin: 0 -1px;
`;

const Neccessary = styled.div`
  color: #d93025;
`;

const PreloadHeader = () => {
  const { title, description } = useSelector((state: RootState) => state.survey.header);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Border />
      <Neccessary>* 필수항목</Neccessary>
    </Wrapper>
  );
};

export default PreloadHeader;
