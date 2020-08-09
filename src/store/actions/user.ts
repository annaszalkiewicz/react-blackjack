import { action } from 'typesafe-actions';

import { SET_USER, IS_LOGGED_IN } from './actionsTypes';

export const setUser = (name: string) => action(SET_USER, name);

export const isLoggedIn = (bool: boolean) => action(IS_LOGGED_IN, bool);
