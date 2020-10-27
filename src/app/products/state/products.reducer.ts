import { createAction, on, createReducer } from '@ngrx/store';


export const productsReducer = createReducer(
    { showProductCode: true },
    on (createAction('[Product] Toggle Product Code'), state =>{
        return{
            ...state,
            showProductCode: ! state.showProductCode
        };
    })
);