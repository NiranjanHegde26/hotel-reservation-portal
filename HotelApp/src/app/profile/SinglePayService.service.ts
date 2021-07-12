import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { SingleRoomService,Payload} from './SingleRoomService.service'

@Injectable()
export class SinglePayService implements CanActivate{
    constructor(private auth: SingleRoomService, private router: Router) {}
    canActivate(){

       if(this.auth.status){
           return true
       }
       //console.log("Working!")
       return false
    }
}