import React from 'react';
import styled from 'styled-components';
import { Input } from '@mui/material';
import SurveyFormItmeWrapper from '../sruvey-form-item-wrapper';

const Wrapper = styled(SurveyFormItmeWrapper)`
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

interface IProps {
  title: string;
  description: string;
  onChange: () => void;
}

const SurveyFormHeader: React.FC<IProps> = ({ title, description, onChange }) => {
  return (
    <Wrapper>
      <Title value={title} name="title" onChange={onChange} placeholder="설문지 제목" />
      <Description
        value={description}
        name="description"
        onChange={onChange}
        placeholder="설문지 설명"
        inputComponent="textarea"
      />
    </Wrapper>
  );
};

export default SurveyFormHeader;
