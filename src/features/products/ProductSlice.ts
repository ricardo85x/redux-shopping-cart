import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { Product } from "../../app/api"

export interface ProductsState {
    products: { [id: string]: Product }
}

const initialState :ProductsState = {
    products: {}
}

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        receivedProducts(state, action: PayloadAction<Product[]>) {
            const products = action.payload
            products.forEach(product => {
                state.products[product.id] = product
            })
        }
    }
})


export const { receivedProducts } = ProductsSlice.actions
export default ProductsSlice.reducer

