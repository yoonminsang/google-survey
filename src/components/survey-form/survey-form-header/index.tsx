import React from 'react';
import styled from 'styled-components';
import { Input } from '@mui/material';
import SurveyFormItmeWrapper from '../styled/sruvey-form-item-wrapper';
import { useSurveyHeader } from '@/hooks/use-survey-header';

const Wrapper = styled(SurveyFormItmeWrapper)`
  border-top: 10px solid rgb(103, 58, 183);
  > div {
    margin: 0 24px;
    margin-top: 20px;
  }
  > div:last-child {
    margin-bottom: 20px;
  }
`;

const Title = styled(Input)`
  font-size: 32px;
  height: 48px;
`;

const Description = styled(Input)`
  font-size: 14px;
  margin-top: 10px;
`;

const SurveyFormHeader: React.FC = () => {
  const { header, onChange } = useSurveyHeader();
  return (
    <Wrapper>
      <Title value={header.title} name="title" onChange={onChange} placeholder="설문지 제목" />
      <Description
        value={header.description}
        name="description"
        onChange={onChange}
        placeholder="설문지 설명"
        inputComponent="textarea"
      />
    </Wrapper>
  );
};

export default SurveyFormHeader;
