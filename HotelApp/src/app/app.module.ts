

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { FooterComponent } from './footer/footer.component';
import { SingleRoomComponent } from './profile/single-room/single-room.component';

import { PaymentComponent } from './profile/payment/payment.component';

import { from } from 'rxjs';
import { DeluxeRoomComponent } from './profile/deluxe-room/deluxe-room.component';
import { SinglePaymentComponent } from './profile/single-payment/single-payment.component'
import { EditComponent } from './profile/edit/edit.component'


//Services
import { AuthenticationService } from './authentication.service'
import { SingleRoomService } from './profile/SingleRoomService.service'
import { AuthGuardService } from './auth-guard.service';
import { DeluxeRoomService} from './profile/DeluxeRoomService.service'
import { DeluxePayService } from './profile/DeluxePayService.service'
import { SinglePayService } from './profile/SinglePayService.service'
import {SingleService } from './profile/SingleService.service'
import { DeluxeService } from './profile/DeluxeService.service';
//import { HistoryComponent } from './profile/history/history.component';
import { UserHistoryComponent } from './profile/user-history/user-history.component';
import { UserHistoryService } from './profile/user-history/UserHistoryService.service'
import { DeluxeHistoryService } from './profile/user-history/DeluxeHistoryService.service';
import {EditService} from './profile/edit/EditService.service';
import { GalleryComponent } from './gallery/gallery.component'

//import { HistoryComponent } from './profile/history/history.component'
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
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    SingleRoomComponent,
   
    PaymentComponent,
   
    DeluxeRoomComponent,
   
    SinglePaymentComponent,
   
  
    UserHistoryComponent,
   
  
    EditComponent,
   
  
    GalleryComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [AuthenticationService,EditService,AuthGuardService,SingleRoomService,UserHistoryService, DeluxeHistoryService ,SinglePayService,DeluxeRoomService,DeluxePayService, SingleService,DeluxeService ],
  bootstrap: [AppComponent]
})
export class AppModule {}