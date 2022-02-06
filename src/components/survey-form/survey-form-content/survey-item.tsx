import React, { useState } from 'react';
import styled from 'styled-components';
import { FilledInput, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SurveyFormItmeWrapper from '../sruvey-form-item-wrapper';
import { TSurveyType } from '@/types/survey';
import SurveyItemMenu from './survey-item-menu';
import SurveyItemSelect from './survey-item-select';

const Wrapper = styled(SurveyFormItmeWrapper)`
  margin-top: 12px;
`;

const DrapWrapper = styled.div`
  height: 24px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled(FilledInput)`
  width: 446px;
  background-color: transparent;
`;

const SelectWrapper = styled(FormControl)`
  width: 210px;
  &.blind {
    opacity: 0;
    user-select: none;
    pointer-events: none;
  }
`;

const Item = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

interface IProps {
  id: number;
  type: TSurveyType;
  title: string;
  data: string[];
  isSelected: boolean;
  isNeccessary: boolean;
}
const SurveyItem: React.FC<IProps> = ({ id, type, title, data, isSelected, isNeccessary }) => {
  return (
    <Wrapper>
      <DrapWrapper></DrapWrapper>
      <Item>
        <Flex>
          <Title inputComponent="textarea" value={title} readOnly={!isSelected} />
          <SurveyItemSelect isSelected={isSelected} />
        </Flex>
        {data}
      </Item>
      {isSelected && <SurveyItemMenu id={id} isNeccessary={isNeccessary} />}
    </Wrapper>
  );
};

export default SurveyItem;
