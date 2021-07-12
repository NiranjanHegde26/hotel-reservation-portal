import { Component, OnInit } from '@angular/core';
import {DeluxeRoomService, Payload } from '../DeluxeRoomService.service'
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";


@Component({
  selector: 'app-deluxe-room',
  templateUrl: './deluxe-room.component.html',
  styleUrls: ['./deluxe-room.component.scss']
})
export class DeluxeRoomComponent {

  credentials: Payload = {
   u_id:0,
   drh_name:"",
   no_of_rooms:0,
   check_in:"",
   check_out:"",
   total_days:0,
   total:0,
   booked:""
  };

 
  constructor(private single:DeluxeRoomService, private router: Router){}
  
  book(){
    
    this.single.book(this.credentials).subscribe(
      () => {
       // console.log("Hello!")
        this.router.navigateByUrl('/payment');
      },
      err => {
        console.error(err);
        console.log('Failed');
      }
    );
   
  }

  days(){
    const startDate = new Date(this.credentials.check_in);
    const endDate = new Date(this.credentials.check_out);
    if(this.datesValid())
    {this.credentials.total_days= Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) ) /(1000 * 60 * 60 * 24));
    return(this.credentials.total_days);}
  }
  calculate(){
    let valu = this.credentials.no_of_rooms;
    //console.log(valu)
    let day=this.days()
    //console.log(day
    if(day>0)
    {this.credentials.total=700*valu*day;
    return (this.credentials.total);}
   
    }
  
  
  datesValid() {
    let form:any
    const startDate = new Date(this.credentials.check_in);
    const endDate = new Date(this.credentials.check_out);
    return endDate > startDate;
  }
}
  
