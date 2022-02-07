import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SurveyForm from '@/components/survey-form';
import styled from 'styled-components';

const QUESTION = 'question';
const PRELOAD = 'preload';
const ANSWER = 'answer';

const Wrapper = styled.div`
  background-color: #f0ebf8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const SurveyFormPage: React.FC = () => {
  const [value, setValue] = React.useState(QUESTION);
  const handleChange = useCallback((e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }, []);
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TabList onChange={handleChange} aria-label="survey">
            <Tab label="질문" value={QUESTION} onClick={() => (location.hash = '')} />
            <Tab label="미리보기" value={PRELOAD} onClick={() => (location.hash = PRELOAD)} />
            <Tab label="응답" value={ANSWER} onClick={() => (location.hash = ANSWER)} />
          </TabList>
        </Box>
        <Wrapper>
          <TabPanel value={QUESTION} sx={{ padding: '0px' }}>
            <SurveyForm />
          </TabPanel>
          <TabPanel value={PRELOAD}>미리보기 페이지</TabPanel>
          <TabPanel value={ANSWER}>응답 페이지</TabPanel>
        </Wrapper>
      </TabContext>
    </Box>
  );
};

export default SurveyFormPage;
