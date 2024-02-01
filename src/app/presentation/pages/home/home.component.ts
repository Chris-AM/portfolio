import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../../use-cases/home/home.service';
import { HomeData } from '../../../domain/domain-index';
import { HomeLogoComponent } from './home-logo/home-logo.component';
import { HomeDescriptionComponent } from './home-description/home-description.component';
import { SocialMediaComponent } from '../../shared/social-media/social-media.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HomeLogoComponent,
    HomeDescriptionComponent,
    SocialMediaComponent,
    ExperienceComponent,
    ReferencesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public homeData = signal<HomeData>({} as HomeData);
  public logoSize = signal<number>(100);
  public stayAtTop = signal<boolean>(false);

  private readonly homeService: HomeService = inject(HomeService);

  ngOnInit(): void {
    this.getHomeData();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const position = Math.round(window.scrollY);
    if (window.scrollY > 100) {
      this.stayAtTop.set(true);
      this.logoSize.set(80);
    } else {
      this.logoSize.set(100);
      this.stayAtTop.set(false);
    }
  }

  public logoStyle() {}

  private getHomeData(): void {
    this.homeService.getHomeData().subscribe({
      next: (data) => {
        this.homeData.set(data[0]);
      },
    });
  }
}
