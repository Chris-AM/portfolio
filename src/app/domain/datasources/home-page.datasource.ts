import { Observable } from 'rxjs';
import { HomeData } from '../models/home-data.model';

export abstract class HomePageDataSource {
  abstract getHomeData(): Observable<HomeData[]>;
}
