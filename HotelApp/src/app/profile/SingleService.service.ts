import { Injectable } from '@angular/core'
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import 'rxjs/add/operator/map'
//import 'rxjs/add/observable'
import { SingleRoomDetails} from './SingleRoomService.service'



export interface SingleRoomPayment{
    t_id: number
    
    single_room_booking: any
   // single_room_booking: any[]
    srb_id:number,
    u_id:number,
    total:number,
    card_no: string,
   
  }

  export interface Payload{
    srb_id:number,
    u_id:number,
    total:number,
    card_no: string,
    //transcation_time: Date
  }



  interface TokenResponse {
    token: string
  }


@Injectable()

export class SingleService{
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

public getDetails(): SingleRoomPayment {
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
    
    const base =  this.http.post(`/Single-Rooms/single-transcation`, user);
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