import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import navbarPortalReducer from './slices/navbarPortalSlice';
import expandableReducer from './slices/expandableSlice';
import { NavbarPortalState, ExpandableState } from "@/app/interfaces/redux";

const store = configureStore({
  reducer: {
    navbarPortal: navbarPortalReducer,
    expandable: expandableReducer,
  },
});

export interface RootState {
  navbarPortal: NavbarPortalState,
  expandable: ExpandableState,
};

export type AppDispatch = typeof store.dispatch;
//export const useDispatch = () => useDispatch<AppDispatch>();

export default store;
