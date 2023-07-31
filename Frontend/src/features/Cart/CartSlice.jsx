import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser } from './authApi';

//GET
export const AddtoCartas = createAsyncThunk(
  'user/createUser',
  async (item) => {
    const response = await createUser(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

//GET
export const checkUserAsync = createAsyncThunk(
  'user/checkUserAsync',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);





 export const authreducer = createSlice({
  name: 'user',
  initialState:{
    loggedInUser: null,
    status: 'idle',
    error:null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
  },
});

// export const { increment } = productSlice.actions;

export const selectLoggedInuser = (state) => state.auth.loggedInUser;
export const selecterror = (state) => state.auth.error;

export default authreducer.reducer;