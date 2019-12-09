import { Injectable } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';

@Injectable({
    providedIn: 'root'
})
export class storeShareDataThr {

    private shareData: any = {
        productClassMap: {},         //类别地图  key 产品类别id
        productMap: {},              //产品地图  key 产品id
        productImageMap: {},         //产品图片  key 图片id
        productSpecificationMap: {}  //规格地图  key 规格id
    }

    private isThrRun: boolean = false;
    private isPostSucees: boolean = false;

    public async start(): Promise<void> {
        if (!this.isThrRun) {
            await this.thrMain();
        }
    }

    private async thrMain(): Promise<void> {
        this.isThrRun = true;
        var i = 0;
        this.b(() => {
            i++;
            console.log(i);

        });

        this.isThrRun = false;
    }


    public async loadShareData(): Promise<any> {
        //var i = 0;
        //const thr = () => {
        //    if (this.isPostSucees) {

        //        return this.shareData;
        //    }
        //    else {
        //        if (i < 10) {
        //            i++
        //            setTimeout(thr, 1000);
        //            console.log(i);
        //        }
        //    }
        //}

        //thr();
    }






    //public thrMain = async () => {

    //}



    public b = async<T>(getter: () => T, checkSize = 100, timeout = 1000) => {
        return new Promise<T>(x => {
            const check = (num = 0) => {
                const target = getter();
                if (target !== undefined && target !== null) {
                    x(target)
                } else if (num > timeout / checkSize) {
                    x(target)
                } else {
                    setTimeout(() => check(++num), checkSize);
                }
            };
            check();
        });
    }
}
