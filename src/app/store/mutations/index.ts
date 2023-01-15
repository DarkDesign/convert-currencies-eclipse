import { IRootState } from '../state';
import { MutationTree } from 'vuex';
import { ICurrencyList } from '../interfaces';

export enum MutationName {
    SetCurrencies = '[RootState] SetCurrencies',
    SetSearchQuery = '[RootState] SetSearchQuery'
}

export const mutations: MutationTree<IRootState> = {
    [MutationName.SetCurrencies](state, payload: ICurrencyList){
        state.currencyList = payload;
    },

    [MutationName.SetSearchQuery](state, payload: string) {
        state.searchQuery = payload;
    }
};