import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

	onSubmit(){
    this.snackbar.open("Your order submited", "Retry", {
      duration: 3000
    });
  }

}
