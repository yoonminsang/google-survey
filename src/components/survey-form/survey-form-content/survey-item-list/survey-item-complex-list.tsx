import React from 'react';
import styled from 'styled-components';
import { Input } from '@mui/material';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import SurveyItemListWrapper from '../../styled/survey-item-list-wrapper';

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
  onChangeSurveyItem: (e: React.ChangeEvent, id: number, dataIndex: number) => void;
  id: number;
  onAddSurveyItem: (id: number) => void;
}

const SurveyItemComplexList: React.FC<IProps> = ({
  type,
  data,
  isSelected,
  onChangeSurveyItem,
  id,
  onAddSurveyItem,
}) => {
  const Icon = type === 'multiple' ? RadioIcon : CheckBoxIcon;
  return (
    <SurveyItemListWrapper isSelected={isSelected}>
      {data.map((str, dataIndex) => (
        <ListWrapper key={dataIndex}>
          <DrapWrapper></DrapWrapper>
          {Icon}
          <CustomInput value={str} onChange={(e: React.ChangeEvent) => onChangeSurveyItem(e, id, dataIndex)} />
        </ListWrapper>
      ))}
      <ListWrapper>
        <DrapWrapper></DrapWrapper>
        {Icon}
        {/* TODO: 기타추가, 스타일, 클릭이벤트 옵션추가에만 */}
        <div
          style={{ height: '32px', width: '612px', display: 'flex', alignItems: 'center' }}
          onClick={() => onAddSurveyItem(id)}
        >
          옵션 추가 또는 기타추가
        </div>
      </ListWrapper>
    </SurveyItemListWrapper>
  );
};

export default SurveyItemComplexList;
