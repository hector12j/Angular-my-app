import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

	animales:Array<any> = [
		{tipo:'Perro',nombre:'lisa',edad:10},
		{tipo:'Perro',nombre:'zizu',edad:3},
		{tipo:'Gato',nombre:'michu',edad:2}
	];
  constructor() { }

  ngOnInit() {
  }

}
