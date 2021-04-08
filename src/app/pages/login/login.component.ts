import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  validateForm: FormGroup;

  validUsers = [
    {
      Username: "testeusername",
      Password: "testesenha"
    },
    {
      Username: "admin",
      Password: "admin"
    },
    {
      Username: "universo",
      Password: "42"
    },
  ];

  constructor(
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      Username: [null, [Validators.required]],
      Password: [null, [Validators.required]],
    });
  }

  login(): void {
    this.isLoading = true;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      // let validUser = this.validUsers.find(element =>
      //   element.Username == this.validateForm.get("Username").value
      //   && element.Password == this.validateForm.get("Password").value
      // );

      // if (validUser) {
      //   sessionStorage.setItem("l", "true");
      //   this.router.navigate(['/lista-receitas/']);
      // } else {
      //   this.notification.create("error", "Erro", "Usuário não encontrado.");
      // }

      // this.isLoading = false;

      //API
      this.loginService.login(this.validateForm.value).then((response) => {
        if (response != null) {
          sessionStorage.setItem("l", "true");
          this.router.navigate(['/lista-receitas/']);
        } else {
          this.notification.create("error", "Erro", "Usuário não encontrado.");
        }

        this.isLoading = false;
      });
    } else {
      this.notification.create("error", "Erro", "Campos inválidos ou faltando preenchimento.");
      this.isLoading = false;
    }
  }
}
