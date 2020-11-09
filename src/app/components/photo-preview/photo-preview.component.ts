import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PhotoService} from '../../services/photo.service';
import {photo} from '../../interfaces/photo'
@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string; 
  foto: photo;

  constructor(  
    private router: Router, 
    private activedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
      .subscribe(
        res => {
          this.foto = res;
        },
        err => console.log(err)
      )
    })

  }
  delete(id:string){
    this.photoService.deletePhoto(id)
    .subscribe(
      res => {
         console.log(res);
         this.router.navigate(['/photos']);
      },
      err => console.log(err)
    )
  }
  update(title: HTMLInputElement, description: HTMLTextAreaElement):boolean{
      this.photoService.updatePhoto(this.id, title.value, description.value) 
      .subscribe(
        res => {
          console.log(res);
        this.router.navigate(['/photos'])
        },
        err => console.log(err)
        
      )
      return false;
  }


}
