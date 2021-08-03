import React from "react";
import {render, screen,waitFor} from "../../../test-utils";
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import InstrumentTable from "../../instrumentTable";
import {apis} from "../../../constants/apis";


const server = setupServer(
    rest.get(apis.instruments, (req, res, ctx) => {
        return res(ctx.json(
            [
                    {
                        "ticker": "Zeta",
                        "price": 3150.67,
                        "assetClass": "Credit"
                    },
                    {
                        "ticker": "Gamma",
                        "price": 3791.37,
                        "assetClass": "Macro"
                    },
                    {
                        "ticker": "Alpha",
                        "price": 3792.37,
                        "assetClass": "Equities"
                    }
                ]

        ))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('expect instrumentTable to render', async ()=>{
   render(<InstrumentTable/>);
    const text = await screen.findByText('Alpha');
    expect(text).toBeInTheDocument();
    expect(screen.getByText('Zeta')).toBeInTheDocument();
    expect(screen.getByText(3150.67)).toBeInTheDocument();
    expect(screen.getByText(3791.37)).toBeInTheDocument();
    expect(screen.getByText('Credit')).toBeInTheDocument();
    expect(screen.getByText('Equities')).toBeInTheDocument();
});

test('instrumentTable handles server error', async () => {
    server.use(
        rest.get(apis.instruments, (req, res, ctx) => {
            return res(ctx.status(500))
        }),
    )
    render(<InstrumentTable/>)
    expect(screen.getByText('No data available')).toBeInTheDocument()
});

test('ticker sorting works as expected', async ()=>{
    render(<InstrumentTable/>);
    await screen.findByText('Alpha');
    const ticker = screen.getByText('Ticker');
    ticker.click();
    let row1 = screen.getByTestId('r-0').children;
    let row2 = screen.getByTestId('r-1').children;
    let row3 = screen.getByTestId('r-2').children;

    expect(row1[0].textContent).toBe('Alpha');
    expect(row2[0].textContent).toBe('Gamma');
    expect(row3[0].textContent).toBe('Zeta');

});

test('price sorting works as expected', async ()=>{
    render(<InstrumentTable/>);
    await screen.findByText('Alpha');
    const price = screen.getByText('Price');
    price.click();
    let row1 = screen.getByTestId('r-0').children;
    let row2 = screen.getByTestId('r-1').children;
    let row3 = screen.getByTestId('r-2').children;


    expect(row1[1].textContent).toBe("3792.37");
    expect(row2[1].textContent).toBe("3791.37");
    expect(row3[1].textContent).toBe("3150.67");

});

test('assetClass sorting works as expected', async ()=>{
    render(<InstrumentTable/>);
    await screen.findByText('Alpha');
    const asset = screen.getByText('Ticker');
    asset.click();
    let row1 = screen.getByTestId('r-0').children;
    let row2 = screen.getByTestId('r-1').children;
    let row3 = screen.getByTestId('r-2').children;

    expect(row1[2].textContent).toBe('Equities');
    expect(row2[2].textContent).toBe('Macro');
    expect(row3[2].textContent).toBe('Credit');

});

