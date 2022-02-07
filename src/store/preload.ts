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
  },
});

const { actions, reducer: preloadReducer } = slice;
const { init } = actions;

export { preloadReducer, init };
