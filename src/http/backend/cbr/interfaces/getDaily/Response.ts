import { IValuteDto } from '../../dto';

export interface Response {
    readonly Date: string;
    readonly PreviousDate: string;
    readonly PreviousURL: string;
    readonly Timestamp: string;
    readonly Valute: { [key: string]: IValuteDto };
}