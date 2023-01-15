import { ICurrencyList } from '../interfaces';

export interface IRootState {
    currencyList: ICurrencyList;
    searchQuery: string;
}

export const state: IRootState = {
    currencyList: {},
    searchQuery: ''
};

