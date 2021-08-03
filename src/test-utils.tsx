// test-utils.jsx
import React, {PropsWithChildren} from 'react'
import { render as rtlRender } from '@testing-library/react'


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
        function Wrapper({ children }:PropsWithChildren<any>) {
        return <>{children}</>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }