import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { NavbarService } from '../../../use-cases/navbar/navbar.service';
import { NavbarItem } from '../../../domain/domain-index';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-floating-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './floating-navbar.component.html',
  styleUrl: './floating-navbar.component.css',
})
export class FloatingNavbarComponent implements OnInit {
  public navbarItems = signal<NavbarItem[]>([]);

  private readonly navService: NavbarService = inject(NavbarService);
  constructor() {}

  ngOnInit(): void {
    this.getNavbarItems();
  }

  private getNavbarItems(): void {
    this.navService.getNavbarItems().subscribe({
      next: (items) => {
        this.navbarItems.set(items);
      },
    });
  }
}
