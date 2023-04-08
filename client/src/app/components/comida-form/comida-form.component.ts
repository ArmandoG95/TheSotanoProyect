import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/Comidas';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.css']
})
export class ComidaFormComponent implements OnInit {
  comida: Comida={
    idComida:0,
    comida: "",
    precioComida:0,
    descComida: "",
    fotoComida:""
  };

  constructor(private comidasService: ComidasService)
  {
  }
  ngOnInit(): void {
    
  }
  saveNewComida(){
    delete this.comida.idComida;

    this.comidasService.saveComida(this.comida).subscribe(
      res=>{console.log(res)},
      err=>console.error(err)
    )
  }
}
