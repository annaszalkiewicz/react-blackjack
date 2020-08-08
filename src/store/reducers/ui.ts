import { ActionType } from 'typesafe-actions';

import * as uiActions from '../actions/ui';
import { IS_LOADING } from '../actions/actionsTypes';

export type UiAction = ActionType<typeof uiActions>;

interface UiState {
	isLoading: boolean;
}

const initialState = {
	isLoading: false
}

const ui = (state: UiState = initialState, action: UiAction) => {
	switch (action.type) {
		case IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			};

		default:
			return state;
	}
};

export default ui;