import {InstrumentData} from "../features/instrumentTable/types/InstrumentData";

export function sortInstrumentData(data: InstrumentData[]){
    data.sort(sortByAssetClass).sort(sortByPrice).sort(sortByTicker)
    return data;
}

export function sortByAssetClass(a:InstrumentData, b:InstrumentData){
    return assetClassOrdering[a.assetClass] <= assetClassOrdering[b.assetClass] ? -1 : 1;
}

export function sortByPrice(a:InstrumentData, b:InstrumentData){
    return b.price - a.price; // if a is greater than b then its correctly sorted so will return a negative or zero
}

export function sortByTicker(a:InstrumentData, b:InstrumentData){
    return a.ticker <= b.ticker ? -1 : 1;
}

const assetClassOrdering:any = {
    'Equities':1,
    'Macro':2,
    'Credit':3
}