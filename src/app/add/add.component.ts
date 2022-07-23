import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
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
     this.router.navigate(['/cafe/dashboard']);
    }
   // this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
  }
  )
  }

}
