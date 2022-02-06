import React from 'react';
import styled from 'styled-components';

const SurveyItemListWrapper = styled.div<{ isSelected: boolean }>`
  margin-bottom: ${(props) => (props.isSelected ? '55px' : '30px')};
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 5px;
  font-size: 14px;
`;

export default SurveyItemListWrapper;
