import { action } from 'typesafe-actions';

import { SET_USER, IS_LOGGED_IN, LOGIN } from './actionsTypes';

export const setUser = (name: string) => action(SET_USER, name);

export const login = () => action(LOGIN);

export const isLoggedIn = () => action(IS_LOGGED_IN);
