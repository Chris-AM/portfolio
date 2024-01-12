import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageDataSource, HomeData } from '../../domain/domain-index';
import { environment } from '../../config/environment.config';

@Injectable({
  providedIn: 'root',
})
export class HomePageDataSourceImpl implements HomePageDataSource {
  private readonly baseUrl = environment.base_url;
  constructor(private readonly httpClient: HttpClient) {}

  getHomeData(): Observable<HomeData[]> {
    const petition = this.httpClient.get<HomeData[]>(
      `${this.baseUrl}${environment.home}`,
    );
    return petition;
  }
}
