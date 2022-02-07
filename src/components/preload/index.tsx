import React from 'react';
import styled from 'styled-components';
import PreloadContent from './preload-content';
import PreloadHeader from './preload-header';

const Wrapper = styled.div`
  width: 770px;
`;

const Preload = () => {
  return (
    <Wrapper>
      <PreloadHeader />
      <PreloadContent />
    </Wrapper>
  );
};

export default Preload;
