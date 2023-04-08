import { Component, OnInit } from '@angular/core';
import { Snack } from 'src/app/models/Snacks';
import { SnacksService } from 'src/app/services/snacks.service';

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

  constructor(private snacksService: SnacksService)
  {
  }
  ngOnInit(): void {
    
  }
  saveNewSnack(){
    delete this.snack.idSnack;

    this.snacksService.saveSnack(this.snack).subscribe(
      res=>{console.log(res)},
      err=>console.error(err)
    )
  }
}
