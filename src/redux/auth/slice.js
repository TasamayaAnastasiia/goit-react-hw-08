import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operation";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
          },
          token: null,
          isLoggedIn: false,
          isRefreshing: false,
          loader: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loader = false;
        })
        .addCase(register.pending, (state) => {
            state.loader = true;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loader = false;
        })
        .addCase(logOut.fulfilled, (state) => {
            state.user = {name: null, email: null};
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
          })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        });

    }
})
export const authReducer = authSlice.reducer;