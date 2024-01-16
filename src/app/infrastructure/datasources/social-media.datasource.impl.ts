import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SocialMedia, SocialMediaDataSource } from '../../domain/domain-index';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.config';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaDataSourceImpl implements SocialMediaDataSource {
  private readonly baseUrl = environment.base_url;
  constructor(private readonly http: HttpClient) {}

  getSocialMedia(): Observable<SocialMedia[]> {
    const petition = this.http.get<SocialMedia[]>(
      `${this.baseUrl}${environment.links}`,
    );
    return petition;
  }
}
