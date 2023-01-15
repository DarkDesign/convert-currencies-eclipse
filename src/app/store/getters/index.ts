import { IRootState } from '../state';
import { GetterTree } from 'vuex';

export enum GettersName {
    GetCurrencies = '[RootState] GetCurrencies',
    GetFilteredCurrencies = '[RootState] GetFilteredCurrencies',
    GetCurrencyList = '[RootState] GetCurrencyList'
}

export const getters: GetterTree<IRootState, IRootState> = {
    [GettersName.GetCurrencies]: state => {
        return  Object.values(state.currencyList);
    },

    [GettersName.GetFilteredCurrencies]: state => {
        const currencies = Object.values(state.currencyList);

        if (state.searchQuery.length === 0) return currencies;

        const query = state.searchQuery.toLowerCase();

        return currencies.filter((currency) =>
            (
                currency.name
                    .toLowerCase()
                    .includes(query)
                || currency.charCode
                    .toLowerCase()
                    .includes(query)
            )
        );
    },

    [GettersName.GetCurrencyList]: state => {
        return state.currencyList;
    }
};