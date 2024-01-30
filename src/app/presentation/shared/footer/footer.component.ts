import { Component } from '@angular/core';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
