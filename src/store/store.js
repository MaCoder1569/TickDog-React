import { createSlice, configureStore } from "@reduxjs/toolkit";

export const examSlice = createSlice({
    name: "examSlice",
    initialState: {
        items:["compitem1", "compitem2"]
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
