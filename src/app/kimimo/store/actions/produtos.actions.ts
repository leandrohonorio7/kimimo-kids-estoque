import {createAction, props} from '@ngrx/store';
import {Produto} from '../../model/produto.model';

export const selectProduto = createAction(
  '[Produto] Select produto',
  props<{produto: Produto}>()
);

export const unselectProduto = createAction(
  '[Produto] Unselect produto',
);

export const createProduto = createAction(
  '[Produto] Create produto',
  props<{produto: Produto}>()
);

export const updateProduto = createAction(
  '[Produto] Update produto',
  props<{produto: Produto}>()
);

export const deleteProduto = createAction(
  '[Produto] Delete produto',
  props<{id: number}>()
);
