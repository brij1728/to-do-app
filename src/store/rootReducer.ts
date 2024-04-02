import { combineReducers } from '@reduxjs/toolkit';
import taskSlice from './taskSlice';

export const rootReducer = combineReducers({
	tasks: taskSlice,
});
