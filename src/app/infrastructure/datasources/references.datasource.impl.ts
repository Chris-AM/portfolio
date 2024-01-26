import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../config/environment.config';
import {
  ReferenceModel,
  ReferencesDataSource,
} from '../../domain/domain-index';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export abstract class ReferencesDataSourceImpl implements ReferencesDataSource {
  private readonly baseUrl = environment.base_url;

  constructor(private readonly http: HttpClient) {}

  getReferences(): Observable<ReferenceModel[]> {
    const petition = this.http.get<ReferenceModel[]>(
      `${this.baseUrl}${environment.references}`
    );
    return petition;
  }
}
