import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  public buttonClicked!:string;
  private authObservable!: Observable<AuthResponse>
  public user!: Subscription;
  public isAuthenticated:boolean = false;

  constructor(private authService:AuthService, private router:Router,private authentication:AuthService){

  }
  ngOnInit(): void {
    this.user = this.authentication.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
  })
  }
public onSubmit(data: NgForm){
  console.log("Button clicked: " + this.buttonClicked);
  console.log(data.value);

  if(this.buttonClicked == 'SignUp'){
  this.authObservable = this.authService.signup(data.value.email, data.value.password);
  }
  if(this.buttonClicked == 'Login'){
    this.authObservable = this.authService.login(data.value.email, data.value.password);
    }

  
  this.authObservable.subscribe(
    (data:AuthResponse) => {
        console.log(data);
        
     },
     error =>{
      console.log(error.error);
     });


     data.resetForm();
    }
     

}
