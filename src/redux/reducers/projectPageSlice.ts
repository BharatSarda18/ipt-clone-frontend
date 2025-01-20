import { createSlice } from '@reduxjs/toolkit';

export const projectPageSlice = createSlice({
  name: 'projectPage',
  initialState: {
    projectList: [],
    projectCount:0
  },
  reducers: {
    setProjectList:(state,action)=>{
        state.projectList = action.payload;
    },
    setProjectCount:(state,action)=>{
        state.projectCount = action.payload;
    }
   
  },
});

export const {setProjectList,setProjectCount  } = projectPageSlice.actions;
export default projectPageSlice.reducer;
