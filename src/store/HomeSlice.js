import {createSlice} from '@reduxjs/toolkit'

export const HomeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres: {}
    },
    reducers: {
        getApiConfiguaration: (state, action) =>{
            state.url = action.payload;
        },
        getGenres: (state, action) =>{
            state.genres = action.payload;
        }
    }
})

export const {getApiConfiguaration, getGenres} = HomeSlice.actions;
export default HomeSlice.reducer;