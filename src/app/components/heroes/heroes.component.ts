import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroe } from '../../interface/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any;
  constructor(private heroeservice:HeroesService) { }

  ngOnInit() {
    this.heroeservice.getheroes().subscribe(data =>{
     this.heroes = data;
      console.log(data);
    } 
  );
  }

}
