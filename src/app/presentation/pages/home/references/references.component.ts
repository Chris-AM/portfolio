import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ReferencesService } from '../../../../use-cases/references/references.service';
import { ReferenceModel } from '../../../../domain/domain-index';
import { PresentationCardComponent } from '../../../shared/presentation-card/presentation-card.component';

@Component({
  selector: 'app-references',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PresentationCardComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css',
})
export class ReferencesComponent implements OnInit {
  public references = signal<ReferenceModel[]>([]);

  private readonly referenceService: ReferencesService =
    inject(ReferencesService);

  ngOnInit(): void {
    this.getAllReferences();
  }

  private getAllReferences(): void {
    this.referenceService.getReferences().subscribe({
      next: (references) => {
        this.references.set(references);
      },
      error: (error) => {},
    });
  }
}
