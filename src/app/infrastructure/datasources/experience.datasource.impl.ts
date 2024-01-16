import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExperienceDataSource } from '../../domain/datasources/experience.datasource';
import { ExperienceModel } from '../../domain/domain-index';
import { environment } from '../../config/environment.config';

@Injectable({
  providedIn: 'root',
})
export class ExperienceDataSourceImpl implements ExperienceDataSource {
  private readonly baseUrl = environment.base_url;
  constructor(private readonly http: HttpClient) {}

  getExperience(): Observable<ExperienceModel[]> {
    const petition = this.http.get<ExperienceModel[]>(
      `${this.baseUrl}${environment.experience}`,
    );
    return petition;
  }
}
