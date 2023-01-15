import { AxiosResponse } from './interfaces';
import axios, { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';


export class Axios {

    private readonly _axios: AxiosInstance;

    public constructor(
        baseURL: string
    ) {
        this._axios = axios.create({
            baseURL: baseURL,
            headers: {
                Accept: 'application/json'
            }
        });
    }

    public get<Response>(
        url: string,
    ): Observable<Response> {

        return Observable.create((observer: any) => {
            this._axios.get<AxiosResponse<Response>>(url)
                .then(axiosResponse => {
                    observer.next(axiosResponse.data);
                    observer.complete();
                })
                .catch(error => {
                    observer.error(error);
                })
        });

    }

}