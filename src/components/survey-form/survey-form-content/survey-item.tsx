import React from 'react';
import styled from 'styled-components';
import { FilledInput } from '@mui/material';
import SurveyFormItmeWrapper from '../styled/sruvey-form-item-wrapper';
import { TSurvey, TSurveyType } from '@/types/survey';
import SurveyItemMenu from './survey-item-menu';
import SurveyItemSelect from './survey-item-select';
import SurveyItemSimpleList from './survey-item-list/survey-item-simple-list';
import SurveyItemComplexList from './survey-item-list/survey-item-complex-list';
import SurveyItemDropdownList from './survey-item-list/survey-item-dropdown-list';

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
  survey: TSurvey;
  isSelected: boolean;
  onChangeSurveyTitle: (e: React.ChangeEvent, id: number) => void;
  onChangeSurveyItem: (e: React.ChangeEvent, id: number, dataIndex: number) => void;
  onChangeSurveyType: (id: number, type: TSurveyType) => void;
  onAddSurveyItem: (id: number) => void;
  onSelectSurvey: (id: number) => void;
  onRemoveSurveyItem: (id: number, dataIndex: number) => void;
  onAddSurveyEtc: (id: number) => void;
  onRemoveSurveyEtc: (id: number) => void;
}

const getList = (
  type: TSurveyType,
  data: string[],
  isSelected: boolean,
  onChangeSurveyItem: (e: React.ChangeEvent, id: number, dataIndex: number) => void,
  id: number,
  onAddSurveyItem: (id: number) => void,
  onRemoveSurveyItem: (id: number, dataIndex: number) => void,
  onAddSurveyEtc: (id: number) => void,
  onRemoveSurveyEtc: (id: number) => void,
  etc: boolean,
) => {
  switch (type) {
    case 'short':
    case 'long':
      return <SurveyItemSimpleList type={type} data={data} isSelected={isSelected} />;
    case 'multiple':
    case 'checkbox':
      return (
        <SurveyItemComplexList
          type={type}
          data={data}
          isSelected={isSelected}
          onChangeSurveyItem={onChangeSurveyItem}
          id={id}
          onAddSurveyItem={onAddSurveyItem}
          onRemoveSurveyItem={onRemoveSurveyItem}
          onAddSurveyEtc={onAddSurveyEtc}
          onRemoveSurveyEtc={onRemoveSurveyEtc}
          etc={etc}
        />
      );
    case 'dropdown':
      return (
        <SurveyItemDropdownList
          data={data}
          isSelected={isSelected}
          onChangeSurveyItem={onChangeSurveyItem}
          id={id}
          onAddSurveyItem={onAddSurveyItem}
          onRemoveSurveyItem={onRemoveSurveyItem}
        />
      );
  }
};

const SurveyItem: React.FC<IProps> = ({
  survey,
  isSelected,
  onChangeSurveyTitle,
  onChangeSurveyItem,
  onChangeSurveyType,
  onAddSurveyItem,
  onSelectSurvey,
  onRemoveSurveyItem,
  onAddSurveyEtc,
  onRemoveSurveyEtc,
}) => {
  const { id, type, title, data, isNeccessary, etc } = survey;
  return (
    <SurveyFormItmeWrapper isMargin isSelected={isSelected} onClick={() => onSelectSurvey(id)}>
      <DrapWrapper></DrapWrapper>
      <Flex>
        <Title
          inputComponent="textarea"
          value={title}
          placeholder="질문"
          onChange={(e) => onChangeSurveyTitle(e, id)}
        />
        <SurveyItemSelect id={id} isSelected={isSelected} type={type} onChangeSurveyType={onChangeSurveyType} />
      </Flex>
      {getList(
        type,
        data,
        isSelected,
        onChangeSurveyItem,
        id,
        onAddSurveyItem,
        onRemoveSurveyItem,
        onAddSurveyEtc,
        onRemoveSurveyEtc,
        etc,
      )}
      {isSelected && <SurveyItemMenu id={id} isNeccessary={isNeccessary} />}
    </SurveyFormItmeWrapper>
  );
};

export default SurveyItem;
