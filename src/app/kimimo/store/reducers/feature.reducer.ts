import {ProdutosStatus, reducerProduto} from './produtos.reduce';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface KimimoState {
  produtos: ProdutosStatus;
}

export const produtoReducer: ActionReducerMap<KimimoState> = {
  produtos: reducerProduto
};

export const getProdutoState = createFeatureSelector<KimimoState>(
  'produto'
);
