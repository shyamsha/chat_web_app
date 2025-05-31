import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle Sidebar
    toggleSideBar(state) {
      state.sideBar.open = !state.sideBar.open;
    },
    updateSideBarType(state, action) {
      state.sideBar.type = action.payload.type;
    },
    updateTab(state, action) {
      state.tab = action.payload.tab;
    },
  },
});

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(appSlice.actions.toggleSideBar());
  };
}
export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(appSlice.actions.updateSideBarType({ type }));
  };
}

export const { toggleSideBar, updateSideBarType, updateTab } = appSlice.actions;

export default appSlice.reducer;
