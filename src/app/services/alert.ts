import { Injectable, signal } from '@angular/core';

export interface Alert {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _alert = signal<Alert | null>(null);
  alert = this._alert.asReadonly();

  show(message: string, type: Alert['type'] = 'info') {
    this._alert.set({ message, type });
    setTimeout(() => this.clear(), 5000);
  }

  clear() {
    this._alert.set(null);
  }
}
