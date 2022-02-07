import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useScroll } from '@/hooks/use-scroll';
import SurveyFormItmeWrapper from '../styled/sruvey-form-item-wrapper';
import { useSurveySidebar } from '@/hooks/use-survey-sidebar';

const Wrapper = styled(SurveyFormItmeWrapper)`
  position: absolute;
  right: -70px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 50px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin: 10px 0;
  display: flex;
`;

const SurveyFormSidebar: React.FC = () => {
  const { scrollY } = useScroll();
  const { onAddSurvey } = useSurveySidebar();
  return (
    <Wrapper style={{ top: `${scrollY + 152}px` }}>
      <Button type="button" onClick={onAddSurvey}>
        <AddCircleOutlineIcon />
      </Button>
    </Wrapper>
  );
};

export default SurveyFormSidebar;
