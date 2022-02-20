import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  usersList: User[]
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.service.getAllUser().subscribe((user: User[]) => {
      this.usersList = user
    })
  }
}
