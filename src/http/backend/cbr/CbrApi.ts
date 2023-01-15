import { ApiBase } from '../ApiBase';
import { Observable } from 'rxjs';

import * as Interfaces from './interfaces';

export class CbrApi extends ApiBase{

    public getDaily(): Observable<Interfaces.GetDaily.Response> {
        return this.http.get('daily_json.js');
    }

}