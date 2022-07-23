import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  [x: string]: any;
  userService: any;
  responseMessage: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(){
    var formData=this.signupForm.value;
    var data={
      username: formData.username,
  userpassword: formData.userpassword
    }
  this.userService.signup(data).subscribe((response:any)=>{
    //this.dialogRef.close();
    //this.responseMessage=response?.message;
    //this.snackbarService.openSnackBar(this.responseMessage,"");
  //  this.router.navigate(['/cafe/dashboard']);
  },(error: { error: { message: any; }; })=>{
    if(error.error?.message)
    {
      this.responseMessage=error.error?.message;
    }
    else{
     // this.responseMessage=GlobalConstants.genericError;
     this.router.navigate(['/order/dashboard']);
    }
   // this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
  }
  )
  }
}
