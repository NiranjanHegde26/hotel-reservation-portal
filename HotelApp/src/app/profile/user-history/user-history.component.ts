import { Component } from '@angular/core';
import { UserHistoryService,ParsedData, USERID } from './UserHistoryService.service'
import { DeluxeHistoryService,UserID,Parse } from './DeluxeHistoryService.service'

import {Router } from '@angular/router'
import {AuthenticationService} from 'C://Angular/NewOne/HotelApp/src/app/authentication.service'
import { findIndex } from 'rxjs/operators';
import { NgModel } from '@angular/forms';
import { formatDate } from '@angular/common';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})

 


export class UserHistoryComponent  {

  constructor(private user:UserHistoryService,private auth:AuthenticationService, private U:DeluxeHistoryService){}

  Id:UserID={
    id:this.auth.getUserDetails().id
  }

  id:USERID=
  {
    id:this.auth.getUserDetails().id 
  }

  public details:ParsedData[]
  public n:number
  public d:Parse[]
  

  public book:string
  public t_id:number
  public total:number
  public RoomNo: number
  public hotelName:string
  public status:string="Pending"
  public type:string

    
  
  history(){
    this.user.history(this.id).subscribe(data=>{
      console.log(data);
     
      this.details=data
      this.n=data[0].single_payments.length
      for(let i=0;i<this.n;i++){
        
        this.book=this.details[0].single_payments[i].single_room_booking.booked
        this.t_id=this.details[0].single_payments[i].t_id
        this.total=this.details[0].single_payments[i].total
        this.RoomNo=this.details[0].single_payments[i].single_room_booking.no_of_rooms
        this.hotelName=this.details[0].single_payments[i].single_room_booking.srh_name
        this.status="Successful"
        this.type="Single Rooms"
        
        
      }
      
      
    })
  }

  DHistory(){
    console.log("jshd")
    this.U.DHistory(this.Id).subscribe(data=>{
      console.log(data);
      //console.log("nsg")
      this.d=data
     this.n=data[0].deluxe_payments.length
     console.log(this.n)
      for(let i=0;i<this.n;i++){
        
        this.book=this.d[0].deluxe_payments[i].deluxe_room_booking.booked
        this.t_id=this.d[0].deluxe_payments[i].t_id
        this.total=this.d[0].deluxe_payments[i].total
        this.RoomNo=this.d[0].deluxe_payments[i].deluxe_room_booking.no_of_rooms
        this.hotelName=this.d[0].deluxe_payments[i].deluxe_room_booking.drh_name
        if(this.hotelName == '1') this.hotelName = 'Taj Westend';
        if(this.hotelName == '2') this.hotelName = 'ITC Group';
        if(this.hotelName == '1') this.hotelName = 'Orchid';
        if(this.hotelName == '1') this.hotelName = 'Sheraton';
        
        this.status="Successful"
        this.type="Deluxe Rooms"
        console.log(this.hotelName)
        
        
      }
      
      
    })
    console.log("hdaw")
  }

}

/*this.det[i].booked=this.details[0].single_payments[i].single_room_booking[i].booked
        this.det[i].no_of_rooms=this.details[0].single_payments[i].single_room_booking.no_of_rooms
        this.det[i].srh_name=this.details[0].single_payments[i].single_room_booking.srh_name
        this.det[i].t_id=this.details[0].single_payments[i].t_id
        this.det[i].total=this.details[0].single_payments[i].total*/