import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Notification from '../models/Notification'

const initialUiState: Notification = {
    message: '',
    status: '',
    title: ''
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        setNotification: (state, action: PayloadAction<Notification>) => {
            const { message, title, status } = (action.payload)
            state.message = message
            state.title = title
            state.status = status
        },
        resetNotification: state => {
            state.message = ''
            state.title = ''
            state.status = ''
        }
    }
})

const store = configureStore({
    reducer: { ui: uiSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store


export const uiActions = uiSlice.actions
