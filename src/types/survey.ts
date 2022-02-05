export type TSurveyType = 'short' | 'long' | 'multiple' | 'checkbox' | 'dropdown';
export type TSurvey = { type: TSurveyType; title: string; data: string[] };
export interface ISurveys {
  surveys: TSurvey[];
  selected: null | number;
}
