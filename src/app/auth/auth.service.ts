import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { AuthResponse } from "./authResponse";
import { User } from "./user.model";
import { tap } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})


export class AuthService{
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndPoint:string = "signUp";
    signInEndPoint:string = "signInWithPassword";
    public user:Subject<User> = new Subject<User>();

    public constructor(private http:HttpClient){

    }
    public signup(email:string, password:string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndPoint + '?' + 
                        'key=' + "AIzaSyD11lU3oiDjfLKbr2DXCQVqAUc5P8hrh8Q", requestBody);

    }

    public login(email:string, password:string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signInEndPoint + '?' + 
                        'key=' + "AIzaSyD11lU3oiDjfLKbr2DXCQVqAUc5P8hrh8Q",requestBody).pipe(
                            tap(
                                (data: AuthResponse) => {
                                    const currentTime = new Date().getTime();
                                    const expirationDate = new Date(currentTime + +data.expiresIn * 1000);
                                    const user = new User(data.email, data.localId, data.idToken, expirationDate)
                                    this.user.next(user);
                                    console.log(user);
                                }
                            )
                        );
    }
}