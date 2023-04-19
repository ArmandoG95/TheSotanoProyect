import { Component, OnInit, HostBinding } from '@angular/core';
import { SnacksService } from 'src/app/services/snacks.service';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {
  @HostBinding ('class') classes='row'
  snacks:any=[];

  constructor(private snacksService:SnacksService){}ngOnInit(): void {
    this.getSnacks();
  }

  getSnacks()
  {
    this.snacksService.getSnacks().subscribe(
      res => this.snacks=res,
      err => console.error(err));
  }

  deleteSnack(idSnack:string)
  {
    this.snacksService.deleteSnack(idSnack).subscribe(
      res=>{
        console.log(res);
        this.getSnacks();
      },
      err=>console.error(err)
    );
  }
}
