import React from 'react';
import styled from 'styled-components';
import SurveyFormContent from './survey-form-content';
import SurveyFormHeader from './survey-form-header';
import SurveyFormSidebar from './survey-form-sidebar';

const Form = styled.form`
  width: 770px;
  position: relative;
`;

const SurveyForm: React.FC = () => {
  return (
    <Form>
      <SurveyFormHeader />
      <SurveyFormContent />
      <SurveyFormSidebar />
    </Form>
  );
};

export default SurveyForm;
