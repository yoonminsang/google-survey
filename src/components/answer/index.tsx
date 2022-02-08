import { RootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PreloadHeader from '../preload/preload-header';
import SurveyFormItmeWrapper from '../survey-form/styled/sruvey-form-item-wrapper';

const Wrapper = styled.div`
  width: 770px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AnswerCount = styled.div``;

// TODO: 리팩토링
const Answer: React.FC = () => {
  const answers = useSelector((state: RootState) => state.answer.answers);
  const surveys = useSelector((state: RootState) => state.survey.surveys);
  const count: number[][] = [];
  let etcCount = 0;
  for (let i = 0; i < surveys.length; i++) {
    count.push(Array(surveys[i].data.length).fill(0));
  }
  surveys.forEach((survey, a) => {
    survey.data.forEach((str, b) => {
      for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < answers[i].length; j++) {
          if (answers[i][j].answer.includes(str)) count[a][b] += 1;
          else if (answers[i][j].answer.includes('etc')) etcCount++;
        }
      }
    });
  });
  if (answers.length === 0) return <div>제출된 설문지가 없습니다</div>;
  return (
    <Wrapper>
      <PreloadHeader />
      {surveys.map(({ id, title, data }, i) => {
        return (
          <SurveyFormItmeWrapper key={id} isMargin isPadding>
            <Title>{title}</Title>

            {data.map((str, j) => {
              return (
                <AnswerCount key={str}>
                  {str} {count[i][j]}개 제출
                </AnswerCount>
              );
            })}
            <div>기타 {etcCount}개 제출</div>
          </SurveyFormItmeWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Answer;
