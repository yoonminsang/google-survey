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

const SurveyItemSimpleList: React.FC<IProps> = ({ type, data, isSelected }) => {
  return (
    <SurveyItemListWrapper isSelected={isSelected}>
      <ListWrapper isSelected={isSelected} short={type === 'short'}>
        {data}
      </ListWrapper>
    </SurveyItemListWrapper>
  );
};

export default SurveyItemSimpleList;
