import { Observable } from 'rxjs';
import { LinkItem } from '../models/link-item';

export abstract class LinksDataSource {
  abstract getNavbarItems(): Observable<LinkItem[]>;
}
