import { ActionTree } from 'vuex';
import { IRootState } from '../state';
import { Api } from '../../../http';
import { Currency } from '@/models';
import { ICurrencyList } from '../interfaces';

import { map, tap } from 'rxjs/operators'
import { MutationName } from '../mutations';


export enum ActionName {
    GetCurrencies = '[RootState] GetCurrencies'
}

export const actions: ActionTree<IRootState, IRootState> = {
    [ActionName.GetCurrencies]({ commit }): Promise<ICurrencyList>{
        return Api.Cbr.getDaily().pipe(
            map(response => {
                const currenciesDto = response.Valute;
                const currencies: ICurrencyList = {};

                for (const key in currenciesDto) {
                    const currentCurrency = currenciesDto[key];

                    currencies[currentCurrency.CharCode] = new Currency(
                        currentCurrency.ID,
                        currentCurrency.NumCode,
                        currentCurrency.CharCode,
                        currentCurrency.Nominal,
                        currentCurrency.Name,
                        currentCurrency.Value,
                        currentCurrency.Previous
                    );
                }

                return currencies;
            }),
            tap(currencies => {
                commit(MutationName.SetCurrencies, currencies);
            })
        ).toPromise();
    }
};