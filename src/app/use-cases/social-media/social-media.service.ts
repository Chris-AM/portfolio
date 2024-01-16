import { Injectable } from '@angular/core';
import { SocialMediaDataSourceImpl } from '../../infrastructure/datasources/social-media.datasource.impl';
import { SocialMedia } from '../../domain/domain-index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  constructor(private readonly datasource: SocialMediaDataSourceImpl) {}

  getSocialMedia(): Observable<SocialMedia[]> {
    const socialMedia = this.datasource.getSocialMedia();
    return socialMedia;
  }
}
