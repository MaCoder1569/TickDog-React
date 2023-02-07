import { createSlice, configureStore } from "@reduxjs/toolkit";

export const examSlice = createSlice({
    name: "examSlice",
    initialState: {
        items:["comp item1", "comp item2"]
    },
    reducers: {
        changeitems: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const store = configureStore({
    reducer: {
        examReducer: examSlice.reducer
    },
});
