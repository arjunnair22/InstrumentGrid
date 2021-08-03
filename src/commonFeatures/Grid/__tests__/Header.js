import React from "react";
import Header from "../Header";
import {render, screen} from "../../../test-utils";

function Table (props){
    return (<table>
            {props.children}
            <tbody>
            </tbody>
        </table>
    )
}

const gridDef={
    rowDef:{},
    colDefs:[
        {
            key:'ticker',
            displayName:'Ticker'
        },
        {
            key:'price',
            displayName:'Price'

        },
        {
            key:'assetClass',
            displayName:'Asset Class'

        }
    ]
}

test('header renders', async ()=>{
   render(
       <Table>
            <Header gridDef={gridDef}/>
       </Table>
   )
   expect(screen.getByText(gridDef.colDefs[0].displayName)).toBeInTheDocument();
   expect(screen.getByText(gridDef.colDefs[1].displayName)).toBeInTheDocument();
   expect(screen.getByText(gridDef.colDefs[2].displayName)).toBeInTheDocument();
});

test('click event is fired for ticker with correct index number',async ()=> {
    const cb = {
        sortable: jest.fn()
    }
    render(
        <Table>
            <Header gridDef={gridDef} callbacks={cb}/>
        </Table>
    )
    let ticker = screen.getByText(gridDef.colDefs[0].displayName);
    ticker.click();
    expect(cb.sortable).toBeCalledTimes(1);
    expect(cb.sortable.mock.calls.length).toBe(1);
    expect(cb.sortable.mock.calls[0][0]).toBe(0);

});

test('click event is fired for price with correct index number',async ()=> {
    const cb = {
        sortable: jest.fn()
    }
    render(
        <Table>
            <Header gridDef={gridDef} callbacks={cb}/>
        </Table>
)

    let price = screen.getByText(gridDef.colDefs[1].displayName);
    price.click();
    expect(cb.sortable).toBeCalledTimes(1);
    expect(cb.sortable.mock.calls.length).toBe(1);
    expect(cb.sortable.mock.calls[0][0]).toBe(1);

});