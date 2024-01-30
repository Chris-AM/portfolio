import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { LinkService } from '../../../use-cases/navbar/link.service';
import { LinkItem } from '../../../domain/domain-index';
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
  public navbarItems = signal<LinkItem[]>([]);

  private readonly navService: LinkService = inject(LinkService);
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
