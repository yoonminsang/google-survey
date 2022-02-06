import React from 'react';
import styled from 'styled-components';

const SurveyFormItmeWrapper = styled.div<{ isSelected?: boolean; isMargin?: boolean }>`
  margin-top: ${(props) => props.isMargin && '12px'};
  border: ${(props) => props.isSelected && '3px solid blue'};
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #dadce0;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
`;

export default SurveyFormItmeWrapper;
