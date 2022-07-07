import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/Service/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private orderDetailsService : OrderDetailsService) { }
  food : any;
  ngOnInit(): void {
    this.food = this.orderDetailsService.foodDetails;
  }

}
