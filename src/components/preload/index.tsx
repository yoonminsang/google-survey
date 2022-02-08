import { useAnswer } from '@/hooks/use-answer';
import { usePreloadInit } from '@/hooks/use-preload-init';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PreloadContent from './preload-content';
import PreloadHeader from './preload-header';

const Wrapper = styled.div`
  width: 770px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Preload = () => {
  const { onAddAnswer } = useAnswer();
  const { onInit } = usePreloadInit();
  return (
    <Wrapper>
      <PreloadHeader />
      <PreloadContent />
      <Flex>
        <Button variant="contained" type="button" onClick={onAddAnswer} sx={{ width: '76.5px' }}>
          제출
        </Button>
        <Button variant="text" type="button" onClick={onInit}>
          양식지우기
        </Button>
      </Flex>
    </Wrapper>
  );
};

export default Preload;
