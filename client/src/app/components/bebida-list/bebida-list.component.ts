import { Component, OnInit, HostBinding } from '@angular/core';
import { BebeidasService } from 'src/app/services/bebeidas.service';

@Component({
  selector: 'app-bebida-list',
  templateUrl: './bebida-list.component.html',
  styleUrls: ['./bebida-list.component.css']
})
export class BebidaListComponent implements OnInit {
  @HostBinding ('class') classes='row'
  bebidas:any=[];

  constructor(private bebidasService:BebeidasService){}ngOnInit(): void {
    this.getBebidas();
  }

  getBebidas()
    {
      this.bebidasService.getBebidas().subscribe(
        res => this.bebidas=res,
        err => console.error(err));
    }

  deleteBebida(idBebida:string)
  {
    this.bebidasService.deleteBebida(idBebida).subscribe(
      res=>{
        console.log(res);
        this.getBebidas();
      },
      err=>console.error(err)
    );
  }
}
