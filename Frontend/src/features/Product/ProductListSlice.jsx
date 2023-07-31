import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductById, fetchProducts, fetchProductsByFilter,fetchCategories,fetchBrands} from './ProductListApi';

//GET
export const fetchAllProducts = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllProductByIdAsync  = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
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

//GET
export const fetchAllBrandsAsync = createAsyncThunk(
  'product/fetchAllBrands',
  async () => {
    const response = await fetchBrands();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

//GET
export const fetchAllCategoriesAsync = createAsyncThunk(
  'product/fetchAllCategories',
  async () => {
    const response = await fetchCategories();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


 export const productSlice = createSlice({
  name: 'productSlice',
  initialState:{
    products: [],
    brands: [],
    categories: [],
    status: 'idle',
    totalItems: 0,
    selectedProduct:null
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
      .addCase(fetchAllProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchAllBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchAllCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
  },
});

// export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.app.products;
export const selectAllCategories = (state) => state.app.categories;
export const selectAllBrands = (state) => state.app.brands;
export const selectTotalItems = (state) => state.app.totalItems;
export const selectProductById = (state) => state.app.selectedProduct;


export default productSlice.reducer;