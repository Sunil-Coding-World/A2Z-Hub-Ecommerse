import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsByFilter} from './ProductListApi';

//GET
export const fetchAllProducts = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


//FILTER
export const fetchAllProductsByFilter = createAsyncThunk(
  'product/fetchAllProductsByFilter',
  async (filter,pagination) => {
    const response = await fetchProductsByFilter(filter,pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


 export const productSlice = createSlice({
  name: 'productSlice',
  initialState:{
    products: [],
    status: 'idle',
    totalItems:0,
  },
  // reducers: {
  //   increment: (state) => {
  //     state.value += 1;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
       .addCase(fetchAllProductsByFilter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFilter.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
  },
});

// export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.app.products;
export const selectTotalItems = (state) => state.app.totalItems;

export default productSlice.reducer;