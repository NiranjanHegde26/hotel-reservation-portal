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
export interface SingleRoomDetails{
    srb_id: number,
 
    u_id:number,
    srh_name: string,
    no_of_rooms: number
    check_in: string,
    check_out:  string,
    total_days: number
    total: number
    booked:  string
  }

  export interface Payload{
 
    u_id:number,
    srh_name: string,
    no_of_rooms: number,
    check_in: string,
    check_out:  string,
    total_days: number,
    total: number,
    booked: string
  }



  interface TokenResponse {
    token: string
  }


@Injectable()

export class SingleRoomService{
constructor(private http: HttpClient, private router: Router) {}
//user: SingleRoomDetails;
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

public getRoomDetails(): SingleRoomDetails {
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


public book(user:Payload): Observable<any> {
    
    const base =  this.http.post(`/SingleRooms/book`, user);
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




public payment(): Observable<any> {
  return this.http.get(`/SingleRooms/single-payment`, {
    headers: { Authorization: ` ${this.getToken()}` }
  
  })


}

}