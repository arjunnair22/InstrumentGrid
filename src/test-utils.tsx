// test-utils.jsx
import React, {PropsWithChildren} from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import todoReducer from './Todo/redux/todoSlice'

type renderOptions = {
    preloadedState?: any,
    store?: any
    renderOptions?:any[]

}

function render(
    ui:React.ReactElement,
    {
        preloadedState,
        ...renderOptions
    } :renderOptions = {}
) {
        const store = configureStore({ reducer: { todo: todoReducer }, preloadedState });
        function Wrapper({ children }:PropsWithChildren<any>) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }