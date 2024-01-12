import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { HomeService } from '../../../use-cases/home/home.service';
import { HomeData } from '../../../domain/domain-index';
import { HomeLogoComponent } from './home-logo/home-logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HomeLogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public homeData = signal<HomeData>({} as HomeData);
  private readonly homeService: HomeService = inject(HomeService);
  ngOnInit(): void {
    this.getHomeData();
  }

  private getHomeData(): void {
    this.homeService.getHomeData().subscribe({
      next: (data) => {
        this.homeData.set(data[0]);
      },
    });
  }
}
