import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class LayoutStateService {

    constructor(private httpClient: HttpClient) { }

    sendStorageRequest = (storageKey, dataType, method, data?) => {
        const userProfilePk = 'abcdef';
        const url = `${Constants.WRAPPER_PATH_BASE}LayoutState/LayoutState`;
        const params = new HttpParams()
            .set('userProfilePk', userProfilePk)
            .set('itemStorageKey', storageKey);

        const req: HttpRequest<any> = new HttpRequest(
            method, url, data, {
            params,
            responseType: dataType
        });

        const response = this.httpClient.request(req)
            .toPromise();

        return response;
    };
}
