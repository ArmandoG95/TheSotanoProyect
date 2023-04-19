import { Component, OnInit, HostBinding } from '@angular/core';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-comida-list',
  templateUrl: './comida-list.component.html',
  styleUrls: ['./comida-list.component.css']
})
export class ComidaListComponent implements OnInit {
  @HostBinding ('class') classes='row'
  comidas:any=[];

  constructor(private comidasService:ComidasService){}ngOnInit(): void {
    this.getComidas();
  }

  getComidas()
  {
    this.comidasService.getComidas().subscribe(
      res => this.comidas=res,
      err => console.error(err));
  }

  deleteComida(idComida:string)
  {
    this.comidasService.deleteComida(idComida).subscribe(
      res=>{
        console.log(res);
        this.getComidas();
      },
      err=>console.error(err)
    );
  }
}
