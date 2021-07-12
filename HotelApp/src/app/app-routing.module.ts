import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'
import {DeluxeRoomComponent } from './profile/deluxe-room/deluxe-room.component'
import {DeluxeRoomService} from './profile/DeluxeRoomService.service'
import { SingleRoomService } from './profile/SingleRoomService.service'
import {  SingleRoomComponent } from './profile/single-room/single-room.component'
import {PaymentComponent} from './profile/payment/payment.component'
import { DeluxePayService } from './profile/DeluxePayService.service'
import { SinglePayService } from './profile/SinglePayService.service'
import {SinglePaymentComponent } from './profile/single-payment/single-payment.component'
import { DeluxeService } from './profile/DeluxeService.service'
import { EditComponent } from './profile/edit/edit.component'
import {EditService} from './profile/edit/EditService.service'
import { GalleryComponent } from './gallery/gallery.component';
//import {HistoryService} from './profile/history/HistoryService.service'




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: GalleryComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {path:'payment', component: PaymentComponent, canActivate:[DeluxePayService]},
  {path:'single-payment', component: SinglePaymentComponent , canActivate:[SinglePayService]}
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
