import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducer/feature.reducer';

export const getAuthState = createSelector(
  getCoreState,
  state => state.auth
);

export const isAuthenticated = createSelector(
  getAuthState,
  state => !!state.user
);

export const getAuthentcatedUser = createSelector(
  getAuthState,
  state => state.user
);
