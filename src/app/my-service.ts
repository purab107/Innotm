import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http:HttpClient) { }

  signup(data: SignUpModel): Observable<any> {
    return this.http.post<any>('https://skytm-api.azurewebsites.net/api/Auth/signup', data);
  }

  loginDetail(data: LoginModel): Observable<any>{
    return this.http.post<any>('https://skytm-api.azurewebsites.net/api/Auth/login', data);
  }

  addMoney(data: addMoneyModel): Observable<any>{
    return this.http.post<any>('https://skytm-api.azurewebsites.net/api/Wallet/add', data);
  }

}


export class SignUpModel{
  username!: string;
  email!: string;
  phoneNumber!: string;
  gender!: string;
  password!: string;
}

export class LoginModel{
  phoneNumber!: string;
  password!: string;
}

export class addMoneyModel{
  phoneNumber!: string;
  amount!: number;
}