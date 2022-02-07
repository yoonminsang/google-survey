import React, { useCallback } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SurveyForm from '@/components/survey-form';
import styled from 'styled-components';
import Preload from '@/components/preload';

const QUESTION = 'question';
const PRELOAD = 'preload';
const ANSWER = 'answer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabListWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
`;

const TabPanelWrapper = styled.div`
  background-color: #f0ebf8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const MainPage: React.FC = () => {
  const [value, setValue] = React.useState(QUESTION);
  const handleChange = useCallback((e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    location.hash = (e.target as HTMLElement).dataset.hash as string;
  }, []);

  return (
    <Wrapper>
      <TabContext value={value}>
        <TabListWrapper>
          <TabList onChange={handleChange} aria-label="survey">
            <Tab label="질문" value={QUESTION} data-hash={QUESTION} />
            <Tab label="미리보기" value={PRELOAD} data-hash={PRELOAD} />
            <Tab label="응답" value={ANSWER} data-hash={ANSWER} />
          </TabList>
        </TabListWrapper>
        <TabPanelWrapper>
          <TabPanel value={QUESTION} sx={{ padding: '0px' }}>
            <SurveyForm />
          </TabPanel>
          <TabPanel value={PRELOAD} sx={{ padding: '0px' }}>
            <Preload />
          </TabPanel>
          <TabPanel value={ANSWER} sx={{ padding: '0px' }}>
            응답 페이지
          </TabPanel>
        </TabPanelWrapper>
      </TabContext>
    </Wrapper>
  );
};

export default MainPage;
