import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinksDatasourceImpl } from '../../infrastructure/datasources/link.datasource.impl';
import { LinkItem } from '../../domain/domain-index';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  constructor(private readonly dataSource: LinksDatasourceImpl) {}

  getNavbarItems(): Observable<LinkItem[]> {
    const navBarItems = this.dataSource.getNavbarItems();
    return navBarItems;
  }
}
