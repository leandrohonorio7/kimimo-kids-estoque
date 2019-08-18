import {createAction, props} from '@ngrx/store';
import {Produto} from '../../model/produto.model';

export const updateProdutoList = createAction(
  '[Product] Update product list',
  props<{produtos: Produto[]}>()
);

export const selectProduto = createAction(
  '[Product] Select product',
  props<{produto: Produto}>()
);

export const unselectProduto = createAction(
  '[Product] Unselect product',
);

export const createProduto = createAction(
  '[Product] Create product',
  props<{produto: Produto}>()
);

export const updateProduto = createAction(
  '[Product] Update product',
  props<{produto: Produto}>()
);

export const deleteProduto = createAction(
  '[Product] Delete product',
  props<{id: string}>()
);



