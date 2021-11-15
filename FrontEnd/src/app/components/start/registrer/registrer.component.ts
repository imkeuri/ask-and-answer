import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {

  register: FormGroup;
  loading= false;


  constructor(private fb: FormBuilder, 
            private usuarioService: UsuarioService,
            private router: Router,
            private toastr: ToastrService ) {
    this.register = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, {validator: this.checkPassword})                                        
   }



  ngOnInit(): void {
  }


  registerUser(): void{
      console.log(this.register);
     
      const usuario: User ={
        user: this.register.value.user,
        password: this.register.value.password
      };

      this.loading = true;
      this.usuarioService.saveUser(usuario).subscribe(data=>
       { console.log(data);
        this.toastr.success('User ' +  + 'was registered succesful');
        this.router.navigate(['/start/login']);
        this.loading = false;}

    , error => {
      this.loading = false; 
      console.log(error);
      this.toastr.error(error.error.message,' Error!');
      this.register.reset();
    });
    }   

  checkPassword(group: FormGroup): any{
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame :true};
  }


}


