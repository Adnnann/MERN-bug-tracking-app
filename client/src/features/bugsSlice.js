import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const loginUser = createAsyncThunk('bugs/userLoginData', async(user)=>{
    return await axios.post('/auth/signin', user, {
      header:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(response=>response.data)
    .catch(error=>error)
  })

  export const userToken = createAsyncThunk('bugs/protected', async()=>{
    return await axios.get('/protected', { 
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response=>response.data)
    .catch(error=>error.message)
  })
  
  export const signoutUser = createAsyncThunk('bugs/signout', async()=>{
    const response = await axios.post('/auth/signout')
    return response.data
  })

  export const createBug = createAsyncThunk('bugs/createBug', async(bug)=>{
    return axios.post('/api/bugs',bug,{
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(response=>response.data)
    .catch(error=>error)
  })

  export const getBugs = createAsyncThunk('pizza/allBugs', async()=>{
    return axios.get('/api/bugs',{
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(response=>response.data)
    .catch(error=>error)
  })

const initialState = {
    bug:{},
    viewBug:false,
    editBug: false,
    createBugModal:false,
    users:{},
    userSigninData:{},
    userToken:{},
    signoutUser:{},
    createBug:{},
    allBugs:{}
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
            state.createBugModal = action.payload
        },
        setViewBug:(state, action) => {
            state.viewBug = action.payload
        },
        resetStore:()=> initialState
    },
    extraReducers:{
        [loginUser.fulfilled]:(state, {payload})=>{
            return {...state, userSigninData:payload}
        },
        [userToken.fulfilled]:(state,{payload})=>{
            return {...state, userToken:payload}
        },
        [signoutUser.fulfilled]: (state, {payload}) => {
            return {...state, signedOut:payload}
        },
        [createBug.fulfilled]:(state,{payload})=>{
            return {...state, createBug:payload}
        },
        [getBugs.fulfilled]: (state, {payload}) => {
            return {...state, allBugs:payload}
        },

    }
})

export const {
    setBug,
    setViewBug,
    setEditBug,
    setCreateBug,
    resetStore

} = bugsSlice.actions

export const getBug = (state) => state.bugs.bug
export const getViewBug = (state) => state.bugs.viewBug
export const getEditBug = (state) => state.bugs.editBug
export const getCreateBug = (state) => state.bugs.createBugModal
export const getUsers = (state) => state.bugs.users
export const getUserSigninData = (state) => state.bugs.userSigninData
export const getToken = (state) => state.bugs.userToken
export const getSignout = (state) => state.bugs.signoutUser
export const getAllBugs = (state) => state.bugs.allBugs


export default bugsSlice.reducer