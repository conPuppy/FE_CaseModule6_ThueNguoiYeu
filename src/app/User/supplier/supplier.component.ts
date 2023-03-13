import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {addFormatToken} from "ngx-bootstrap/chronos/format/format";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
    @ViewChild('uploadFile1', {static: true}) public avatarDom1: ElementRef | undefined;

    arrFiles: any = [];
    arrayPicture : string[] = [];

    constructor(private storage: AngularFireStorage) {
    }

    submit() {
        for (let file of this.arrFiles) {
            if (file != null) {
                const filePath = file.name;
                const fileRef = this.storage.ref(filePath);
                this.storage.upload(filePath, file).snapshotChanges().pipe(
                    finalize(() => (fileRef.getDownloadURL().subscribe(
                        url => {
                            this.arrayPicture.push(url);
                            console.log(url);
                        })))
                ).subscribe();
            }
        }
    }

    uploadFileImg() {
        for (const argument of this.avatarDom1?.nativeElement.files) {
            this.arrFiles.push(argument)
        }
        this.submit();
    }
}
