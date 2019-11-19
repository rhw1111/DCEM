import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
    selector: 'app-fileupload-test',
    templateUrl: './fileupload-test.page.html',
    styleUrls: ['./fileupload-test.page.scss'],
})
export class FileuploadTestPage implements OnInit {

    constructor(
        private imagePicker: ImagePicker,
        private transfer: FileTransfer
    ) { }

    ngOnInit() {
    }

    chooseImage() {
        const options = {
            maximumImagesCount: 1
            // width: int,
            // height: int,
            // quality: int (0-100),
            // outputType: int
        };
        this.imagePicker.getPictures(options).then(
            (results) => {

            }
        );
    }
}
