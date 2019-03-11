import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    this.isLoading = true;
    if (form.invalid){
      return;
    } else {
      this.authService.login(form.value.email, form.value.password);
    }
  }

}
