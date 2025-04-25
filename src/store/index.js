import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../slice/userSlice'
import moviesSlice from '../slice/moviesSlice'

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
    }
})

export default appStore