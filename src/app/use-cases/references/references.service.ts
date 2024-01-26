import { Injectable } from '@angular/core';
import { ReferencesDataSourceImpl } from '../../infrastructure/datasources/references.datasource.impl';
import { Observable, tap } from 'rxjs';
import { ReferenceModel } from '../../domain/domain-index';

@Injectable({
  providedIn: 'root',
})
export class ReferencesService {
  constructor(private readonly datasource: ReferencesDataSourceImpl) {}

  getReferences(): Observable<ReferenceModel[]> {
    const references = this.datasource.getReferences().pipe(
      tap((reference) => {
        reference;
      })
    );
    return references;
  }
}
