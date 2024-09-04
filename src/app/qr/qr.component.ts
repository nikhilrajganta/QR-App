import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss',
})
export class QrComponent {
  inputText: string = '';
  qrCodeUrl: string | undefined;
  warning: string = '';

  generateQRCode() {
    if (this.inputText.length == 0 || !this.inputText.trim()) {
      this.warning = 'Invalid Input';
      return;
    }
    this.warning = '';

    if (this.inputText) {
      QRCode.toDataURL(this.inputText)
        .then((url) => {
          this.qrCodeUrl = url;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
}
