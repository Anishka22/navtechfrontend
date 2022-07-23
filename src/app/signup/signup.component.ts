import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signupForm:any=FormGroup;
responseMessage:any;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService,
    private snackbarService:SnackbarService,
    private dialogRef:MatDialogRef<SignupComponent> ) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      username:[null,[Validators.required,Validators.pattern(GlobalConstants.usernameRegex)]],
      userpassword:[null,[Validators.required,Validators.pattern(GlobalConstants.userpasswordRegex)]],
    })
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
},(error)=>{
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
