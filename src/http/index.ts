import { IApi } from './IApi';
import { CbrApi } from './backend/cbr/CbrApi';
import { Axios } from './axios/Axios';

export const Api: IApi = {
    Cbr: new CbrApi(
        new Axios('https://www.cbr-xml-daily.ru')
    )
};