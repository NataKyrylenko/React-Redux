import { createAppSlice } from "store/createAppSlice";
import { FeedbackStateSlice } from "./types";
import { create } from "domain";
import { PayloadAction } from "@reduxjs/toolkit";

const feedbackInitialState: FeedbackStateSlice = {
    countLike: 0,
    countDislike: 0
}

export const feedbackSlice = createAppSlice({
   name: 'FEEDBACK',
   initialState: feedbackInitialState,
   reducers: create => ({
        addLike: create.reducer((state: FeedbackStateSlice) => {
            state.countLike = state.countLike + 1
        }),
        addDislike: create.reducer((state: FeedbackStateSlice) => {
            state.countDislike = state.countDislike + 1
        }),
        resetAll: create.reducer((state: FeedbackStateSlice) => {
            state.countLike = 0;
            state.countDislike = 0;
            
        }),  
      
   }),
   selectors: {
    countLike: (state: FeedbackStateSlice) => state.countLike,
    countDislike: (state: FeedbackStateSlice) => state.countDislike

   }

})

export const feedbackSliceActions = feedbackSlice.actions;
export const feedbackSliceSelectors = feedbackSlice.selectors; 