import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TempEntry } from 'utils/types'

const DATA_STATUS = {
    loaded: {
        loaded: true,
        loading: false,
        error: false
    },
    loading: {
        loaded: false,
        loading: true,
        error: false
    },
    error: {
        loaded: false,
        loading: false,
        error: true
    },
}

interface DataStatus {
    loaded: boolean;
    loading: boolean;
    error: boolean;
}
// Define a type for the slice state
interface HouseTempState {
    data: TempEntry[],
    status: DataStatus
}

// Define the initial state using that type
const initialState: HouseTempState = {
    data: [],
    status: {
        loaded: false,
        loading: false,
        error: false
    }
}

export const houseTempSlice = createSlice({
    name: 'houseTemperature',
    initialState,
    reducers: {
        houseDataFetch: (state) => {
            state.status = DATA_STATUS.loading
        },
        houseDataLoaded: (state, action: PayloadAction<TempEntry[]>) => {
            state.status = DATA_STATUS.loaded;
            state.data = action.payload;
        },
        houseDataError: (state) => {
            state.status = DATA_STATUS.error
        },
    },
})

export const { houseDataFetch, houseDataLoaded, houseDataError } = houseTempSlice.actions;

export default houseTempSlice.reducer