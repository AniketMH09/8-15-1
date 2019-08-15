import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
 
 reservation(data){
   //console.log(data);
   //return this.http.post('http://localhost:3000/order',data);
 }
  
}