import { combineReducers } from 'redux';
import { surveyReducer } from './survey';
import { preloadReducer } from './preload';

const rootReducer = combineReducers({
  survey: surveyReducer,
  preload: preloadReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
