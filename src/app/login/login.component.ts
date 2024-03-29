import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-alogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class loginComponent implements OnInit {

  constructor(public http: HttpClient, private toast: ToastrService, private Router: Router) { }

  loginform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
  })


  onSubmit() {
    this.http.post("https://college-managment-system.herokuapp.com/auth/login", this.loginform.value).subscribe((data: any) => {
      if (data.Success) {
        console.log(this.loginform.value);
        localStorage.setItem('token', data.token)
        this.toast.clear()
        this.Router.navigate([jwt_decode(localStorage.getItem('token')).role])
        this.toast.success('Success Login');
      } else {
        this.toast.clear()

        this.toast.error(data.Error, 'Error', {
          closeButton: true,
          tapToDismiss: true,
          timeOut: 8000
        });
      }
    })


  }

  ngOnInit() { }
}