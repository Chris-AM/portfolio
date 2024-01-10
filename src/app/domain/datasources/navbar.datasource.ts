import { Observable } from 'rxjs';
import { NavbarItem } from '../models/navbar-item';

export abstract class NavbarDataSource {
  abstract getNavbarItems(): Observable<NavbarItem[]>;
}
