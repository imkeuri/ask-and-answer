import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePass: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
              private userService: UsuarioService,
              private toastr: ToastrService,
              private router: Router) {
    this.changePass = this.fb.group({
      oldPass:['',Validators.required],
      newPass:['', [Validators.required, Validators.minLength(5)]],
      confirmPass:['']
    }, {validator: this.checkPassword})
   }

  ngOnInit(): void {
  }
  
  checkPassword(group: FormGroup): any{
    const pass = group.controls.newPass.value;
    const confirmPass = group.controls.confirmPass.value;
    return pass === confirmPass ? null : { notSame :true};
  }

    savePassword():void{
      
      const changePasswordConst: any ={
        oldPass: this.changePass.value.oldPass,
        newPass: this.changePass.value.newPass
      };

      this.loading = true;
      this.userService.changePassword(changePasswordConst).subscribe(data=>{
        this.toastr.info(data.message);
        this.router.navigate(['/dashboard']);
      }, error => {
        this.loading = false;
        this.changePass.reset;
        this.toastr.error(error.error.message);
      });
    }

   
}
