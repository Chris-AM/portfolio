import { Injectable } from '@angular/core';
import { HomePageDataSourceImpl } from '../../infrastructure/datasources/home-page.datasource.impl';
import { Observable } from 'rxjs';
import { HomeData } from '../../domain/domain-index';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private readonly dataSource: HomePageDataSourceImpl) {}

  getHomeData(): Observable<HomeData[]> {
    return this.dataSource.getHomeData();
  }
}
