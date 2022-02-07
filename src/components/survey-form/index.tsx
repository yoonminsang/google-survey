import React from 'react';
import styled from 'styled-components';
import SurveyFormContent from './survey-form-content';
import SurveyFormHeader from './survey-form-header';
import SurveyFormSidebar from './survey-form-sidebar';

const Wrapper = styled.div`
  background-color: #f0ebf8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Form = styled.form`
  width: 770px;
  position: relative;
`;

const SurveyForm: React.FC = () => {
  return (
    <Wrapper>
      <Form>
        <SurveyFormHeader />
        <SurveyFormContent />
        <SurveyFormSidebar />
      </Form>
    </Wrapper>
  );
};

export default SurveyForm;
