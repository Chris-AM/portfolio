import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { NavbarService } from '../../../use-cases/navbar/navbar.service';

@Component({
  selector: 'app-floating-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './floating-navbar.component.html',
  styleUrl: './floating-navbar.component.css',
})
export class FloatingNavbarComponent implements OnInit {
  private readonly navService: NavbarService = inject(NavbarService);
  constructor() {}

  ngOnInit(): void {
    this.getNavbarItems();
  }

  private getNavbarItems(): void {
    this.navService.getNavbarItems().subscribe({
      next: (items) => {
        console.log('component items => ', items);
      },
    });
  }
}
