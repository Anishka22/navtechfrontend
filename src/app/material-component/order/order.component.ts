import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  [x: string]: any;
onAddProduct=new EventEmitter();
onedirproduct=new EventEmitter();
orderform:any=FormGroup;
action:any="Add";
responseMessage:any;
  productForm: any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
  private formBuilder:FormBuilder,
  //private productService:ServiceWorker,


  ) { }

  ngOnInit(): void {
    if(this.dialogData.action==="Edit"){
      this.action="Update";

    }
  }
  add()
  {
    var formData=this.productForm.value;
    var data={
      orderid:formData.orderid,
      duedate:formData.duedate,
      cusname:formData.cusname,
      cusaddress:formData.cusaddress,
      phone:formData.phone,
      total:formData.total,
    }
    this.productService.add(data).subscribe((response:any)=>{
      this.onAddProduct.emit(response);
      
    })

  

}
edit()
  {
    var formData=this.productForm.value;
    var data={
      orderid:this.dialogData.data.orderid,
      duedate:formData.duedate,
      cusname:formData.cusname,
      cusaddress:formData.cusaddress,
      phone:formData.phone,
      total:formData.total,
    }
    this.productService.update(data).subscribe((response:any)=>{
      this.onAddProduct.emit(response);
      })}
      del()
      {
        var formData=this.productForm.value;
        var data={
          orderid:formData.orderid,
          duedate:formData.duedate,
          cusname:formData.cusname,
          cusaddress:formData.cusaddress,
          phone:formData.phone,
          total:formData.total,
        }
        this.productService.del(data).subscribe((response:any)=>{
          this.onAddProduct.emit(response);
          
        })
    }}
