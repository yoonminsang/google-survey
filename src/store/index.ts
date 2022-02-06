import { combineReducers } from 'redux';
import { surveyReducer } from './survey';

const rootReducer = combineReducers({
  survey: surveyReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
