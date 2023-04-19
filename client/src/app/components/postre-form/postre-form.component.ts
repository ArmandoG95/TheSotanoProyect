import { Component, OnInit } from '@angular/core';
import { Postre } from 'src/app/models/Postres';
import { PostresService } from 'src/app/services/postres.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  edit:boolean=false;

  constructor(private postresService: PostresService, private router:Router, private activatedRoute:ActivatedRoute)
  {
  }
  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    if(params['id'])
    {
      this.postresService.getPostre(params['id']).subscribe(
        res=>{
          console.log(res);
          this.postre=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }
  saveNewPostre(){
    delete this.postre.idPostre;

    this.postresService.savePostre(this.postre).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/postres']);
      },
      err=>console.error(err)
    )
  }

  updatePostre()
  {
    this.postresService.updatePostre(this.postre.idPostre!,this.postre).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/postres']);
      },
      err=>console.error(err)
    );
  }
}
