import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
url=environment.apiUrl;
  httpClient: any;

  constructor() { }
  add(data:any){
    return this.httpClient.post(this.url+"/order/add",data,{
      headres: new HttpHeaders().set('Content-Type',"application/json")
    })
  }
  update(data:any){
    return this.httpClient.post(this.url+"/order/update",data,{
      headres: new HttpHeaders().set('Content-Type',"application/json")
    })
  }
  getProducts()
  {
    return this.httpClient.get(this.url+"/order/get/");
  }
  updateStatus(data:any){
    return this.httpClient.patch(this.url+"/order/updatestatus",data,{
      headres: new HttpHeaders().set('Content-Type',"application/json")
    })
  }
  delete(orderid:any){
    return this.httpClient.patch(this.url+"/order/delete"+orderid,{
      headres: new HttpHeaders().set('Content-Type',"application/json")
    })
  }
}
