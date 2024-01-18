import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ExperienceDataSourceImpl } from '../../infrastructure/datasources/experience.datasource.impl';
import { ExperienceModel } from '../../domain/domain-index';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private readonly datasource: ExperienceDataSourceImpl) {}

  getExperience(): Observable<ExperienceModel[]> {
    const experience = this.datasource.getExperience();
    return experience;
  }
}
