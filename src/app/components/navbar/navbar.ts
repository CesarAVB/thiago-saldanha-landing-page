import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.scrolled]="isScrolled" [class.mobile-open]="isMobileMenuOpen">
      <div class="container nav-content">
        <a routerLink="/" class="logo" (click)="closeMenu()">
          <img src="assets/logo_text.png" alt="Thiago Saldanha" class="logo-img">
        </a>
        
        <div class="nav-actions">
          <ul class="nav-links">
            <li><a routerLink="/" fragment="home" (click)="closeMenu()">Início</a></li>
            <li><a routerLink="/" fragment="sobre" (click)="closeMenu()">Sobre</a></li>
            <li><a routerLink="/" fragment="servicos" (click)="closeMenu()">Serviços</a></li>
            <li><a routerLink="/" fragment="contato" (click)="closeMenu()">Contato</a></li>
            <li class="mobile-only-btn">
              <a href="https://wa.me/5521999291477?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula." target="_blank" class="nav-btn" (click)="closeMenu()">Agendar Aula</a>
            </li>
          </ul>
          
          <a href="https://wa.me/5521999291477?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula." target="_blank" class="nav-btn desktop-btn">Agendar Aula</a>

          <button class="mobile-toggle" (click)="toggleMenu()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 30px 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      background: transparent;
    }
    
    nav.scrolled {
      background: rgba(10, 10, 10, 0.85);
      backdrop-filter: blur(15px);
      padding: 15px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo-img {
      height: 45px;
      transition: 0.3s;
      filter: drop-shadow(0 0 10px rgba(192, 57, 43, 0.2));
    }
    
    .nav-scrolled .logo-img {
      height: 38px;
    }
    
    .nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    .nav-links a {
      font-family: var(--font-heading);
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      transition: 0.3s;
    }
    
    .nav-links a:hover {
      color: var(--primary-color);
    }
    
    .nav-btn {
      background: var(--primary-color);
      color: white !important;
      padding: 10px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(192, 57, 43, 0.3);
    }
    
    .nav-btn:hover {
      background: #a93226;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(192, 57, 43, 0.4);
    }

    .desktop-btn {
      display: inline-block;
      margin-left: 32px;
    }

    .mobile-only-btn {
      display: none;
    }

    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 10px;
      z-index: 1001;
    }

    .bar {
      width: 25px;
      height: 2px;
      background-color: white;
      transition: 0.3s;
    }

    @media (max-width: 991px) {
      .mobile-toggle {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        background: #0a0a0a;
        flex-direction: column;
        justify-content: center;
        transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: -10px 0 30px rgba(0,0,0,0.5);
      }

      .mobile-open .nav-links {
        right: 0;
      }

      .mobile-open .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
      .mobile-open .bar:nth-child(2) { opacity: 0; }
      .mobile-open .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

      .desktop-btn {
        display: none;
      }
      
      .mobile-only-btn {
        display: block;
        margin-top: 20px;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
