import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'app-floating-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LinksComponent],
  templateUrl: './floating-navbar.component.html',
  styleUrl: './floating-navbar.component.css',
})
export class FloatingNavbarComponent {}
