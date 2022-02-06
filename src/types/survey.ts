export type TSurveyType = 'short' | 'long' | 'multiple' | 'checkbox' | 'dropdown';
export type TSurvey = { id: number; type: TSurveyType; title: string; data: string[]; isNeccessary: boolean };
export interface ISurvey {
  surveys: TSurvey[];
  selected: null | number;
}
export interface ISurveyHeader {
  title: string;
  description: string;
}
