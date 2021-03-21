import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Batman';
  edad: number = 30;
  get nombreCapitalizado(){
      return this.nombre.toUpperCase();
  }

  obtenerEdad():string {
      return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void{
      this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
      this.edad = 35;
  }
}
