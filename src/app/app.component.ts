import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { QrComponent } from './qr/qr.component';
import { ScannerComponent } from './scanner/scanner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QrComponent, ScannerComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static';

  opengithub() {
    window.open('https://github.com/nikhilrajganta/QR-App', '_blank');
  }
}
