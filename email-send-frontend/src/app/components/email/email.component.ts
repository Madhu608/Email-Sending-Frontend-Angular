import { Component } from '@angular/core';
import { response } from 'express';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ok } from 'assert';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
})
export class EmailComponent {
  data = {
    to: '',
    subject: '',
    message: '',
  };
  flag = false;
  constructor(private email: EmailService, private _snackBar: MatSnackBar) {}

  doSubmitForm() {
    console.log('try to submit form');
    console.log('DATA', this.data);
    if (
      this.data.to == '' ||
      this.data.subject == '' ||
      this.data.message == ''
    ) {
      this._snackBar.open('fields can not be empty !!', 'ok');
      return;
    }
    this.flag = true;
    this.email.sendEmail(this.data).subscribe(
      (response) => {
        console.log(response);
        this.flag = false;
        this._snackBar.open('Send Success', 'ok');
      },
      (error) => {
        console.log(error);
        this.flag = false;
        this._snackBar.open('Email is not send !!', 'OK');
      }
    );
  }
}
