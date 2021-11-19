import {createContext} from 'react';

export const Store = createContext ();	
const initialState = {
	darkMode: false,
}

export function StoreProvide (props) {
	const [state, dispatch] = useReducer (reducer, initialState);
}