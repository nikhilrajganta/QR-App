import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrComponent } from './qr/qr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static';
}
