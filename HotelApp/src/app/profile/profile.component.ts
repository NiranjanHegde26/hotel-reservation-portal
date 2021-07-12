import { Component, OnInit } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
//import {HistoryService,History,Payload} from './history/HistoryService.service'
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  
    details: UserDetails
  
    constructor( private http: HttpClient, private auth:AuthenticationService,private router: Router) { }

    

  
    ngOnInit() {
      this.auth.profile().subscribe(
        user => {
          this.details = user
        },
        err => {
             console.error(err)
        }
      )
    }
  }

