import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "@src/app/redux/reducers/appConfigReducer";
export default configureStore({
  reducer: { appConfig: appConfigReducer },
});

