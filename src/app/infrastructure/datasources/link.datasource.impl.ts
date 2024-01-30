import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LinkItem, LinksDataSource } from '../../domain/domain-index';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.config';

@Injectable({
  providedIn: 'root',
})
export class LinksDatasourceImpl implements LinksDataSource {
  private readonly baseUrl = environment.base_url;
  constructor(private readonly httpClient: HttpClient) {}

  getNavbarItems(): Observable<LinkItem[]> {
    const petition = this.httpClient.get<LinkItem[]>(
      `${this.baseUrl}${environment.paths}`,
    );
    return petition;
  }
}
