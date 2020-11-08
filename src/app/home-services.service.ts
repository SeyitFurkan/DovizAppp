import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  constructor(private http:HttpClient) { }

  httpOptions ={
    headers:new HttpHeaders({
      'Content-Type':"application/json",
      'Authorization':'apikey 314LxJ81gXm1S8aiwMNSy8:3UZdhZC67hhY0hhtIJ6nFt',
    })
  }

  GetTotaldata(){
    return new Promise((resolve,reject) =>{
    let request = this.http.get( 'https://api.collectapi.com/corona/totalData' ,this.httpOptions).subscribe(x=>{
      console.log(x);
      if(x["success"]){
    resolve(x["result"]);
    
  }
}, e=> {
  reject(e)
}, () => {
  request.unsubscribe();
 
})

  })
  
}
}
