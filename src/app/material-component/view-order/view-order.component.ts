import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  [x: string]: any;
 displayedColumns:string[]=['orderid','duedate','cusname','cusaddress','phone','total'];
 dataSource:any;
 responseMessage:any;
  constructor(//private productService:ServiceWorker,
    private dialog:MatDialog,
    private router:Router) { }

  ngOnInit(): void {
    this.tableData();
  }
  tableData() {
    this.dataSource=new MatTableDataSource();

    
  }
  handleAddAction(){
  new MatDialogConfig().data={
    action:"Add"
  }
  
  }
  handleEditAction(){
    new MatDialogConfig().data={
      action:"Edit"
    }
    
    }
    handleDelAction(){
      new MatDialogConfig().data={
        action:"Del"
      }
      
      }
      delproduct(orderid:any)
      {this.productService.delete(orderid).subscribe((response:any)=>{
        this.tableData();
        this.responseMessage=response?.message;
      })
 }
}





