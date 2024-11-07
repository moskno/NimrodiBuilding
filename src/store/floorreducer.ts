//FILL HERE 3.1
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FloorState {
    floors: {
        id: number;
        hasAccess: boolean;
    }[];
}

const initialState: FloorState = {
    floors: [
        { id: 1, hasAccess: false},
        { id: 2, hasAccess: false},
        { id: 3, hasAccess: false},
        { id: 4, hasAccess: false},
        { id: 5, hasAccess: false},
    ]
}

const floorSlice = createSlice({
    name: 'floor',
    initialState,
    reducers:{
        changeAccess(state, action: PayloadAction<number>){
            const floor = state.floors.find((f)=> f.id === action.payload);
            if(floor){
                floor.hasAccess = !floor.hasAccess;
            }
        }
    }
})

export const {changeAccess} = floorSlice.actions;
export default floorSlice.reducer;