import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) { }

  signup(data: SignUpModel): Observable<any> {
    return this.http.post<any>('https://localhost:7200/api/Auth/register', data);
  }

  loginDetail(data: LoginModel): Observable<any> {
    return this.http.post<any>('https://localhost:7200/api/Auth/login', data);
  }

  addMoney(data: addMoneyModel): Observable<any> {
    return this.http.post<any>('https://localhost:7200/api/Wallet/add', data);
  }
  sendMoney(data: paymentModel): Observable<any> {
    return this.http.post<any>('https://localhost:7200/api/Transaction/send-money', data);
  }

  checkBalance(phoneNumber: string): Observable<any> {
    return this.http.get<any>(`https://localhost:7200/api/Wallet/balance-summary?phoneNumber=${phoneNumber}`);
  }

  getTransaction(phoneNumber: string): Observable<TransactionResponse> {
    return this.http.get<any>(`https://localhost:7200/api/Transaction/transaction-history?phoneNumber=${phoneNumber}`);
  }

  getUserList(): Observable<any> {
    return this.http.get<any>('https://localhost:7200/api/User/basic-list')
  }

getUsername(phoneNumber: string): Observable<{ result: UserInfoModel }> {
  return this.http.get<{ result: UserInfoModel }>(`https://localhost:7200/api/User/user-info?phoneNumber=${phoneNumber}`);
}

  deleteAllTransactions(phoneNumber: string): Observable<any>{
    return this.http.delete<any>(`https://localhost:7200/api/Transactions/history?phoneNumber=${phoneNumber}`)
  }

  deleteTransByID(transactionId: number):Observable<any>{
    return this.http.delete<any>(`https://localhost:7200/api/Transaction/DeleteTransactionById?tid=${transactionId}`);
  }

  getTotalUsers() {
  return this.http.get<number>('https://localhost:7200/api/User/count');
}

getTotalAdmins() {
  return this.http.get<number>('https://localhost:7200/api/Admin/count-admins');
}

getAllUsers() {
  return this.http.get<any>('https://localhost:7200/api/User/all');
}

deleteUser(id: number) {
  return this.http.delete(`https://localhost:7200/api/Admin/delete-user/${id}`);
}

makeAdmin(id: number) {
  return this.http.post(`https://localhost:7200/api/Admin/make-admin/${id}`, {});
}

removeAdmin(id: number) {
  return this.http.post(`https://localhost:7200/api/Admin/remove-admin/${id}`, {});
}


}

export interface User {
  userId: number;
  userName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  password?: string;
  amount: number;
  createDate: string;
  avatarUrl: string;
  isAdmin: boolean;
  isMasterAdmin: boolean;
}



export class SignUpModel {
  Username!: string;
  Email!: string;
  PhoneNumber!: string;
  Gender!: string;
  Password!: string;
}

export class LoginModel {
  PhoneNumber!: string;
  Password!: string;
  isAdmin! : boolean;
}

export class addMoneyModel {
  Amount!: number;                      
  PhoneNumber!: string;
  TransactionType!: string;
}

export class paymentModel{
  SenderPhoneNumber!: string;
  ReceiverPhoneNumber!: string;
  Amount!: number;
}

export class WalletSummaryDto {
  amount!: number;
  totalSpent!: number;
  totalReceived!: number;
}

export class WalletResponseModel {
  result!: WalletSummaryDto;
  response!: string;
  responseCode!: string;
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

export class UserInfoModel {
  userName!: string;
  Email!: string;
  PhoneNumber!: string;
}
