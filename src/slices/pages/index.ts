import { createSlice } from '@reduxjs/toolkit';

export enum PageActions {
    PROFILE = "Profile",
    HOMEPAGE = "Homepage",
    BOOSTS = "Boosts",
    ROSTER = "Roster",
    BANK = "Bank",
};

interface StateType {
    activePage: PageActions;
};


const pagesSlice = createSlice({
    name: "pages",
    initialState: {
        activePage: "Homepage"
    } as StateType,
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload
        }
    }
})

export const {
    setActivePage,
} = pagesSlice.actions

export default pagesSlice.reducer