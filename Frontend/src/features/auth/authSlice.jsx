import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser, updateUser } from './authApi';

//GET
export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userdata) => {
    const response = await createUser(userdata);
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


export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    const response = await updateUser(update);
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
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
  },
});

// export const { increment } = productSlice.actions;

export const selectLoggedInuser = (state) => state.auth.loggedInUser;
export const selecterror = (state) => state.auth.error;

export default authreducer.reducer;