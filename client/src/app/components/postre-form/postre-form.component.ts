import { Component, OnInit } from '@angular/core';
import { Postre } from 'src/app/models/Postres';
import { PostresService } from 'src/app/services/postres.service';

@Component({
  selector: 'app-postre-form',
  templateUrl: './postre-form.component.html',
  styleUrls: ['./postre-form.component.css']
})
export class PostreFormComponent implements OnInit {
  postre: Postre={
    idPostre:0,
    postre: "",
    precioPostre:0,
    descPostre: "",
    fotoPostre:""
  };

  constructor(private postresService: PostresService)
  {
  }
  ngOnInit(): void {
    
  }
  saveNewPostre(){
    delete this.postre.idPostre;

    this.postresService.savePostre(this.postre).subscribe(
      res=>{console.log(res)},
      err=>console.error(err)
    )
  }

}
