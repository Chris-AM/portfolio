import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HomeData } from '../../../../domain/domain-index';

@Component({
  selector: 'app-home-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './home-logo.component.html',
  styleUrl: './home-logo.component.css',
})
export class HomeLogoComponent {
  @Input() homeData: HomeData = {} as HomeData;
  @Input() logoSize = 0;
}
