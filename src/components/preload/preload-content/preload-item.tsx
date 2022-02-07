import SurveyFormItmeWrapper from '@/components/survey-form/styled/sruvey-form-item-wrapper';
import { usePreload } from '@/hooks/use-preload';
import { TPreload } from '@/types/preload';
import { TSurvey, TSurveyType } from '@/types/survey';
import React from 'react';
import styled from 'styled-components';
import PreloadItemCheckbox from './preload-item-list/preload-item-checkbox';
import PreloadItemDropdown from './preload-item-list/preload-item-dropdown';
import PreloadItemMultiple from './preload-item-list/preload-item-multiple';
import PreloadItemSimple from './preload-item-list/preload-item-simple';

interface IProps {
  survey: TSurvey;
  index: number;
}

const Title = styled.div`
  margin-bottom: 16px;
`;

const Neccessary = styled.span`
  color: #d93025;
`;

// TODO: id 필요없을듯
const getItem = (id: number, type: TSurveyType, data: string[], etc: boolean, preload: TPreload[], index: number) => {
  switch (type) {
    case 'short':
    case 'long':
      return <PreloadItemSimple key={id} id={id} type={type} preload={preload} index={index} />;
    case 'multiple':
      return <PreloadItemMultiple id={id} data={data} etc={etc} />;
    case 'checkbox':
      return <PreloadItemCheckbox id={id} data={data} etc={etc} />;
    case 'dropdown':
      return <PreloadItemDropdown id={id} data={data} />;
  }
};

const PreloadItem: React.FC<IProps> = ({ survey, index }) => {
  const { id, type, title, data, isNeccessary, etc } = survey;
  const { preload } = usePreload();
  return (
    <SurveyFormItmeWrapper isMargin isPadding>
      <Title>
        {title} {isNeccessary && <Neccessary>*</Neccessary>}
      </Title>
      {getItem(id, type, data, etc, preload, index)}
    </SurveyFormItmeWrapper>
  );
};

export default PreloadItem;
