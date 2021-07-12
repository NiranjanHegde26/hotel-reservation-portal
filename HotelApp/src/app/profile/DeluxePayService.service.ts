import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { DeluxeRoomService,Payload} from './DeluxeRoomService.service'

@Injectable()
export class DeluxePayService implements CanActivate{
    constructor(private auth: DeluxeRoomService, private router: Router) {}
    canActivate(){

       if(this.auth.status){
           return true
       }
      // console.log("Working!")
       return false
    }
}