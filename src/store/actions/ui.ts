import { action } from 'typesafe-actions';
import { IS_LOADING } from './actionsTypes';

export const isLoading = (bool: boolean) => action(IS_LOADING, bool);