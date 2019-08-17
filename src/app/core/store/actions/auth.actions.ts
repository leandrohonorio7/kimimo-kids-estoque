import {createAction, props} from '@ngrx/store';
import {UserInfo} from 'firebase';

export const singInEmail = createAction(
  '[Core - Auth] Sing in with email and password',
  props<{email: string, password: string}> ()
)
export const singInGoogle = createAction(
  '[Core - Auth] Sing in with google.'
);

export const updateUserInfo = createAction(
  '[Core - Auth] Update user info',
  props<{ user?: UserInfo }> ()
)

export const singOut = createAction(
  '[Core - Auth] SingOut',
)

export const signOutSucess = createAction(
  '[Core - Auth] SingOut in sucessfully',
)
