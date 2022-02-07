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
      etc: false,
    },
  ],
  selected: null,
};

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
    addSurveyItem: (state, action: PayloadAction<{ idIndex: number; nextSurveyItem: string }>) => {
      const { idIndex, nextSurveyItem } = action.payload;
      const { data } = state.surveys[idIndex];
      data.push(nextSurveyItem);
    },
    removeSurveyItem: (state, action: PayloadAction<{ idIndex: number; dataIndex: number }>) => {
      const { idIndex, dataIndex } = action.payload;
      state.surveys[idIndex].data.splice(dataIndex, 1);
    },
    addSurveyEtc: (state, action: PayloadAction<number>) => {
      const idIndex = action.payload;
      state.surveys[idIndex].etc = true;
    },
    removeSurveyEtc: (state, action: PayloadAction<number>) => {
      const idIndex = action.payload;
      state.surveys[idIndex].etc = false;
    },
    chagneSurveyType: (state, action: PayloadAction<{ idIndex: number; type: TSurveyType }>) => {
      const { idIndex, type } = action.payload;
      state.surveys[idIndex].type = type;
    },
    selectSurvey: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },
    chagneSurveyNeccessary: (state, action: PayloadAction<number>) => {
      const idIndex = action.payload;
      state.surveys[idIndex].isNeccessary = !state.surveys[idIndex].isNeccessary;
    },
    addSurvey: (state, action: PayloadAction<TSurvey>) => {
      state.surveys.push(action.payload);
    },
    removeSurvey: (state, action: PayloadAction<number>) => {
      const idIndex = action.payload;
      state.surveys.splice(idIndex, 1);
      if (state.surveys.length === 0) state.selected = null;
      else if (idIndex === 0) state.selected = state.surveys[0].id;
      else state.selected = state.surveys[idIndex - 1].id;
    },
    copySurvey: (state, action: PayloadAction<{ idIndex: number; nextId: number; nextSurvey: TSurvey }>) => {
      const { idIndex, nextId, nextSurvey } = action.payload;
      state.surveys.splice(idIndex + 1, 0, nextSurvey);
      state.selected = nextId;
    },
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
  removeSurveyItem,
  removeSurvey,
  copySurvey,
  addSurveyEtc,
  removeSurveyEtc,
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
  removeSurveyItem,
  removeSurvey,
  copySurvey,
  addSurveyEtc,
  removeSurveyEtc,
};
