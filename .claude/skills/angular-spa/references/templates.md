# Templates de Boilerplate — Angular SPA

Copiar estes templates exatamente, substituindo os placeholders pelo nome real do projeto.

---

## index.html

O `index.html` carrega Bootstrap 5 e Font Awesome 6 via CDN.
Impeccable é instalado separadamente como sistema de comandos para o Claude Code — ver README.md.

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>{SPA_PROJECT_NAME}</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- Bootstrap 5 -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

  <!-- Font Awesome 6 -->
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
  <app-root></app-root>

  <!-- Bootstrap 5 JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## styles.css (global)

Seguir os princípios Impeccable: neutros matizados (nunca cinza puro), tipografia com
hierarquia real, transições suaves com `ease-out`, e respeitar `prefers-reduced-motion`.

```css
/* src/styles.css */

/* =============================================
   Variáveis CSS globais
   Princípio Impeccable: neutros matizados,
   nunca cinza puro nem preto absoluto.
   ============================================= */
:root {
  /* Cores principais */
  --color-primary:   #2563eb;
  --color-secondary: #64748b;
  --color-success:   #16a34a;
  --color-danger:    #dc2626;
  --color-warning:   #d97706;
  --color-info:      #0891b2;

  /* Neutros matizados (levemente quentes) */
  --color-bg:        #f7f6f3;   /* quase-branco quente, não #fff puro */
  --color-surface:   #ffffff;
  --color-border:    #e4e2dd;
  --color-text:      #1c1917;   /* quase-preto quente, não #000 puro */
  --color-muted:     #78716c;   /* marrom-cinza, não cinza puro */

  /* Tipografia — system-ui com fallback robusto (sem Inter/Arial) */
  --font-family: system-ui, -apple-system, 'Helvetica Neue', sans-serif;
  --font-size-base: 1rem;
  --line-height: 1.6;

  /* Espaçamento */
  --spacing-xs:  0.25rem;
  --spacing-sm:  0.5rem;
  --spacing-md:  1rem;
  --spacing-lg:  1.5rem;
  --spacing-xl:  2rem;
  --spacing-2xl: 3rem;

  /* Forma */
  --border-radius-sm: 0.25rem;
  --border-radius:    0.5rem;
  --border-radius-lg: 0.75rem;

  /* Sombras suaves */
  --shadow-sm: 0 1px 2px rgba(28, 25, 23, 0.06);
  --shadow:    0 2px 8px rgba(28, 25, 23, 0.08);
  --shadow-lg: 0 8px 24px rgba(28, 25, 23, 0.10);

  /* Transições — ease-out, nunca bounce/elástico */
  --transition-fast: 120ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 350ms ease-out;
}

/* =============================================
   Reset e base
   ============================================= */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: var(--line-height);
  background-color: var(--color-bg);
  color: var(--color-text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
}

main {
  flex: 1;
}

/* =============================================
   Transições globais
   Princípio Impeccable: sempre respeitar
   preferência de movimento reduzido.
   ============================================= */
* {
  transition-duration: var(--transition-base);
  transition-timing-function: ease-out;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}

/* =============================================
   Tipografia com hierarquia real
   ============================================= */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.25;
  font-weight: 600;
  color: var(--color-text);
}

/* =============================================
   Links e foco acessível
   ============================================= */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## HttpBaseService

```typescript
// src/app/services/http-base.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpBaseService {

  private readonly baseUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${path}`)
      .pipe(catchError(this.tratarErro));
  }

  post<T>(path: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${path}`, body)
      .pipe(catchError(this.tratarErro));
  }

  put<T>(path: string, body: unknown): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${path}`, body)
      .pipe(catchError(this.tratarErro));
  }

  patch<T>(path: string, body: unknown): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}${path}`, body)
      .pipe(catchError(this.tratarErro));
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${path}`)
      .pipe(catchError(this.tratarErro));
  }

  private tratarErro(erro: unknown): Observable<never> {
    console.error('Erro na requisição HTTP:', erro);
    return throwError(() => erro);
  }
}
```

---

## LoadingService

```typescript
// src/app/services/loading.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  readonly carregando = signal(false);

  mostrar(): void { this.carregando.set(true); }
  ocultar(): void { this.carregando.set(false); }
}
```

---

## LoadingInterceptor

```typescript
// src/app/services/loading-interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.mostrar();
  return next(req).pipe(finalize(() => loadingService.ocultar()));
};
```

---

## AlertService

```typescript
// src/app/services/alert.ts
import { Injectable, signal } from '@angular/core';

export interface Alerta {
  tipo: 'sucesso' | 'erro' | 'aviso' | 'info';
  mensagem: string;
}

@Injectable({ providedIn: 'root' })
export class AlertService {
  readonly alerta = signal<Alerta | null>(null);

  sucesso(mensagem: string): void {
    this.alerta.set({ tipo: 'sucesso', mensagem });
    setTimeout(() => this.alerta.set(null), 4000);
  }

  erro(mensagem: string): void {
    this.alerta.set({ tipo: 'erro', mensagem });
    setTimeout(() => this.alerta.set(null), 5000);
  }

  limpar(): void { this.alerta.set(null); }
}
```

---

## SpinnerComponent

```typescript
// src/app/components/spinner/spinner.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css'
})
export class SpinnerComponent {
  protected readonly loadingService = inject(LoadingService);
}
```

```html
<!-- src/app/components/spinner/spinner.html -->
@if (loadingService.carregando()) {
  <div class="spinner-overlay">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Carregando...</span>
    </div>
  </div>
}
```

```css
/* src/app/components/spinner/spinner.css */
.spinner-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
```

---

## AlertComponent

```typescript
// src/app/components/alert/alert.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class AlertComponent {
  protected readonly alertService = inject(AlertService);

  get classeBootstrap(): string {
    const mapa: Record<string, string> = {
      sucesso: 'alert-success',
      erro:    'alert-danger',
      aviso:   'alert-warning',
      info:    'alert-info'
    };
    return mapa[this.alertService.alerta()?.tipo ?? ''] ?? '';
  }
}
```

```html
<!-- src/app/components/alert/alert.html -->
@if (alertService.alerta(); as alerta) {
  <div class="alert {{ classeBootstrap }} alert-dismissible fade show position-fixed"
       role="alert">
    {{ alerta.mensagem }}
    <button type="button" class="btn-close" (click)="alertService.limpar()"></button>
  </div>
}
```

```css
/* src/app/components/alert/alert.css */
.alert {
  top: 1rem;
  right: 1rem;
  z-index: 1055;
  min-width: 300px;
  max-width: 500px;
}
```

---

## FooterComponent

```typescript
// src/app/components/footer/footer.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {}
```

```html
<!-- src/app/components/footer/footer.html -->
<footer class="footer mt-auto py-3 bg-light border-top">
  <div class="container text-center">
    <small class="text-muted">
      © 2026
      <a href="https://portfolio.cesaraugusto.dev.br/" target="_blank" rel="noopener">
        César Augusto Vieira Bezerra
      </a>.
      Todos os direitos reservados.
    </small>
  </div>
</footer>
```

```css
/* src/app/components/footer/footer.css */
.footer {
  font-size: 0.85rem;
}
```

---

## BadgeStatusComponent

```typescript
// src/app/components/badge-status/badge-status.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge-status.html',
  styleUrl: './badge-status.css'
})
export class BadgeStatusComponent {
  @Input() valor = '';

  get classeBootstrap(): string {
    const v = this.valor?.toUpperCase();
    if (['ATIVO', 'APROVADO', 'CONFIRMADO', 'REALIZADO', 'PAGO'].includes(v)) return 'bg-success';
    if (['INATIVO', 'CANCELADO', 'REPROVADO', 'VENCIDO', 'REJEITADO'].includes(v)) return 'bg-danger';
    if (['PENDENTE', 'AGENDADO', 'PARCIAL', 'AGUARDANDO'].includes(v)) return 'bg-warning text-dark';
    return 'bg-secondary';
  }
}
```

```html
<!-- src/app/components/badge-status/badge-status.html -->
<span class="badge {{ classeBootstrap }}">{{ valor }}</span>
```

```css
/* src/app/components/badge-status/badge-status.css */
.badge { font-size: 0.8rem; }
```

---

## Environments

```typescript
// src/environments/environment.ts  ← produção
export const environment = {
  production: true,
  apiUrl: ''  // definido em tempo de build via angular.json fileReplacements
};
```

```typescript
// src/environments/environment.development.ts  ← desenvolvimento
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1'
};
```

> Para que o Angular 20 use `environment.development.ts` em `ng serve`, configurar
> `angular.json` → `fileReplacements` na configuração `development`.

---

## .gitignore

```gitignore
# Dependências
node_modules/

# Build
dist/
.angular/

# Ambiente
.env
*.env.local

# Logs
*.log
npm-debug.log*

# SO
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.iml
```

---

## README.md template

```markdown
# {SPA_PROJECT_NAME}

[Descrição do que a aplicação faz em 2 a 3 frases.]

## Tecnologias

| Tecnologia   | Versão |
|--------------|--------|
| Angular      | 20     |
| TypeScript   | 5.x    |
| Bootstrap    | 5.3    |
| Font Awesome | 6.5    |
| RxJS         | 7.x    |

## Pré-requisitos

- Node.js 22+
- Angular CLI 20: `npm install -g @angular/cli`

## Como rodar localmente

1. Clone o repositório e instale as dependências:
   ```bash
   git clone <url-do-repositorio>
   cd {SPA_REPO_NAME}
   npm install
   ```

2. Inicie a aplicação:
   ```bash
   ng serve
   ```

3. Acesse: `http://localhost:4200`

<!-- Se a SPA consome uma API externa, incluir esta seção: -->
## Como configurar a URL da API externa

Edite `src/environments/environment.development.ts` e altere o valor de `apiUrl`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://api-externa.exemplo.com'
};
```

Em produção, configure `apiUrl` em `src/environments/environment.ts`.
<!-- Fim da seção condicional -->

## Impeccable — sistema de design para Claude Code

Este projeto usa [Impeccable](https://github.com/pbakaus/impeccable), um sistema de skills
e comandos de design para IA que orienta o Claude Code a produzir interfaces de alta qualidade.

**Instalação (por projeto):**
```bash
# Clone o impeccable e copie os arquivos para o projeto
git clone https://github.com/pbakaus/impeccable.git /tmp/impeccable
cp -r /tmp/impeccable/dist/claude-code/.claude ./
```

**Instalação global (todos os projetos):**
```bash
cp -r /tmp/impeccable/dist/claude-code/.claude ~/.claude/
```

**Comandos disponíveis no Claude Code após instalar:**

| Comando | O que faz |
|---------|-----------|
| `/audit` | Verifica acessibilidade, performance e responsividade |
| `/polish` | Refinamento final antes do lançamento |
| `/critique` | Revisão de UX: hierarquia, clareza, fluxo |
| `/normalize` | Alinha com o sistema de design |
| `/animate` | Adiciona movimento intencional |
| `/colorize` | Aplica cor estratégica |
| `/bolder` | Amplifica designs monótonos |
| `/quieter` | Atenua designs excessivos |
| `/distill` | Remove complexidade desnecessária |
| `/delight` | Adiciona momentos de alegria |
| `/harden` | Trata erros, i18n e casos extremos |

## Estrutura de pastas

```
src/app/
  components/  → spinner, alert, footer, badge-status
  services/    → loading, alert [+ http-base, loading-interceptor se houver HTTP]
  pages/       → um subdiretório por feature ([feature]-page + routes [+ service se houver HTTP])
  shared/
    models/    → interfaces TypeScript
    enums/     → enums TypeScript
  guards/      → route guards (apenas se houver autenticação)
```
```
