import { createSlice } from '@reduxjs/toolkit';

interface StateType {
    value: number;
};

export enum CounterActions {
    INCREMENT = 1,
    DECREMENT = -1
};

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    } as StateType,
    reducers: {
        setCounter: (state, action) => {
            state.value += action.payload
        }
    }
})

export const {
    setCounter,
  } = counterSlice.actions


export const selectCounter = (state: any): number => state.counter.value
export default counterSlice.reducer