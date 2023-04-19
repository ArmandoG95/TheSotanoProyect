import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/Comidas';
import { ComidasService } from 'src/app/services/comidas.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  edit:boolean=false;

  constructor(private comidasService: ComidasService, private router:Router, private activatedRoute:ActivatedRoute)
  {
  }
  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    if(params['id'])
    {
      this.comidasService.getComida(params['id']).subscribe(
        res=>{
          console.log(res);
          this.comida=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }

  saveNewComida(){
    delete this.comida.idComida;

    this.comidasService.saveComida(this.comida).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/comidas']);
      },
      err=>console.error(err)
    );
  }

  updateComida()
  {
    this.comidasService.updateComida(this.comida.idComida!,this.comida).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/comidas']);
      },
      err=>console.error(err)
    );
  }
}
