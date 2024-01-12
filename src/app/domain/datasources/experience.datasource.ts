import { Observable } from 'rxjs';
import { ExperienceModel } from '../models/experience.model';

export abstract class ExperienceDataSource {
  abstract getExperience(): Observable<ExperienceModel[]>;
}
