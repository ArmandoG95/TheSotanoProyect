import { Component, OnInit, HostBinding } from '@angular/core';
import { Bebida } from 'src/app/models/Bebida';
import { BebeidasService } from 'src/app/services/bebeidas.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  edit:boolean=false;

  constructor(private bebidasServices: BebeidasService, private router:Router, private activatedRoute:ActivatedRoute)
  {
  }
  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    //console.log(params);
    if(params['id'])
    {
      this.bebidasServices.getBebida(params['id']).subscribe(
        res=>{
          console.log(res);
          this.bebida=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }
  saveNewBebida(){
    delete this.bebida.idBebida;

    this.bebidasServices.saveBebida(this.bebida).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/bebidas']);
      },
      err=>console.error(err)
    );
  }

  updateBebida()
  {
    //console.log(this.bebida);
    this.bebidasServices.updateBebida(this.bebida.idBebida!,this.bebida).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/bebidas']);
      },
      err=>console.error(err)
    );
  }
}
