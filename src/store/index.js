import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../slice/userSlice'
const appStore = configureStore({
    reducer: {
        user: userSlice
    }
})

export default appStore