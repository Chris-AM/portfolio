import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { SocialMedia } from '../../../domain/domain-index';
import { SocialMediaService } from '../../../use-cases/social-media/social-media.service';

@Component({
  selector: 'app-social-media',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent implements OnInit {
  @Input() showJustIcons = false;
  public socialMedia = signal<SocialMedia[]>([]);

  constructor(private readonly service: SocialMediaService) {}

  ngOnInit(): void {
    this.getSocialMedia();
  }

  public copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }

  private getSocialMedia(): void {
    this.service.getSocialMedia().subscribe({
      next: (data) => {
        this.socialMedia.set(data);
      },
    });
  }
}
