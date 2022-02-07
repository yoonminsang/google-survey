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
      {surveys.map((survey, index) => {
        const { id } = survey;
        return <PreloadItem key={id} survey={survey} index={index} />;
      })}
    </Wrapper>
  );
};

export default PreloadContent;
