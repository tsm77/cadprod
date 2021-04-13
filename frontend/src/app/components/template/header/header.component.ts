import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
    display: SidebarModule
   items: MenuItem[];
   activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['']},
      {label: 'Produtos', icon: 'pi pi-fw pi-plus', routerLink: ['/listagem']},

  ];
  this.activeItem = this.items[0];
  }

}
