import { createAction, on, createReducer, createFeatureSelector, createSelector,  } from '@ngrx/store';
import * as appState from '../../state/app.state';
import { Product } from '../product';

export interface State extends appState.State{
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
}

const initialValue: ProductState = {
  showProductCode : false,
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const productsReducer = createReducer<ProductState>(
    initialValue,
    on (createAction('[Product] Toggle Product Code'), (state: ProductState) =>{
        return{
            ...state,
            showProductCode: ! state.showProductCode
        };
    })
);
