import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public data:DataService,private route:Router) { }

  ngOnInit() {
    if(this.data.loggedIn())
    this.route.navigate(['/newOrder']);
    else
    this.route.navigate(['/register']);
  }
}
