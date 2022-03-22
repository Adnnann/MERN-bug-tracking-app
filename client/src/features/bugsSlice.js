import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const allUsers = createAsyncThunk('bugs/allUsers', async()=>{
  return await axios.get('/api/users/', {
    header:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
  })
  .then(response=>response.data)
  .catch(error=>error)
})

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

export const userToken = createAsyncThunk('users/protected', async()=>{
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

  export const addBug = createAsyncThunk('bugs/addedBug', async(bug)=>{
    return axios.post('/api/bugs',bug,{
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(response=>response.data)
    .catch(error=>error)
  })

  export const getBugs = createAsyncThunk('bugs/allBugs', async()=>{
    return axios.get('/api/bugs',{
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(response=>response.data)
    .catch(error=>error)
  })
  export const updateBugStatus = createAsyncThunk('users/updateBug', async(status)=>{
 
    return await axios.put(`/api/bug/${status.params}`, {status:status.status}, {
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(response=>response.data)
    .catch(error=>error)
  })

  export const deleteBug = createAsyncThunk('users/deleteBug', async(params)=>{
    const response = await axios.delete(`/api/bug/${params}`,{
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
  })
  return response.data
  })

  export const updateBug = createAsyncThunk('users/updateBug', async(bug)=>{
    console.log(bug)
    const response = await axios.put(`/api/bug/${bug.id}`, bug.bug, {
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
  })
  return response.data
  })

const initialState = {
    bug:{},
    viewBug:false,
    editBug: false,
    createBugModal:false,
    users:{},
    allUsers:{},
    userSigninData:{},
    userToken:{},
    signoutUser:{},
    addedBug:{},
    allBugs:{},
    bugStatus:{},
    deleteBugStatus:{},
    dashboardColor: true,
    viewBugsColor: false,
    createBugsColor:false
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
        clearBugMessage:(state) => {
            state.addedBug = {}
        },
        setDashboardColor:(state,action) => {
            state.dashboardColor = action.payload
        },
        setViewBugColor:(state,action) => {
          state.viewBugsColor = action.payload
      },
      setCreateBugColor:(state,action) => {
        state.createBugsColor = action.payload
    },
        resetStore:()=> initialState
    },
    extraReducers:{
        [allUsers.fulfilled]: (state, {payload}) => {
            return {...state, allUsers: payload}
        },
        [loginUser.fulfilled]:(state, {payload})=>{
            return {...state, userSigninData:payload}
        },
        [userToken.fulfilled]:(state,{payload})=>{
            return {...state, userToken:payload}
        },
        [signoutUser.fulfilled]: (state, {payload}) => {
            return {...state, signedOut:payload}
        },
        [addBug.fulfilled]:(state,{payload})=>{
            return {...state, addedBug:payload}
        },
        [getBugs.fulfilled]: (state, {payload}) => {
            return {...state, allBugs:payload}
        },
        [updateBugStatus.fulfilled]: (state, {payload}) => {
          return {...state, bugStatus:payload}
        },
        [deleteBug.fulfilled]: (state, {payload}) => {
          return {...state, deleteBugStatus:payload}
        }

    }
})

export const {
    setBug,
    setViewBug,
    setEditBug,
    setCreateBug,
    clearBugMessage,
    resetStore,
    setCreateBugColor,
    setDashboardColor,
    setViewBugColor
} = bugsSlice.actions

export const getBug = (state) => state.bugs.bug
export const getViewBug = (state) => state.bugs.viewBug
export const getEditBug = (state) => state.bugs.editBug
export const getAddBug = (state) => state.bugs.addedBug
export const getCreateBug = (state) => state.bugs.createBugModal
export const getAllUsers = (state) => state.bugs.allUsers
export const getUser = (state) => state.bugs.users
export const getUserSigninData = (state) => state.bugs.userSigninData
export const getToken = (state) => state.bugs.userToken
export const getSignout = (state) => state.bugs.signoutUser
export const getAllBugs = (state) => state.bugs.allBugs
export const getBugStatus = (state) => state.bugs.bugStatus
export const getDeleteBugStatus = (state) => state.bugs.deleteBugStatus
export const getDashboardColor = (state) => state.bugs.dashboardColor
export const getViewBugsColor = (state) => state.bugs.viewBugsColor
export const getCreateBugsColor = (state) => state.bugs.createBugsColor


export default bugsSlice.reducer