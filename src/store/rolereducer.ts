//FILL HERE 3.2
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import roles from '../data/roles.json';

interface RoleState {
    role: string
};

const initialState: RoleState = {
    role: roles[0],
}

const roleReducer = createSlice({
    name: 'role',
    initialState,
    reducers:{
        setRole(state, action: PayloadAction<string>){
            if(roles.includes(action.payload)){
                state.role = action.payload;
            }
        }
    }
})

export const {setRole} = roleReducer.actions;
export default roleReducer.reducer;