import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    bug:{},
    viewBug:false,
    editBug: true,
    createBug:false
}

const bugsSlice = createSlice({
    name:'bugs',
    initialState,
    reducers:{
        setBug: (state, action) => {
            state.bug = action.payload
        },
        setEditBug:(state, action) => {
            state.editBug = action.payload
        },
        setCreateBug:(state, action) => {
            state.createBug = action.payload
        },
        setViewBug:(state, action) => {
            state.viewBug = action.payload
        }
    },
    extraReducers:{

    }
})

export const {
    setBug,
    setViewBug,
    setEditBug,
    setCreateBug

} = bugsSlice.actions

export const getBug = (state) => state.bugs.bug
export const getViewBug = (state) => state.bugs.viewBug
export const getEditBug = (state) => state.bugs.editBug
export const getCreateBug = (state) => state.bugs.createBug

export default bugsSlice.reducer