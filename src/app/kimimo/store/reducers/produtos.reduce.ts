import {Produto} from '../../model/produto.model';
import {Action, createReducer, on} from '@ngrx/store';
import {createProduto, deleteProduto, selectProduto, unselectProduto, updateProduto, updateProdutoList} from '../actions/produtos.actions';
import {createEntityAdapter, EntityState, Update} from '@ngrx/entity';

export  const produtoAdapter = createEntityAdapter<Produto>({
    sortComparer : (a: Produto, b: Produto) => a.name.localeCompare(b.name),
});

export interface ProdutosStatus extends EntityState<Produto> {
  produto?: Produto;
}

const pog = [
  {id: '1', name: 'roupa 91'},
  {id: '2', name: 'roupa 52'},
  {id: '3', name: 'roupa 3'},
];

const initailState = produtoAdapter.getInitialState();
// const initailState = produtoAdapter.addAll(pog, produtoAdapter.getInitialState());

const reducer = createReducer(
  initailState,
  on(updateProdutoList, (state, {produtos}) => produtoAdapter.addAll(produtos, state)),
  on(selectProduto, (state, {produto}) => ({...state, produto})),
  on(unselectProduto, updateProduto, (state: ProdutosStatus) => {
    const {produto, ...rest} = state;
    return rest;
  }),
  on(createProduto, (state, {produto}) => produtoAdapter.addOne(produto, state)),
  // on(updateProduto, (state, {produto}) => produtoAdapter.updateOne({id: produto.id, changes: produto}, state)),
  on(deleteProduto, (state, {id}) => produtoAdapter.removeOne(id, state)),
);

export function reducerProduto( state: ProdutosStatus, action: Action) {
  return reducer(state, action);
}

