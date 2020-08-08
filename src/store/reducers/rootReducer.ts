import { combineReducers } from 'redux';

import user from './user';
import ui from './ui';

export const rootReducer = combineReducers({
	user: user,
	ui: ui
});

export type RootState = ReturnType<typeof rootReducer>;
 

