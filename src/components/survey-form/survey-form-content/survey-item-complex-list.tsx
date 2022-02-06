import React from 'react';
import styled from 'styled-components';
import { Input } from '@mui/material';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import SurveyItemListWrapper from '../common/survey-item-list-wrapper';

const DrapWrapper = styled.div`
  width: 24px;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const CustomInput = styled(Input)`
  width: 612px;
`;

const RadioIcon = (
  <IconWrapper>
    <RadioButtonUncheckedRoundedIcon />
  </IconWrapper>
);
const CheckBoxIcon = (
  <IconWrapper>
    <CheckBoxOutlineBlankRoundedIcon />
  </IconWrapper>
);

interface IProps {
  type: 'multiple' | 'checkbox';
  data: string[];
  isSelected: boolean;
}

const SurveyItemComplexList: React.FC<IProps> = ({ type, data, isSelected }) => {
  const Icon = type === 'multiple' ? RadioIcon : CheckBoxIcon;
  return (
    <SurveyItemListWrapper isSelected={isSelected}>
      {data.map((str) => (
        <ListWrapper key={str}>
          <DrapWrapper></DrapWrapper>
          {Icon}
          <CustomInput value={str} />
        </ListWrapper>
      ))}
      <ListWrapper>
        <DrapWrapper></DrapWrapper>
        {Icon}
        <div style={{ height: '32px', width: '612px', display: 'flex', alignItems: 'center' }}>
          옵션 추가 또는 기타추가
        </div>
      </ListWrapper>
    </SurveyItemListWrapper>
  );
};

export default SurveyItemComplexList;
