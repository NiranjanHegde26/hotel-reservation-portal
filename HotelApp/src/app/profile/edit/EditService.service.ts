import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { NgForm } from '@angular/forms'
import 'rxjs/add/operator/map'

export interface Rename{
    rename:string,
    id:number
}

export interface DeleteClass{
    id:number
}

@Injectable()

export class EditService{

    constructor(private http: HttpClient, private router: Router) {}
    public rename(n:Rename):Observable<any>{
        console.log("Came here")
        const base=this.http.post(`/Edit/editname`,n)
        return base
    }


    public delete(de:DeleteClass):Observable<any>{
        const base=this.http.post(`/Edit/delete-user`,de)
        return base
    }
}