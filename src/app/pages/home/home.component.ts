import { Component, OnInit } from '@angular/core';
import {CarrotService} from '../../services/carrot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public isLoading: boolean;
  public carrots;
  public featuredCarrot: any;


  constructor(private carrotService: CarrotService) { }

  ngOnInit() {
    this.isLoading = true;
    this.carrotService.getCarrots().subscribe((carrots) => {
        this.isLoading = false;
        this.carrots = carrots;
        this.featuredCarrot = carrots[0];
      });
  }

}
