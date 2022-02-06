import useInputs from '@/hooks/use-inputs';
import React from 'react';
import styled from 'styled-components';
import SurveyFormContent from './survey-form-content';
import SurveyFormHeader from './survey-form-header';

const Wrapper = styled.div`
  background-color: #f0ebf8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Form = styled.form`
  width: 800px;
`;

const SurveyForm: React.FC = () => {
  const [{ title, description }, onChange] = useInputs({ title: '제목 없는 설문지', description: '' });
  return (
    <Wrapper>
      <Form>
        <SurveyFormHeader title={title} description={description} onChange={onChange} />
        <SurveyFormContent />
      </Form>
    </Wrapper>
  );
};

export default SurveyForm;
