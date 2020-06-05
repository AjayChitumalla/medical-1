import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit() {
  }
  permission(){
    if(localStorage.getItem('username')==='abc')
    return true;
    return false;
  }
}
