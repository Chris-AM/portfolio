import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
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
  public logoSize = signal<number>(100);
  public oldLogoSize = signal<number>(80);
  public stayAtTop = signal<boolean>(false);

  private readonly homeService: HomeService = inject(HomeService);

  ngOnInit(): void {
    this.getHomeData();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = Math.round(window.scrollY);
    const newLogoSize = 80 - (scroll * 4) / 2;
    if (newLogoSize < this.oldLogoSize()) {
      if (newLogoSize > 40) {
        this.logoSize.set(newLogoSize);
        this.oldLogoSize.set(newLogoSize);
        this.stayAtTop.set(false);
      } else {
        this.stayAtTop.set(true);
      }
    } else {
      this.logoSize.set(newLogoSize);
      this.stayAtTop.set(false);
    }
  }

  public logoStyle() {
    return {
      display: 'flex',
      position: this.stayAtTop() ? 'fixed' : 'relative',
      top: this.stayAtTop() ? '3vh' : 'auto',
      zIndex: this.stayAtTop() ? '999' : 'auto',
      border: this.stayAtTop() ? '1px solid black' : 'none',
      borderRadius: this.stayAtTop() ? '50%' : 'none',
      boxShadow: this.stayAtTop()
        ? '0px 0px 10px 0px rgba(0,0,0,0.75)'
        : 'none',
    };
  }

  private getHomeData(): void {
    this.homeService.getHomeData().subscribe({
      next: (data) => {
        this.homeData.set(data[0]);
      },
    });
  }
}
