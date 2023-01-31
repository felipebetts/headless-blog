import React, { createContext, Dispatch, useReducer, useState } from "react"


interface StateValue {
    tags: string[] | null
}

interface ActionValue {
    type: string
    payload?: any
}

interface StoreValue {
    state: StateValue
    dispatch?: Dispatch<ActionValue>
}

const intialState = {
    tags: null
}

const reducer = (state: StateValue, action: ActionValue) => {
    switch(action.type) {
        case 'SET_TAGS':
            const tags = action.payload
            console.log('set tags!')
            return {
                ...state,
                tags
            }
        default:
            return state
    }
}

export const Store = createContext<StoreValue>({
    state: {
        tags: null
    },
    dispatch: () => {}
})

interface Props {
    children: React.ReactNode
}

const StoreProvider: React.FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState)
    const value = { state, dispatch }
    return (
        <Store.Provider value={value}>
            { children }
        </Store.Provider>
    )
}

export default StoreProvider