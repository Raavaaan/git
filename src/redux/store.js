import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSloce/userSlice";

const Store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default Store;
