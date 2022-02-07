interface IPreloadCommon {
  id: number;
  title: string;
  isNeccessary: boolean;
}
export interface IPreloadSimple extends IPreloadCommon {
  type: 'short' | 'long';
  answer: string;
}
export interface IPreloadMultiple extends IPreloadCommon {
  type: 'multiple';
  answer: string;
  isEtc: boolean;
  etcAnswer: string;
}
export interface IPreloadCheckbox extends IPreloadCommon {
  type: 'checkbox';
  answer: string[];
  isEtc: boolean;
  etcAnswer: string;
}
export interface IPreloadDropdown extends IPreloadCommon {
  type: 'dropdown';
  answer: string;
}
export type TPreload = IPreloadSimple | IPreloadMultiple | IPreloadCheckbox | IPreloadDropdown;
export interface IPreload {
  preload: TPreload[];
}
