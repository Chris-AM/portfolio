import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavbarDataSource, NavbarItem } from '../../domain/domain-index';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.config';

@Injectable({
  providedIn: 'root',
})
export class NavbarDatasourceImpl implements NavbarDataSource {
  private readonly baseUrl = environment.base_url;
  constructor(private readonly httpClient: HttpClient) {}

  getNavbarItems(): Observable<NavbarItem[]> {
    const petition = this.httpClient.get<NavbarItem[]>(
      `${this.baseUrl}${environment.paths}`,
    );
    return petition;
  }
}
