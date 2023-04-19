import { Component, OnInit, HostBinding } from '@angular/core';
import { PostresService } from 'src/app/services/postres.service';

@Component({
  selector: 'app-postre-list',
  templateUrl: './postre-list.component.html',
  styleUrls: ['./postre-list.component.css']
})
export class PostreListComponent implements OnInit {
  @HostBinding ('class') classes='row'
  postres:any=[];

  constructor(private postresService:PostresService){}ngOnInit(): void {
    this.getPostres();
  }

  getPostres()
  {
    this.postresService.getPostres().subscribe(
      res => this.postres=res,
      err => console.error(err));
  }

  deletePostre(idPostre:string)
  {
    this.postresService.deletePostre(idPostre).subscribe(
      res=>{
        console.log(res);
        this.getPostres();
      },
      err=>console.error(err)
    );
  }
}
