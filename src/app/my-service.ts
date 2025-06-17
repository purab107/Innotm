import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) { }

  signup(data: SignUpModel): Observable<any> {
    return this.http.post<any>('https://skytm-api.azurewebsites.net/api/Auth/signup', data);
  }

  loginDetail(data: LoginModel): Observable<any> {
    return this.http.post<any>('https://skytm-api.azurewebsites.net/api/Auth/login', data);
  }

  addMoney(data: addMoneyModel): Observable<any> {
    return this.http.post<any>('https://skytm-api.azurewebsites.net/api/Wallet/add', data);
  }
  sendMoney(data: paymentModel): Observable<any> {
    return this.http.post<any>('https://skytm-api.azurewebsites.net//api/Transactions/pay', data);
  }

  checkBalance(phoneNumber: string): Observable<any> {
    return this.http.get<any>(`https://skytm-api.azurewebsites.net/api/Users/balance?phoneNumber=${phoneNumber}`);
  }

  getTransaction(phoneNumber: string): Observable<TransactionResponse> {
    return this.http.get<any>(`https://skytm-api.azurewebsites.net/api/Transactions/history?phoneNumber=${phoneNumber}`);
  }

  getUserList(): Observable<any> {
    return this.http.get<any>('https://skytm-api.azurewebsites.net/api/Users/basic-list')
  }

  getUsername(phoneNumber: string): Observable<{result: balanceCheckModel}>{
    return this.http.get<{result: balanceCheckModel}>(`https://skytm-api.azurewebsites.net/api/Users/balance?phoneNumber=${phoneNumber}`);
  }

}


export class SignUpModel {
  username!: string;
  email!: string;
  phoneNumber!: string;
  gender!: string;
  password!: string;
}

export class LoginModel {
  phoneNumber!: string;
  password!: string;
}

export class addMoneyModel {
  phoneNumber!: string;
  amount!: number;
}

export class paymentModel{
  senderPhoneNumber!: string;
  receiverPhoneNumber!: string;
  amount!: number;
}

export class balanceCheckModel {
  username!: string;
  email!: string;
  phoneNumber!: string;
  gender!: string;
  password!: string;
  amount!: number;
  createDate!: string;
}

export interface transactionHistory {
  userId: number;
  receiverId: number;
  transactionId: number;
  receiverName: string;
  receiverPhoneNumber: string;
  transactionType: string;
  transactionDate: string;
  initialAmount: number;
  transferAmount: number;
}

export interface TransactionResponse {
  result: transactionHistory[];
  response: string;
  responseCode: string;
}

export interface UserListResponse {
  userId: number;
  username: string;
  phoneNumber: string;
}