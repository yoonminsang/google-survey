import React from 'react';
import styled from 'styled-components';
import { Input } from '@mui/material';
import SurveyItemListWrapper from '../../styled/survey-item-list-wrapper';

const DrapWrapper = styled.div`
  width: 24px;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownWrapper = styled.div`
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

interface IProps {
  data: string[];
  isSelected: boolean;
  onChangeSurveyItem: (e: React.ChangeEvent, id: number, dataIndex: number) => void;
  id: number;
  onAddSurveyItem: (id: number) => void;
}

const SurveyItemDropdownList: React.FC<IProps> = ({ data, isSelected, onChangeSurveyItem, id, onAddSurveyItem }) => {
  return (
    <SurveyItemListWrapper isSelected={isSelected}>
      {data.map((str, dataIndex) => (
        <ListWrapper key={str}>
          <DrapWrapper></DrapWrapper>
          <DropdownWrapper>{dataIndex + 1}</DropdownWrapper>
          <CustomInput value={str} onChange={(e: React.ChangeEvent) => onChangeSurveyItem(e, id, dataIndex)} />
        </ListWrapper>
      ))}
      <ListWrapper>
        <DrapWrapper></DrapWrapper>
        <DropdownWrapper>{data.length + 1}</DropdownWrapper>
        {/* TODO: 스타일, 클릭이벤트 옵션추가에만 */}
        <div
          style={{ height: '32px', width: '612px', display: 'flex', alignItems: 'center' }}
          onClick={() => onAddSurveyItem(id)}
        >
          옵션 추가
        </div>
      </ListWrapper>
    </SurveyItemListWrapper>
  );
};

export default SurveyItemDropdownList;
