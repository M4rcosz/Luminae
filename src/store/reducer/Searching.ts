import { createSlice } from "@reduxjs/toolkit";

const initialState = <{
    inputValue: string,
    categorySelected: string
}>{
        inputValue: "",
        categorySelected: "all categories"
    }

const searchingSlice = createSlice({
    name: "SearchingTasks",
    initialState,
    reducers: {
        setSearchValue: (state, { payload }) => {
            state.inputValue = payload;
        },
        setCategorySelected: (state, { payload }) => {
            if (payload !== "all categories") {
                state.categorySelected = payload;
            }
        }

    }
})

export const {
    setSearchValue,
    setCategorySelected
} = searchingSlice.actions;

export const searchingSliceReducer = searchingSlice.reducer;