import { Component, OnInit } from '@angular/core';
import { heroe } from '../../interface/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:heroe = {
    nombre : "",
    casa : "Marvel",
    bio : ""
  };
  id:string;
  constructor(private heroeservice:HeroesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parametro => {
      this.id = parametro['id']
      console.log(this.id);
      if (this.id !== 'nuevo'){
        this.heroeservice.getheroe(this.id)
          .subscribe(data => this.heroe = data);
      }
    })
  }

  guardar(){
    console.log(this.heroe);

    if (this.id == 'nuevo'){
      this.heroeservice.nuevoHeroe(this.heroe)
    
      .subscribe(data => {
        this.router.navigate(['/heroe',data.name]);
      },
      error => console.error(error));
    }else{
      this.heroeservice.actualizarHeroe(this.heroe, this.id)
    
    .subscribe(data => {
      console.log(data);
    },
    error => console.error(error));
    } 
  }

  agregarNuevo(forma: NgForm){
    
    this.router.navigate(['/heroe','nuevo']);

    forma.reset({
      casa: "Marvel"
    });
      
  }


}
