import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {CoreState} from '../../store/reducer/feature.reducer';
import {singInEmail, singInGoogle} from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder, private store: Store<CoreState> ) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(singInEmail(this.loginForm.value));
    }
  }

  google() {
      this.store.dispatch(singInGoogle());
  }
}
