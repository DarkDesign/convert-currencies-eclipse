import { AxiosResponseError } from './AxiosResponseError';
import { AxiosResponseStatus } from './AxiosResponseStatus';


export interface AxiosResponse<TData> {
    readonly success: boolean;
    readonly status: AxiosResponseStatus;
    readonly data: TData | null;
    readonly error: AxiosResponseError | null;
}