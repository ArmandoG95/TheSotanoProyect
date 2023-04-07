import { Component, OnInit } from '@angular/core';
import { Bebida } from 'src/app/models/Bebida';
import { BebeidasService } from 'src/app/services/bebeidas.service';

@Component({
  selector: 'app-bebida-form',
  templateUrl: './bebida-form.component.html',
  styleUrls: ['./bebida-form.component.css']
})
export class BebidaFormComponent implements OnInit{
  bebida: Bebida={
    idBebida:0,
    bebida: "",
    precioBebida:0,
    descBebida: "",
    fotoBebida:""
  };

  constructor(private bebidasServices: BebeidasService)
  {
  }
  ngOnInit(): void {
    
  }
  saveNewBebida(){
    delete this.bebida.idBebida;

    this.bebidasServices.saveBebida(this.bebida).subscribe(
      res=>{console.log(res)},
      err=>console.error(err)
    )
  }
}
