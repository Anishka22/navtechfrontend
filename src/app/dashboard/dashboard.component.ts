import { Component, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	

	ngAfterViewInit() { }

	constructor(private dialog:MatDialog) {
	}
	addupaction(){
		const dialogConfig=new MatDialogConfig();
		dialogConfig.width="550px";
		this.dialog.open(AddComponent,dialogConfig);
	  }
	  editupaction(){
		const dialogConfig=new MatDialogConfig();
		dialogConfig.width="550px";
		this.dialog.open(EditComponent,dialogConfig);
	  }
	  delupaction(){
		const dialogConfig=new MatDialogConfig();
		dialogConfig.width="550px";
		this.dialog.open(DeleteComponent,dialogConfig);
	  }
}
