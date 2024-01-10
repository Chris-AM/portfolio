import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { NavbarDatasourceImpl } from '../../infrastructure/datasources/navbar.datasource.impl';
import { NavbarItem } from '../../domain/domain-index';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private readonly dataSource: NavbarDatasourceImpl) {}

  getNavbarItems(): Observable<NavbarItem[]> {
    const navBarItems = this.dataSource.getNavbarItems();
    return navBarItems;
  }
}
