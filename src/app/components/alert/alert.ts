import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (alertService.alert(); as alert) {
      <div class="alert-container" [ngClass]="alert.type">
        <p>{{ alert.message }}</p>
        <button (click)="alertService.clear()">&times;</button>
      </div>
    }
  `,
  styles: [`
    .alert-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 15px;
      color: white;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      animation: slideIn 0.3s ease-out;
    }
    .success { background-color: #27ae60; }
    .error { background-color: #c0392b; }
    .info { background-color: #2980b9; }
    button {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `]
})
export class AlertComponent {
  alertService = inject(AlertService);
}
