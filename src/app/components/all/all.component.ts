import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  photos = []; 
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
    this.photoService.getPhotos()
    .subscribe(
      res => this.photos=res, 
      err => console.log(err)
      )
  }
  cursorPhoto(id: string){
    this.router.navigate(['/photos', id]);
  }

}
