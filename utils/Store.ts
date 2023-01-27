import React, { createContext, useReducer } from "react";

interface PostData {
    title: string
    date: string
    description: string
    thumbnailUrl: string
    tags?: Array<string>
}

interface StoreState {
    posts: Array<PostData> | null
}

const initialState: StoreState = {
    posts: null
}

interface StoreAction {
    type: string
    payload: any
}

const reducer = (state: StoreState, action: StoreAction) => {
    switch (action.type) {
        case '':

            break;

        default:
            return state
    }
}



interface ProviderProps {
    children: React.ReactNode
}

export const Store = createContext<StoreState | null>(null)

// const StoreProvider: React.FC<ProviderProps> = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     const value = { state, dispatch }
//     return (
//         <Store.Provider value= { value } >
//         { children }
//         < /Store.Provider>
//     )
// }