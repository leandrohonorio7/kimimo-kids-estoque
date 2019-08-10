import {createAction, props} from '@ngrx/store';

export const navigationTo = createAction(
  `[App] Navegate to.`,
  props<{commands: string[]}>()
);


