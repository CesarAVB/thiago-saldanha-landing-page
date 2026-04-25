import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="main-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-text">
              <h3>Thiago Saldanha</h3>
              <p>Personal Trainer e Especialista em Boxe comprometido com resultados reais.</p>
              <br>
              <p>CREF 012345-G/RJ</p>
            </div>
          </div>
          <div class="footer-nav">
            <strong>NAVEGAÇÃO</strong>
            <a href="#home">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </div>
          <div class="footer-nav">
            <strong>CONTATO</strong>
            <span>(21) 99929-1477</span>
            <a href="https://wa.me/5521999291477" target="_blank">WhatsApp</a>
            <a href="https://instagram.com/thiagosaldanha.boxe" target="_blank">&#64;thiagosaldanha.boxe</a>
            <span>thiagosaldanha.com.br</span>
          </div>
          <div class="footer-nav">
            <strong>LOCALIZAÇÃO</strong>
            <span>Centro, Rio de Janeiro - RJ</span>
            <span>Brasil</span>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{currentYear}} Thiago Saldanha — Todos os direitos reservados. Personal Trainer · Especialista em Boxe</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .main-footer {
      background: #080808;
      padding: 80px 0 40px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .footer-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 60px;
    }
    .footer-brand {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .footer-logo {
      height: 50px;
      filter: drop-shadow(0 0 10px rgba(192, 57, 43, 0.3));
    }
    .brand-text h3 {
      font-size: 1.5rem;
      margin-bottom: 4px;
      color: white;
    }
    .brand-text p {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
      margin: 0;
    }
    .footer-nav {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .footer-nav a {
      font-size: 0.9rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.7);
      transition: 0.3s;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .footer-nav a:hover {
      color: var(--primary-color);
      transform: translateX(5px);
    }
    .footer-social {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }
    .social-btn {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      font-weight: 700;
      font-size: 0.8rem;
      color: white;
      transition: 0.3s;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .social-btn:hover {
      background: var(--primary-color);
      border-color: var(--primary-color);
      transform: translateY(-3px);
    }
    .footer-bottom {
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      text-align: center;
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.4);
    }
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 50px;
      }
      .footer-brand {
        flex-direction: column;
        justify-content: center;
      }
      .footer-social {
        justify-content: center;
      }
      .footer-nav a:hover {
        transform: translateY(-3px);
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
