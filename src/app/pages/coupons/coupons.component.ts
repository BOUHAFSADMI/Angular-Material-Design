import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {CoupondialogComponent} from '../../components/coupondialog/coupondialog.component'
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

  onOpenDialog(){
    this.dialog.open(CoupondialogComponent);
  }

}
