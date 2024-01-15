import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-description',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './home-description.component.html',
  styleUrl: './home-description.component.css',
})
export class HomeDescriptionComponent {
  @Input() homeDescriptionTitle: string = '';
  @Input() homeDescription: string = '';
  @Input() homeDescriptionImage: string = '';
}
