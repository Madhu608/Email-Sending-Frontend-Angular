import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private _snackBar: MatSnackBar) {}

  btnClick() {
    console.log('btn click');
    this._snackBar.open('Hey Welcome to this app', 'Cancel');
  }
}
