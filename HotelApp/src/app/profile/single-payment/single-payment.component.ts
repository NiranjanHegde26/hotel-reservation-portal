import { Component, OnInit } from '@angular/core';
import {SingleRoomService,SingleRoomDetails} from '../SingleRoomService.service'
import { SingleService, SingleRoomPayment } from '../SingleService.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-single-payment',
  templateUrl: './single-payment.component.html',
  styleUrls: ['./single-payment.component.scss']
})
export class SinglePaymentComponent implements OnInit {
    details:SingleRoomDetails
  
  constructor(private auth: SingleRoomService,private router: Router, private single: SingleService, private http: HttpClient) {}
  
   credentials:SingleRoomPayment={
     srb_id:this.auth.getRoomDetails().srb_id,
     u_id:this.auth.getRoomDetails().u_id,
     total:this.auth.getRoomDetails().total,
     card_no:"",
     single_room_booking:"",
     t_id:0
     


   }
   
  ngOnInit() {
    this.auth.payment().subscribe(
      user => {
        this.details = user
      
      },
      err => {
        console.error(err)
      }
    );
   
    console.log(this.auth.getRoomDetails());
   
  
  }


 pay(){
    console.log(this.credentials.card_no);
    this.single.pay(this.credentials).subscribe(
      () => {
       // console.log("Hello!")
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

  



 


