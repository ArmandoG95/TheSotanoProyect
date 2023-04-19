import { Component, OnInit } from '@angular/core';
import { Snack } from 'src/app/models/Snacks';
import { SnacksService } from 'src/app/services/snacks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-snack-form',
  templateUrl: './snack-form.component.html',
  styleUrls: ['./snack-form.component.css']
})
export class SnackFormComponent implements OnInit {
  snack: Snack={
    idSnack:0,
    snack: "",
    precioSnack:0,
    descSnack: "",
    fotoSnack:""
  };

  edit:boolean=false;

  constructor(private snacksService: SnacksService, private router:Router, private activatedRoute:ActivatedRoute)
  {
  }
  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    if(params['id'])
    {
      this.snacksService.getSnack(params['id']).subscribe(
        res=>{
          console.log(res);
          this.snack=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }
  saveNewSnack(){
    delete this.snack.idSnack;

    this.snacksService.saveSnack(this.snack).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/snacks']);
      },
      err=>console.error(err)
    )
  }

  updateSnack()
  {
    this.snacksService.updateSnack(this.snack.idSnack!,this.snack).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/snacks']);
      },
      err=>console.error(err)
    );
  }
}
