import { createSlice } from "@reduxjs/toolkit";
import { THEME } from "@src/app/common/constants";

interface AppConfigState {
  theme: any;
}

var defaultAppConfigState: AppConfigState = {
  theme: THEME.light,
};

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: defaultAppConfigState,
  reducers: {
    setTheme: (state: any, action: any) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appConfigSlice.actions;
export default appConfigSlice.reducer;
