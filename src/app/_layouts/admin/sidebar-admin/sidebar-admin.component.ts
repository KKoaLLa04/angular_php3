import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css'],
  standalone: true,
  imports: [
    RouterOutlet
  ]
})
export class SidebarAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
