import { ActionType } from 'typesafe-actions';

import * as userActions from '../actions/user';
import { SET_USER } from '../actions/actionsTypes';

export type UserAction = ActionType<typeof userActions>;

interface UserState {
	nickname: string;
	isLoggedIn: boolean;
}

const initialState = {
	nickname: '',
	isLoggedIn: false
}

const user = (state: UserState = initialState, action: UserAction) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				nickname: action.payload
			};

		default:
			return state;
	}
};

export default user;