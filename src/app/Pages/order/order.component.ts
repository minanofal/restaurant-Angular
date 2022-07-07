import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/Service/order-details.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private param : ActivatedRoute, private services : OrderDetailsService) { }
  gitid : any;
  foodDetails : any ;
  ngOnInit(): void {
    this.gitid = this.param.snapshot.paramMap.get('id');
    if(this.gitid){
      this.foodDetails = this.services.foodDetails.filter((v)=>{return v.id==this.gitid;});
      console.log(this.foodDetails);
    }
    
    
  }

}
