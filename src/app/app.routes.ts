import { Routes } from '@angular/router';
import { QrComponent } from './qr/qr.component';
import { ScannerComponent } from './scanner/scanner.component';

export const routes: Routes = [
  {
    path: '',
    component: QrComponent,
  },
  {
    path: 'scanner',
    component: ScannerComponent,
  },
];
