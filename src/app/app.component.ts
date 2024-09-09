import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrComponent } from './qr/qr.component';
import { environment } from '../env';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static';

  ngOnInit() {
    this.loadAdsenseScript();
  }

  loadAdsenseScript() {
    const script = document.createElement('script');
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${environment.adsensePublisherId}`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }
  opengithub() {
    window.open('https://github.com/nikhilrajganta/QR-App', '_blank');
  }
}
