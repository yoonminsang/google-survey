import { combineReducers } from 'redux';
import { surveyReducer } from './survey';
import { preloadReducer } from './preload';
import { answerReducer } from './answer';

const rootReducer = combineReducers({
  survey: surveyReducer,
  preload: preloadReducer,
  answer: answerReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
