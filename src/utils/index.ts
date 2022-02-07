import { TSurvey } from '@/types/survey';

export const findSurveyId = (surveys: TSurvey[], id: number) => {
  const idIndex = surveys.findIndex((survey) => survey.id === id);
  if (idIndex === -1) {
    console.error('addSurveyItem id not found');
  }
  return idIndex;
};
