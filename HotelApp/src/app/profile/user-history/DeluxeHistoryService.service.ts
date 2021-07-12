import {DeluxeRoomDetails} from '../DeluxeRoomService.service'
import {DeluxeRoomPayment} from '../DeluxeService.service'
import { Injectable } from '@angular/core'
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
 
export interface UserID{
    id:number
}


export interface Parse{
    id:number,
    deluxe_payments:DeluxeRoomPayment[],
    deluxe_room_booking:DeluxeRoomDetails[]
}

@Injectable()

export class DeluxeHistoryService{
    constructor(private http: HttpClient, private router: Router) {}
    public DHistory(t:UserID):Observable<any>{
        //console.log(id.id)
        const Base=this.http.post(`/History/history`,t)
        
        return Base
    }
  
}