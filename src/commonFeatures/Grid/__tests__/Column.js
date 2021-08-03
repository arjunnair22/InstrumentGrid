import React from "react";
import Col from "../Column";
import {render, screen} from "../../../test-utils";
const col = ['ticker', 'alpha'];


test('Column renders', async ()=>{
    let colDef = {
        key:'ticker',
    }
    render(<Col col={col} options={colDef}/>);
    expect(screen.getByText('alpha')).toBeInTheDocument();
});

test('Css ClassName is applied', async ()=>{
    let colDef = {
        key:'ticker',
        cssStyleClass:(col)=>{
            return col[1] === 'alpha' ? 'col-alpha' : 'col-no-css'
        }
    }
    render(<Col col={col} options={colDef}/>);
    expect(screen.getByText('alpha')).toHaveClass('col-alpha');
});

test('Css ClassName is not applied', async ()=>{
    let colDef = {
        key:'ticker',
        cssStyleClass:(col)=>{
            return col[1] === 'alpha1' ? 'col-alpha' : ''
        }
    }
    render(<Col col={col} options={colDef}/>);
    expect(screen.getByText('alpha')).not.toHaveClass('col-alpha');
});


