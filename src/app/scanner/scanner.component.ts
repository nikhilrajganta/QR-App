import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.scss',
})
export class ScannerComponent implements OnInit {
  @ViewChild('video', { static: true })
  videoElement!: ElementRef<HTMLVideoElement>;
  public scannedResult: string = '';
  private qrScanner!: QrScanner;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startScanner();
  }

  startScanner() {
    this.qrScanner = new QrScanner(
      this.videoElement.nativeElement,
      (result) => this.onDecode(result),
      {
        returnDetailedScanResult: true,
      }
    );

    this.qrScanner.start();
  }
  copyToClipboard() {
    if (this.scannedResult) {
      navigator.clipboard
        .writeText(this.scannedResult)
        .then(() => {
          console.log('Copied to clipboard:', this.scannedResult);
          alert('Copied to clipboard!');
        })
        .catch((err) => {
          console.error('Could not copy text: ', err);
        });
    }
  }

  onDecode(result: any) {
    this.scannedResult = result.data;
    this.cdr.markForCheck(); // Trigger change detection
    console.log('Decoded QR Code:', this.scannedResult);
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      QrScanner.scanImage(file)
        .then((result) => {
          this.scannedResult = result;
          console.log('Decoded QR Code:', this.scannedResult);
        })
        .catch((error) => {
          console.error('Error scanning QR code:', error);
        });
    }
  }

  ngOnDestroy() {
    this.qrScanner.stop();
    this.qrScanner.destroy();
  }
}
