import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../slice/userSlice'
import moviesSlice from '../slice/moviesSlice'
import gptSlice from '../slice/gptSlice'

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        gpt: gptSlice
    }
})

export default appStore