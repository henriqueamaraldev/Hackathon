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
  pag: number = 1;
  contador: number = 5;
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.service.getAllUser().subscribe((user: User[]) => {
      this.usersList = user
    })
  }
  getUserBalance(user: User) {
    let userBalance = 0
    user.banks.forEach(bank => {
      userBalance += bank.saving.balance
    })
    return userBalance
  }
  getUserPatrimony(user: User) {
    let getUserPatrimony = 0
    user.banks.forEach(bank => {
      getUserPatrimony += bank.saving.balance
    })
    return getUserPatrimony
  }
}
