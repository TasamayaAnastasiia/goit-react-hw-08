export const isRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLogin = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user.name;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;