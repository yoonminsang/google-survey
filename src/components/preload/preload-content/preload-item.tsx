import SurveyFormItmeWrapper from '@/components/survey-form/styled/sruvey-form-item-wrapper';
import { usePreload } from '@/hooks/use-preload';
import { IPreloadCheckbox, IPreloadDropdown, IPreloadMultiple, IPreloadSimple, TPreload } from '@/types/preload';
import { TSurvey, TSurveyType } from '@/types/survey';
import { SelectChangeEvent } from '@mui/material';
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
  font-weight: bold;
`;

const getItem = (
  id: number,
  type: TSurveyType,
  data: string[],
  etc: boolean,
  preload: TPreload[],
  index: number,
  onChangeAnswerStr: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
    index: number,
  ) => void,
  onChangeEtcAnswer: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void,
  onChangeCheckBox: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void,
) => {
  switch (type) {
    case 'short':
    case 'long':
      return (
        <PreloadItemSimple
          key={id}
          type={type}
          preloadData={preload[index] as IPreloadSimple}
          index={index}
          onChangeAnswerStr={onChangeAnswerStr}
        />
      );
    case 'multiple':
      return (
        <PreloadItemMultiple
          data={data}
          etc={etc}
          preloadData={preload[index] as IPreloadMultiple}
          index={index}
          onChangeAnswerStr={onChangeAnswerStr}
          onChangeEtcAnswer={onChangeEtcAnswer}
        />
      );
    case 'checkbox':
      return (
        <PreloadItemCheckbox
          id={id}
          data={data}
          etc={etc}
          preloadData={preload[index] as IPreloadCheckbox}
          index={index}
          onChangeAnswerStr={onChangeAnswerStr}
          onChangeEtcAnswer={onChangeEtcAnswer}
          onChangeCheckBox={onChangeCheckBox}
        />
      );
    case 'dropdown':
      return (
        <PreloadItemDropdown
          data={data}
          preloadData={preload[index] as IPreloadDropdown}
          index={index}
          onChangeAnswerStr={onChangeAnswerStr}
        />
      );
  }
};

const PreloadItem: React.FC<IProps> = ({ survey, index }) => {
  const { id, type, title, data, isNeccessary, etc } = survey;
  const { preload, onChangeAnswerStr, onChangeEtcAnswer, onChangeCheckBox } = usePreload();
  return (
    <SurveyFormItmeWrapper isMargin isPadding>
      <Title>
        {title} {isNeccessary && <Neccessary>*</Neccessary>}
      </Title>
      {getItem(id, type, data, etc, preload, index, onChangeAnswerStr, onChangeEtcAnswer, onChangeCheckBox)}
    </SurveyFormItmeWrapper>
  );
};

export default PreloadItem;
