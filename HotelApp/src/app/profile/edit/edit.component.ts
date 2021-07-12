import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Rename, EditService, DeleteClass } from './EditService.service';
//import {SingleRoomService,SingleRoomDetails} from '../SingleRoomService.service'
import {AuthenticationService} from 'C://Angular/NewOne/HotelApp/src/app/authentication.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})


export class EditComponent {

  constructor(private edit:EditService,private router:Router, private d:AuthenticationService) { }
 
  public msg:string=""

  details:Rename={
    rename:"",
    id:this.d.getUserDetails().id
  }

  id:DeleteClass={
    id:this.d.getUserDetails().id
  }

  rename(){console.log("edit")
    this.edit.rename(this.details).subscribe(()=>{
      confirm("Successfully Saved!")
      this.msg="Your name is successfully updated!"
    },
    err => {
      console.error(err);
      console.log('Failed');
    });
    
  }

  delete(){
    //console.log("Delete")
    this.edit.delete(this.details).subscribe(()=>{
      alert("User Details erased from database!");
      this.router.navigateByUrl('/register');
    },
    err => {
      console.error(err);
      console.log('Failed');
    });
  }

  
}
