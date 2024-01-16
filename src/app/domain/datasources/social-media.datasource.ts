import { Observable } from 'rxjs';
import { SocialMedia } from '../domain-index';

export abstract class SocialMediaDataSource {
  abstract getSocialMedia(): Observable<SocialMedia[]>;
}
