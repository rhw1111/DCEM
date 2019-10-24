import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export namespace Dcem.Core {

    export class Config {
        //public serverUrl = "http://localhost:9099/";
        public serverUrl = "https://subcrmdevapi.sokon.com/dcem";
    }

    export class Http {
        constructor(
            private _httpClient: HttpClient,
            private _config: Dcem.Core.Config
        ) {
        }

        get(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
            this._httpClient.get(this._config.serverUrl + url, params).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                });
        }
    }
}