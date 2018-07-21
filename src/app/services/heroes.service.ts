import { Injectable } from '@angular/core';
import { Http,Headers } from '../../../node_modules/@angular/http';
import { heroe } from '../interface/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroesService {


  heroesUrl:string = "https://heroesapp-f338b.firebaseio.com/heroes.json";
  constructor(private http: Http) { }

  nuevoHeroe(heroe:heroe){
    let body = JSON.stringify(heroe);

    let headers = new Headers({
      'Content-Type':'application/json'
    });


      return this.http.post( this.heroesUrl, body, {headers: headers} )
    .pipe( map( res => {
      console.log(res.json());
      return res.json();
    }));
  }

  actualizarHeroe(heroe:heroe, key$:string){

    let body = JSON.stringify(heroe);

    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let urlActualizar = `https://heroesapp-f338b.firebaseio.com/heroes/${key$}.json`;

          return this.http.put( urlActualizar, body, {headers: headers} )
    .pipe( map( res => {
      console.log(res.json());
      return res.json();
    }));
  }

  getheroe( key$:string){
    let urlActualizar = `https://heroesapp-f338b.firebaseio.com/heroes/${key$}.json`;

        return this.http.get( urlActualizar )
        .pipe( map( res => {
        return res.json();
        }));
      }

  getheroes(){
        return this.http.get( this.heroesUrl )
        .pipe( map( res => {
        return res.json();
        }));
      }
}
