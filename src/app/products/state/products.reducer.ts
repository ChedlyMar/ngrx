import { createAction, on, createReducer,  } from '@ngrx/store';
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

export const productsReducer = createReducer<ProductState>(
    initialValue,
    on (createAction('[Product] Toggle Product Code'), (state: ProductState) =>{
        return{
            ...state,
            showProductCode: ! state.showProductCode
        };
    })
);
