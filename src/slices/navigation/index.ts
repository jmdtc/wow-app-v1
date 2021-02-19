import { createSlice, createSelector, Action } from '@reduxjs/toolkit'

import { RootState } from "../../store/store"

export enum PageActions {
    PROFILE = "profile",
    HOMEPAGE = "homepage",
    BOOSTS = "boosts",
    ROSTER = "roster",
    BANK = "bank",
};

export enum BoostsTabsActions {
    DUNGEONS = "Dungeons",
    RAIDS = "Raids",
    ARENAS = "Arenas",
};

export enum RosterTabsActions {
    BOOSTERS = "Boosters",
    ADVERTISERS = "Advertisers",
    GUILDS = "Guilds",
};

export enum BankTabsActions {
    MM = "Balance MM+",
    TMM = "Gold TMM+",
    SERVERS = "Servers Balance",
};

interface StateType extends Record<string,any> {
    activePage: PageActions;
    boosts: {
        activeTab: BoostsTabsActions;
    };
    roster: {
        activeTab: RosterTabsActions;
    };
    bank: {
        activeTab: BankTabsActions;
    };
};

interface ActiveTabActionPayload extends Action {
    payload: {
        page: PageActions;
        value: BoostsTabsActions | RosterTabsActions | BankTabsActions;
    }
}

const pagesSlice = createSlice({
    name: "navigation",
    initialState: {
        activePage: PageActions.HOMEPAGE,
        boosts: {
            activeTab: BoostsTabsActions.DUNGEONS
        },
        roster: {
            activeTab: RosterTabsActions.BOOSTERS
        },
        bank: {
            activeTab: BankTabsActions.MM
        },
    } as StateType,
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload
        },
        setActiveTab: (state: StateType, action: ActiveTabActionPayload) => {
            state[action.payload.page] = {
                value: action.payload.value
            }
        }
    }
})

export const {
    setActivePage,
    setActiveTab
} = pagesSlice.actions

export const selectActivePage = function(state: RootState): PageActions {
    return state.navigation.activePage
}

export const selectActiveTabByPage = () =>
  createSelector(
    (_, name: string) => name,
    (state: RootState, name: string) => {
      return state.navigation[name]
    },
    (_, page) => {
      return page.activeTab
    }
  )

export default pagesSlice.reducer