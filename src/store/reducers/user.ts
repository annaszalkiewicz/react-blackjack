import { ActionType } from 'typesafe-actions';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import * as userActions from '../actions/user';
import { SET_USER, IS_LOGGED_IN } from '../actions/actionsTypes';

export type UserAction = ActionType<typeof userActions>;

interface UserState {
	nickname: string;
	isLoggedIn: boolean;
}

const initialState = {
	nickname: '',
	isLoggedIn: false
}

export const useTypedSelector: TypedUseSelectorHook<UserState> = useSelector;

const user = (state: UserState = initialState, action: UserAction) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				nickname: action.payload
			};

		case IS_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload
			}

		default:
			return state;
	}
};

export default user;