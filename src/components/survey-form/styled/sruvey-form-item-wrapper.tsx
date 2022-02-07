import React from 'react';
import styled from 'styled-components';

const SurveyFormItmeWrapper = styled.div<{ isSelected?: boolean; isMargin?: boolean; isPadding?: boolean }>`
  padding: ${(props) => props.isPadding && '24px'};
  margin-top: ${(props) => props.isMargin && '12px'};
  border-left: ${(props) => props.isSelected && '6px solid #4285f4 !important'};
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #dadce0;
  border-radius: 8px;
  background-color: #fff;
`;

export default SurveyFormItmeWrapper;
