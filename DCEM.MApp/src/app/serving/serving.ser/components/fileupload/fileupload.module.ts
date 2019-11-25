import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FileuploadPage } from './fileupload.page';
import { FileUploadModule } from 'ng2-file-upload';


const routes: Routes = [
    {
        path: '',
        component: FileuploadPage
    }
];

@NgModule({
    imports: [

        CommonModule,
        FormsModule,
        IonicModule,
        FileUploadModule,
        RouterModule.forChild(routes)
    ],
    declarations: [FileuploadPage],
    providers: []
})
export class FileuploadPageModule { }
