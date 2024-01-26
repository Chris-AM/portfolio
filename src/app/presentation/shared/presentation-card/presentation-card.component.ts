import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css',
})
export class PresentationCardComponent {
  @Input() public title: string = '';
  @Input() public logo: string = '';
  @Input() public subTitle: string = '';
  @Input() public description: string = '';
}
