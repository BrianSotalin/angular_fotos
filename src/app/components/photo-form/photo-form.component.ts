import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service'
import {Router} from '@angular/router'
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
  file: File;
  photoUp: string | ArrayBuffer;
  
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
  }
  
    photoEvento(event: HtmlInputEvent): void{
     if (event.target.files && event.target.files[0]){
        this.file = <File>event.target.files[0];
        //image preview
        const reader = new FileReader();
        reader.onload = e => this.photoUp = reader.result;
        reader.readAsDataURL(this.file);
     }
    }
    uploadFoto(title:HTMLInputElement, description:HTMLTextAreaElement):boolean {
       this.photoService.createPhoto(title.value, description.value, this.file)
       .subscribe(
         res => {
           this.router.navigate(['/']);
         },
        err => 
        console.log(err)
        )
       return false;
    }
  
  

}
