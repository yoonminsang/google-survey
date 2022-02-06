import { ISurvey, ISurveyHeader, TSurvey, TSurveyType } from '@/types/survey';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface IChangeHeader {
//   key: 'title' | 'description';
//   value: string;
// }

// interface IChangeSurveyItem {
//   id: number;
//   dataIndex: number;
//   data: string;
// }

interface IState extends ISurvey {
  header: ISurveyHeader;
}

const initialState: IState = {
  header: { title: '', description: '' },
  surveys: [
    {
      id: 1,
      type: 'multiple',
      title: '',
      data: ['옵션 1'],
      isNeccessary: false,
    },
  ],
  selected: null,
};

// TODO: 사가 적용할지 생각
const slice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    changeHeader: (state, action: PayloadAction<{ key: 'title' | 'description'; value: string }>) => {
      const { key, value } = action.payload;
      state.header[key] = value;
    },
    changeSurveyTitle: (state, action: PayloadAction<{ idIndex: number; value: string }>) => {
      const { idIndex, value } = action.payload;
      state.surveys[idIndex].title = value;
    },
    changeSurveyItem: (
      state,
      action: PayloadAction<{
        idIndex: number;
        dataIndex: number;
        value: string;
      }>,
    ) => {
      const { idIndex, dataIndex, value } = action.payload;
      state.surveys[idIndex].data[dataIndex] = value;
    },
    addSurvey: (state, action: PayloadAction<TSurvey>) => {
      state.surveys.push(action.payload);
    },
    addSurveyItem: (state, action: PayloadAction<{ idIndex: number; nextSurveyItem: string }>) => {
      const { idIndex, nextSurveyItem } = action.payload;
      const { data } = state.surveys[idIndex];
      data.push(nextSurveyItem);
    },
    chagneSurveyType: (state, action: PayloadAction<{ idIndex: number; type: TSurveyType }>) => {
      const { idIndex, type } = action.payload;
      state.surveys[idIndex].data = ['옵션 1'];
      state.surveys[idIndex].type = type;
    },
    selectSurvey: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },
    // TODO: necessary 적용
    chagneSurveyNeccessary: (state, action: PayloadAction<number>) => {
      const idIndex = action.payload;
      state.surveys[idIndex].isNeccessary = !state.surveys[idIndex].isNeccessary;
    },
    // TODO: delete, copy
    preloadSurvey: (state, action) => state,
  },
});

const { actions, reducer: surveyReducer } = slice;
const {
  changeHeader,
  changeSurveyTitle,
  addSurvey,
  addSurveyItem,
  changeSurveyItem,
  chagneSurveyNeccessary,
  selectSurvey,
  preloadSurvey,
  chagneSurveyType,
} = actions;

export {
  surveyReducer,
  changeHeader,
  changeSurveyTitle,
  addSurvey,
  addSurveyItem,
  changeSurveyItem,
  chagneSurveyNeccessary,
  selectSurvey,
  preloadSurvey,
  chagneSurveyType,
};