import React from 'react';
import Spinner from '../ui/Spinner/Spinner';
import { RootState } from '../../store/reducers/rootReducer';
import { useSelector } from 'react-redux';

const Game = () => {
  const ui = (state: RootState) => state.ui.isLoading;
  const pageIsLoading = useSelector(ui);
  return (
    <>
      {pageIsLoading && <Spinner />}
      {!pageIsLoading && <p>Game table</p>}
    </>
  )
}

export default Game;
