import {InstrumentData} from "../features/instrumentTable/types/InstrumentData";
import {apis} from "../constants/apis";

export const fetchInstrumentData = async (): Promise<InstrumentData[]>=>{
    try{
        let response = await fetch(apis.instruments)
        return await response.json();
    }
    catch (e){
        return [];
    }

}