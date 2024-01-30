import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LinkItem } from '../../../domain/domain-index';
import { LinkService } from '../../../use-cases/navbar/link.service';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent implements OnInit {
  public linkItems = signal<LinkItem[]>([]);

  private readonly navService: LinkService = inject(LinkService);
  constructor() {}

  ngOnInit(): void {
    this.getNavbarItems();
  }

  private getNavbarItems(): void {
    this.navService.getNavbarItems().subscribe({
      next: (items) => {
        this.linkItems.set(items);
      },
    });
  }
}
