import { createAppSlice } from "store/createAppSlice";
import { activityRandomizerSliceState } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

const activityRandomizerInitialState: activityRandomizerSliceState = {
    data: [],
    status: 'default',
    error: undefined
}

export const activityRandomizerSlice = createAppSlice({
    name: 'ACTIVITYRANDOMIZER',
    initialState:activityRandomizerInitialState,
    reducers: create => ({
        getActivityRandomizer: create.asyncThunk(async(arg, thunkApi) => {
            const response = await fetch(' https://www.boredapi.com/api/activity')
            const result = await response.json();
            console.log(result);

            if (!response.ok){
                thunkApi.rejectWithValue(result)
            }else {
                return result
            }
        }, {
            pending: (state: activityRandomizerSliceState) => {
                state.status = 'loading'
                state.error = undefined
            },
            fulfilled: (state: activityRandomizerSliceState, action: any) => {
                state.status = 'succes'
                state.data = [...state.data, {
                    id: action.payload?.id,
                    activitys: action.payload?.activity,
                    
                }]

            },
            rejected: (state: activityRandomizerSliceState, action: any) => {
                state.status = 'error'
                state.error = action.payload
                alert('Network error');

            } 
        }),
        deleteAllActivity: create.reducer(() => activityRandomizerInitialState),
    
        deleteActivity: create.reducer((state: activityRandomizerSliceState, action: PayloadAction<string>) => {
            state.data = state.data.filter((data) => data.id !== action.payload)
    
  }),   
    }),
    selectors:{
        activitys: (state) => state
    }
});

export const activityRandomizerSliceActions = activityRandomizerSlice.actions;
export const activityRandomizerSliceSelectors = activityRandomizerSlice.selectors;



