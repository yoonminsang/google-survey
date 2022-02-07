import React from 'react';
import styled from 'styled-components';
import SurveyItemListWrapper from '../../styled/survey-item-list-wrapper';

const ListWrapper = styled.div<{ isSelected: boolean; short: boolean }>`
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);
  padding-left: 10px;
  margin-left: 24px;
  padding-bottom: 10px;
  margin-bottom: ${(props) => (props.isSelected ? '0px' : '10px')};
  width: ${(props) => (props.short ? '360px' : '612px')};
  color: rgba(0, 0, 0, 0.38);
`;

interface IProps {
  type: 'short' | 'long';
  data: string[];
  isSelected: boolean;
}

const SurveyItemSimpleList: React.FC<IProps> = ({ type, isSelected }) => {
  const text = type === 'short' ? '단답형 텍스트' : '장문형 텍스트';
  return (
    <SurveyItemListWrapper isSelected={isSelected}>
      <ListWrapper isSelected={isSelected} short={type === 'short'}>
        {text}
      </ListWrapper>
    </SurveyItemListWrapper>
  );
};

export default SurveyItemSimpleList;
