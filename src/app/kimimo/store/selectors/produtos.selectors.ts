import {createSelector} from '@ngrx/store';
import {produtoAdapter} from '../reducers/produtos.reduce';
import {getProdutoState} from '../reducers/feature.reducer';

export const getProdutosState = createSelector(
  getProdutoState,
  state => state.produtos
);

export  const  getAllProdutos = createSelector(
  getProdutosState,
  state => {
    return produtoAdapter.getSelectors().selectAll(state);
  }
);

export  const  getSelectProdutos = createSelector(
  getProdutosState,
  state => state.produto
  );


