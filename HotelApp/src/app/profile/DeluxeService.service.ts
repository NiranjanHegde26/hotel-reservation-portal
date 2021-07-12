import { Injectable } from '@angular/core'
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import 'rxjs/add/operator/map'
//import 'rxjs/add/observable'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
export interface DeluxeRoomPayment{
  t_id: number
  deluxe_room_booking: any
  drb_id:number,
  u_id:number,
  total:number,
  card_no: number,
  }

  export interface Payload{
    drb_id:number,
    u_id:number,
    total:number,
    card_no: number,
  }



  interface TokenResponse {
    token: string
  }


@Injectable()

export class DeluxeService{
constructor(private http: HttpClient, private router: Router) {}
//user: DeluxeRoomDetails;
private token: string
public status: boolean

private saveToken(token: string): void {
  localStorage.setItem('usertoken', token)
  this.token = token
}

public getToken(): string {
  if (!this.token) {
    this.token = localStorage.getItem('usertoken')
  }
  return this.token
}

public getDetails(): DeluxeRoomPayment {
  const token = this.getToken()
  let payload
  if (token) {
    payload = token.split('.')[1]
    payload = window.atob(payload)
    return JSON.parse(payload)
  } else {
    return null
  }
}


public pay(user:Payload): Observable<any> {
    
    const base =  this.http.post(`/Deluxe-Rooms/deluxe-transcation`, user);
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )
      this.status=true;
    return request
}






}