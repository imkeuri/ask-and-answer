import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User} from '../../../models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //variables

  login: FormGroup; 
  loading = false;

  //search about injection of dependecy

  constructor(private fb: FormBuilder,
               private toastr: ToastrService,
                 private router: Router, 
                 private loginService: LoginService) {
    this.login = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    
  }
log():void{


      const user: User ={
        user:this.login.value.user,
        password: this.login.value.password
      }

      this.loading =  true;
      this.loginService.login(user).subscribe(data=>{
        this.loginService.setLocalStorage(data.token);
        
        this.router.navigate(['/dashboard']);
       
       
       
       
       
       
       
       // this.loginService.getToken();
      }, error =>{
        this.loading =false;
        console.log(error);
        this.toastr.error(error.error.message, 'User invalid!!');
        this.login.reset();
      });
  }
}
