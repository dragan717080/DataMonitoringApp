import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import navbarPortalReducer from './slices/navbarPortalSlice';
import { NavbarPortalState } from "@/app/interfaces/redux";

const store = configureStore({
  reducer: {
    navbarPortal: navbarPortalReducer,
  },
});

export interface RootState {
  navbarPortal: NavbarPortalState,
};

export type AppDispatch = typeof store.dispatch;
//export const useDispatch = () => useDispatch<AppDispatch>();

export default store;
