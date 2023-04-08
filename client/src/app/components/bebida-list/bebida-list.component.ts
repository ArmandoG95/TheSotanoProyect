import { Component, OnInit, HostBinding } from '@angular/core';
import { BebeidasService } from 'src/app/services/bebeidas.service';
import { Bebida } from 'src/app/models/Bebida';

@Component({
  selector: 'app-bebida-list',
  templateUrl: './bebida-list.component.html',
  styleUrls: ['./bebida-list.component.css']
})
export class BebidaListComponent implements OnInit {
  @HostBinding ('class') classes='row'
  bebidas:any=[];
  bebida: Bebida={
    idBebida:0,
    bebida: "",
    precioBebida:0,
    descBebida: "",
    fotoBebida:""
  };

  constructor(private bebidasService:BebeidasService){}ngOnInit(): void {
    {
      this.bebidasService.getBebidas().subscribe(res => this.bebidas=res,
      err => console.error(err));
    }
  }
}
