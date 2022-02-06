import React from 'react';
import styled from 'styled-components';
import { FilledInput } from '@mui/material';
import SurveyFormItmeWrapper from '../styled/sruvey-form-item-wrapper';
import { TSurveyType } from '@/types/survey';
import SurveyItemMenu from './survey-item-menu';
import SurveyItemSelect from './survey-item-select';
import SurveyItemSimpleList from './survey-item-list/survey-item-simple-list';
import SurveyItemComplexList from './survey-item-list/survey-item-complex-list';
import SurveyItemDropdownList from './survey-item-list/survey-item-dropdown-list';

const Wrapper = styled(SurveyFormItmeWrapper)`
  margin-top: 12px;
`;

const DrapWrapper = styled.div`
  height: 24px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

const Title = styled(FilledInput)`
  width: 446px;
  background-color: transparent;
`;

interface IProps {
  id: number;
  type: TSurveyType;
  title: string;
  data: string[];
  isSelected: boolean;
  isNeccessary: boolean;
}

const getList = (type: TSurveyType, data: string[], isSelected: boolean) => {
  switch (type) {
    case 'short':
    case 'long':
      return <SurveyItemSimpleList type={type} data={data} isSelected={isSelected} />;
    case 'multiple':
    case 'checkbox':
      return <SurveyItemComplexList type={type} data={data} isSelected={isSelected} />;
    case 'dropdown':
      return <SurveyItemDropdownList data={data} isSelected={isSelected} />;
  }
};

const SurveyItem: React.FC<IProps> = ({ id, type, title, data, isSelected, isNeccessary }) => {
  return (
    <Wrapper>
      <DrapWrapper></DrapWrapper>
      <Flex>
        <Title inputComponent="textarea" value={title} readOnly={!isSelected} />
        <SurveyItemSelect isSelected={isSelected} />
      </Flex>
      {getList(type, data, isSelected)}
      {isSelected && <SurveyItemMenu id={id} isNeccessary={isNeccessary} />}
    </Wrapper>
  );
};

export default SurveyItem;
