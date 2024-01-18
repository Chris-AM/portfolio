import { Observable } from 'rxjs';
import { ReferenceModel } from '../domain-index';

export abstract class ReferencesDataSource {
  abstract getReferences(): Observable<ReferenceModel[]>;
}
