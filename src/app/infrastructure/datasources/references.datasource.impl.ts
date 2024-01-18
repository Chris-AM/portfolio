import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../config/environment.config';
import { ReferenceModel } from '../../domain/domain-index';

@Injectable({ providedIn: 'root' })
export abstract class ReferencesDataSourceImpl implements ReferenceModel {
  private readonly baseUrl = environment.base_url;

  constructor(private readonly http: HttpClient) {}
}
