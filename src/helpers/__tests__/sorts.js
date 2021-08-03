import { sortByTicker, sortByPrice, sortByAssetClass} from "../sorts";

const assetClassData = [
    {
        "assetClass":'Credit',
        "ticker":'D',
        price:120.34
    },
    {
        "assetClass":'Macro',
        "ticker":'C',
        price:130.45
    },
    {
        "assetClass":'Equities',
        "ticker":'B',
        price: 120.56
    },
    {
        "assetClass":'Equities',
        "ticker":'A',
        price: 190.80
    }
]

test('sorts correctly by assetClass', async ()=>{
    assetClassData.sort(sortByAssetClass);
   expect(assetClassData[0].assetClass).toBe('Equities');
    expect(assetClassData[1].assetClass).toBe('Equities');
    expect(assetClassData[2].assetClass).toBe('Macro');
    expect(assetClassData[3].assetClass).toBe('Credit');
});

test('sorts correctly by ticker', async ()=>{
    assetClassData.sort(sortByTicker);
    expect(assetClassData[0].ticker).toBe('A');
    expect(assetClassData[1].ticker).toBe('B');
    expect(assetClassData[2].ticker).toBe('C');
    expect(assetClassData[3].ticker).toBe('D');
});

test('sorts correctly by price', async ()=>{
    assetClassData.sort(sortByPrice);
    expect(assetClassData[0].price).toBe(190.80);
    expect(assetClassData[1].price).toBe(130.45);
    expect(assetClassData[2].price).toBe(120.56);
    expect(assetClassData[3].price).toBe(120.34);
});