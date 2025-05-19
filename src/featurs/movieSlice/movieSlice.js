import { createSlice } from "@reduxjs/toolkit"



const movieSlice = createSlice({
    name: 'movie',
    initialState: [
        { id: 1, Title: 'Terminator', Genre: 'action', Stock: 6, Rate: 2.5 },
        { id: 2, Title: 'Die Hard', Genre: 'action', Stock: 5, Rate: 2.5 },
        { id: 3, Title: 'Get Out', Genre: 'thriller', Stock: 8, Rate: 3.5 },
        { id: 4, Title: 'Trip to Italy', Genre: 'comedy', Stock: 7, Rate: 3.5 },
        { id: 5, Title: 'Airplane', Genre: 'comedy', Stock: 7, Rate: 3.5 },
    ],
    reducers: {
        handleDelete(state, action) {
            return state.filter(movie => movie.id !== action.payload)
        }
    }
})

export const { handleDelete } = movieSlice.actions

export default movieSlice