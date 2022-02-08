import { IAnswer } from '@/types/answer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  answers: IAnswer[][];
}

const initialState: IState = {
  answers: [],
};

const slice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IAnswer[]>) => {
      state.answers.push(action.payload);
      alert('제출되었습니다');
    },
  },
});

const { actions, reducer: answerReducer } = slice;
const { addAnswer } = actions;

export { answerReducer, addAnswer };
