import { Component, OnInit } from '@angular/core';
import {DeluxeRoomService,DeluxeRoomDetails} from '../DeluxeRoomService.service'
import { DeluxeService,DeluxeRoomPayment } from '../DeluxeService.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  details: DeluxeRoomDetails

  credentials:DeluxeRoomPayment={
    drb_id:this.auth.getUserDetails().drb_id,
    u_id:this.auth.getUserDetails().u_id,
    total:this.auth.getUserDetails().total,
    card_no:0,
    t_id:0,
    deluxe_room_booking:""


  }
  

  
  constructor(private auth: DeluxeRoomService,private router: Router, private single: DeluxeService, private http: HttpClient) {}

  ngOnInit() {
    this.auth.payment().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }

  pay(){
    
    this.single.pay(this.credentials).subscribe(
      () => {
        alert("Payment successful! Redirecting back to profile...");
        this.router.navigateByUrl('/profile');
      },
      err => {
        console.error(err);
        console.log('Failed');
      }
    );
   
  } 
  
}

  


