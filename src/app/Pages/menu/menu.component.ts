import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/Service/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private orderDetailsService : OrderDetailsService) { }
  food : any;
  ngOnInit(): void {
    this.food = this.orderDetailsService.foodDetails;
  }

}
