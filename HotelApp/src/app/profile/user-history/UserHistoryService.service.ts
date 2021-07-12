import { Injectable } from '@angular/core'
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import {SingleRoomService,SingleRoomDetails } from '../SingleRoomService.service'
import {SingleService,SingleRoomPayment} from '../SingleService.service'

export interface USERID{
    id:number
}

export interface ParsedData{
    id: number,
    single_payments:SingleRoomPayment[],
    single_room_bookings:SingleRoomDetails[]
}



@Injectable()

export class UserHistoryService{
    
    constructor(private http: HttpClient, private router: Router) {}
    
    public history(id:USERID):Observable<any>{
        
        const base= this.http.post(`/Single-history/single-history`,id)
        //console.log(base)
        return base
    }

  

   
}

/* */