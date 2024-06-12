import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from '../../practica3/lista/lista.component';
import { MaterialModule } from '../../modules/material/material.module';

 

@Component({

selector: 'app-lista-personajes',

standalone: true,

imports: [ HttpClientModule, MaterialModule, MatListModule],

providers: [RickAndMortyService],

templateUrl: './lista-personajes.component.html',

styleUrl: './lista-personajes.component.scss'

})

export class ListaPersonajesComponent {

 

personajes: any;

 

constructor(private rymService: RickAndMortyService){}

 

ngOnInit(): void {

this.rymService.obtenerPersonajes().subscribe(

resultado => {

this.personajes = resultado;

console.log(this.personajes)

}

)

}

}