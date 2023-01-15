import { Axios } from '../axios/Axios';


export class ApiBase {

    public constructor(
        protected readonly http: Axios
    ) {}

}