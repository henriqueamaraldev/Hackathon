import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  listCliente: User[]

  pag : number = 1 ;
  contador : number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
