import { IPreload, TPreload } from '@/types/preload';
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
  },
});

const { actions, reducer: preloadReducer } = slice;
const { init, changeAnswerStr } = actions;

export { preloadReducer, init, changeAnswerStr };
