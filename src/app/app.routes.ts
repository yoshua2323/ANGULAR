import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListaPersonajesComponent } from './practica4/lista-personajes/lista-personajes.component';
import { ListaComponent } from './practica3/lista/lista.component';

export const routes: Routes = [
    {
        path: '',
        component: ListaPersonajesComponent
    }, // Agrega la coma aquí

    {
        path: 'hijo',
        component: ListaComponent
    }
];
