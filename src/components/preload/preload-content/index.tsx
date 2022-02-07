import { RootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PreloadItem from './preload-item';

const Wrapper = styled.div``;

const PreloadContent = () => {
  const surveys = useSelector((state: RootState) => state.survey.surveys);
  return (
    <Wrapper>
      {surveys.map((survey) => {
        const { id } = survey;
        return <PreloadItem key={id} survey={survey} />;
      })}
    </Wrapper>
  );
};

export default PreloadContent;
