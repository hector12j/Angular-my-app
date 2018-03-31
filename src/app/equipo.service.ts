import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

	equipo:any[] =[
		{
			nombre:'Ignacio',
			especialidad:'HTML5',
			descripcion:'esta'
		},
		{
			nombre:'Hector',
			especialidad:'HTML5',
			descripcion:'esta'			
		}
	];
  constructor() { 
  }
  obtenerEquipo(){
  	return this.equipo;
  }

  find(i){
  	return this.equipo[i];
  }
}
