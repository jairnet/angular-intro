import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Batman', 'Superman', 'Goku', 'One Punch'];
  heroe_delete: string = '';

  borrarHeroe(): void {
    this.heroe_delete = this.heroes.shift() || '';
  }
}
