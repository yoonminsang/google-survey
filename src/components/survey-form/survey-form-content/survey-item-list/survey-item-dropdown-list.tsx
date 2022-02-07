import React from 'react';
import styled from 'styled-components';
import { Input } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
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

const AddWrapper = styled.div`
  height: 32px;
  width: 612px;
  display: flex;
  align-items: center;
  span {
    margin-left: 6px;
  }
`;

const AddOption = styled.button`
  color: #70757a;
  &:hover {
    border-bottom: 1px solid #70757a;
  }
`;

const RemoveButton = styled.button``;

interface IProps {
  data: string[];
  isSelected: boolean;
  onChangeSurveyItem: (e: React.ChangeEvent, id: number, dataIndex: number) => void;
  id: number;
  onAddSurveyItem: (id: number) => void;
  onRemoveSurveyItem: (id: number, dataIndex: number) => void;
}

const SurveyItemDropdownList: React.FC<IProps> = ({
  data,
  isSelected,
  onChangeSurveyItem,
  id,
  onAddSurveyItem,
  onRemoveSurveyItem,
}) => {
  return (
    <SurveyItemListWrapper isSelected={isSelected}>
      {data.map((str, dataIndex) => (
        <ListWrapper key={dataIndex}>
          <DrapWrapper></DrapWrapper>
          <DropdownWrapper>{dataIndex + 1}</DropdownWrapper>
          <CustomInput value={str} onChange={(e: React.ChangeEvent) => onChangeSurveyItem(e, id, dataIndex)} />
          {isSelected && data.length > 1 && (
            <RemoveButton type="button" onClick={() => onRemoveSurveyItem(id, dataIndex)}>
              <ClearIcon />
            </RemoveButton>
          )}
        </ListWrapper>
      ))}
      <ListWrapper>
        <DrapWrapper></DrapWrapper>
        <DropdownWrapper>{data.length + 1}</DropdownWrapper>
        {/* TODO: 스타일, 클릭이벤트 옵션추가에만 */}
        <AddWrapper>
          <AddOption type="button" onClick={() => onAddSurveyItem(id)}>
            옵션 추가
          </AddOption>
        </AddWrapper>
      </ListWrapper>
    </SurveyItemListWrapper>
  );
};

export default SurveyItemDropdownList;
