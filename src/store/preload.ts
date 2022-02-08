import { IPreload, IPreloadCheckbox, IPreloadMultiple, TPreload } from '@/types/preload';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IPreload = {
  preload: [],
};

const slice = createSlice({
  name: 'preload',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<TPreload[]>) => {
      state.preload = action.payload;
    },
    changeAnswerStr: (state, action: PayloadAction<{ index: number; answer: string }>) => {
      const { index, answer } = action.payload;
      state.preload[index].answer = answer;
    },
    changeEtcAnswer: (state, action: PayloadAction<{ index: number; etcAnswer: string }>) => {
      const { index, etcAnswer } = action.payload;
      (state.preload[index] as IPreloadMultiple | IPreloadCheckbox).etcAnswer = etcAnswer;
    },
    changeCheckbox: (
      state,
      action: PayloadAction<{ index: number; nextCheckArr: boolean[]; nextAnswer: string[] }>,
    ) => {
      const { index, nextCheckArr, nextAnswer } = action.payload;
      (state.preload[index] as IPreloadCheckbox).checkArr = nextCheckArr;
      state.preload[index].answer = nextAnswer;
    },
  },
});

const { actions, reducer: preloadReducer } = slice;
const { init, changeAnswerStr, changeEtcAnswer, changeCheckbox } = actions;

export { preloadReducer, init, changeAnswerStr, changeEtcAnswer, changeCheckbox };
