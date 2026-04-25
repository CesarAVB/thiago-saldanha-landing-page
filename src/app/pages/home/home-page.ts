import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeStatusComponent } from '../../components/badge-status/badge-status';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, BadgeStatusComponent],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerFade', [
      transition(':enter', [
        query('.stagger-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
  }

  scrollToContact() {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToServices() {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  sendWhatsApp(event: Event) {
    event.preventDefault();
    const nome = (document.getElementById('wa-nome') as HTMLInputElement).value;
    const email = (document.getElementById('wa-email') as HTMLInputElement).value;
    const mensagem = (document.getElementById('wa-mensagem') as HTMLTextAreaElement).value;

    const texto = `Olá! Meu nome é ${nome} (${email}). ${mensagem}`;
    const url = `https://wa.me/5521999291477?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }
}
