import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  UserLogIn:boolean = true;
  
  
  button() {
    const sidebar = document.querySelector(".sidebar")!;


    sidebar.classList.toggle("close");
 
  }

  constructor() { }

  ngOnInit(): void {
  }
}

