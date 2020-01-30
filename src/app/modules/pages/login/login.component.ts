import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crm',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  products = [
    {
      name: 'Produto 1',
      new: true,
      construction: true,
      location: 'Rua piracema, 265 - Santana, São Paulo - SP',
      price: 250000.00,
      condominium: 500.00,
      image: 'assets/uploads/predio1.jpg'
    },
    {
      name: 'Produto 2',
      plant: true,
      price: null,
      condominium: 450.50,
      image: 'assets/uploads/predio2.jpg'
    }
  ];

  newProducts = [
    {
      name: 'Produto 1',
      new: true,
      location: 'Rua piracema, 265 - Santana, São Paulo - SP',
      price: 310000.00,
      condominium: 500.00,
      image: 'assets/uploads/predio1.jpg'
    },
    {
      name: 'Produto 2',
      new: true,
      condominium: 450.50,
      image: 'assets/uploads/predio2.jpg'
    },
    {
      name: 'Produto 1',
      new: true,
      location: 'Rua piracema, 265 - Santana, São Paulo - SP',
      price: 310000.00,
      condominium: 500.00,
      image: 'assets/uploads/predio1.jpg'
    },
    {
      name: 'Produto 2',
      new: true,
      condominium: 450.50,
      image: 'assets/uploads/predio2.jpg'
    },
    {
      name: 'Produto 2',
      new: true,
      condominium: 450.50,
      image: 'assets/uploads/predio1.jpg'
    }
  ];

  login: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  callLogin() {
    this.userService.login(this.login, this.password)
      .subscribe(data => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['dashboard']);
      }, error => {
        alert(error.error.erro);
      },);
  }
}
