export type TSurveyType = 'short' | 'long' | 'multiple' | 'checkbox' | 'dropdown';
export type TSurvey = { id: number; type: TSurveyType; title: string; data: string[]; isNeccessary: boolean };
export interface ISurveys {
  surveys: TSurvey[];
  selected: null | number;
}
