import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge" [ngClass]="type">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    .badge {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      backdrop-blur: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 1.25rem;
    }
    
    .danger { 
      background: rgba(192, 57, 43, 0.15); 
      color: #e74c3c; 
      border-color: rgba(192, 57, 43, 0.3);
    }
    
    .gold { 
      background: rgba(212, 175, 55, 0.15); 
      color: var(--accent-color); 
      border-color: rgba(212, 175, 55, 0.3);
    }

    .success { background: rgba(39, 174, 96, 0.15); color: #2ecc71; border-color: rgba(39, 174, 96, 0.3); }
    .info { background: rgba(41, 128, 185, 0.15); color: #3498db; border-color: rgba(41, 128, 185, 0.3); }
  `]
})
export class BadgeStatusComponent {
  @Input() type: 'success' | 'warning' | 'danger' | 'info' | 'gold' = 'danger';
}
