import React from "react";
import Col from "../Column";
import {render, screen} from "../../../test-utils";
const col = ['ticker', 'alpha'];

function Table (props){
    return (<table>
        <tbody>
            <tr>
                {props.children}
            </tr>
        </tbody>
    </table>
    )
}


test('Column renders', async ()=>{
    let colDef = {
        key:'ticker',
    }
    render(
        <Table>
            <Col col={col} options={colDef}/>
        </Table>
    );
    expect(screen.getByText('alpha')).toBeInTheDocument();
});

test('Css ClassName is applied', async ()=>{
    let colDef = {
        key:'ticker',
        cssStyleClass:(col)=>{
            return col[1] === 'alpha' ? 'col-alpha' : 'col-no-css'
        }
    }
    render(
        <Table>
            <Col col={col} options={colDef}/>
        </Table>
    );
    expect(screen.getByText('alpha')).toHaveClass('col-alpha');
});

test('Css ClassName is not applied', async ()=>{
    let colDef = {
        key:'ticker',
        cssStyleClass:(col)=>{
            return col[1] === 'alpha1' ? 'col-alpha' : ''
        }
    }
    render(
        <Table>
            <Col col={col} options={colDef}/>
        </Table>
    );
    expect(screen.getByText('alpha')).not.toHaveClass('col-alpha');
});


