import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ExperienceModel } from '../../../../domain/domain-index';
import { ExperienceService } from '../../../../use-cases/experience/experience.service';
import { PresentationCardComponent } from '../../../shared/presentation-card/presentation-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PresentationCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  public experience = signal<ExperienceModel[]>([]);

  private readonly experienceService: ExperienceService =
    inject(ExperienceService);

  constructor() {}

  ngOnInit(): void {
    this.getExperience();
  }

  private getExperience(): void {
    this.experienceService.getExperience().subscribe({
      next: (data) => {
        this.experience.set(data);
      },
    });
  }
}
