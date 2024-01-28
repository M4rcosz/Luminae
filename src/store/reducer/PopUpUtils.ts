import { createSlice } from "@reduxjs/toolkit";

const initialState = <{
    status: boolean,
    message: string
}>{
        status: false,
        message: "Sucesso!"
    }

const popUpUtilsSlice = createSlice({
    name: "PopUpUtils",
    initialState,
    reducers: {
        activePopUp: (state, { payload }) => {
            state.status = true;
            state.message = payload;
        },
        desactivePopUp: state => void (state.status = false)
    }
})

export const {
    activePopUp,
    desactivePopUp
} = popUpUtilsSlice.actions;

export const popUpUtilsSliceReducer = popUpUtilsSlice.reducer;