---
name: angular-spa
description: >
  Use esta skill quando o usuário quiser gerar uma aplicação Angular 20 standalone (SPA) sem
  necessidade de backend Spring Boot. Disparar imediatamente quando o usuário disser "crie uma
  SPA em Angular", "quero uma aplicação Angular sem backend", "gera um projeto Angular só com
  frontend", "quero uma página web em Angular", "cria um site em Angular", "gera o scaffolding
  Angular para uma SPA", "cria as páginas Angular", ou descrever um sistema que funciona
  puramente no browser (sem backend próprio). Usar esta skill também quando a aplicação Angular
  consome APIs externas (ex.: ViaCEP, OpenWeatherMap, etc.) mas não tem backend próprio.
  Não usar quando houver um frontend-context.json de um projeto Spring Boot — nesse caso usar
  angular-scaffolder.
---

# Angular SPA Scaffolder

Esta skill gera a estrutura completa de um projeto Angular 20 standalone (SPA) a partir da
descrição do usuário — sem depender de um `frontend-context.json` ou projeto backend.

Ideal para:
- Páginas estáticas ou interativas sem backend próprio
- Ferramentas client-side (calculadoras, dashboards, conversores, etc.)
- SPAs que consomem APIs externas de terceiros
- Protótipos e provas de conceito

## Passo 1 — Ler os arquivos de referência

Antes de gerar qualquer coisa, ler os dois arquivos de referência:

- `references/templates.md` — Templates exatos para services, components, environments,
  CSS global, index.html, footer, spinner, alert e estrutura dos componentes.
- `references/spa-claude-md.md` — Template do `CLAUDE.md` incluído no projeto gerado.

## Passo 2 — Extrair informações da descrição do usuário

A entrada é a descrição em linguagem natural do usuário. Extrair:

- **Nome do projeto**: derivar em `kebab-case` da descrição (ex.: `calculadora-imc`, `painel-clima`)
  - `{SPA_PROJECT_NAME}` = nome do projeto (ex.: `calculadora-imc`)
  - `{SPA_REPO_NAME}` = mesmo valor
- **Descrição curta**: 1 a 2 frases sobre o que o sistema faz
- **Pages/features**: cada funcionalidade principal vira uma page em `app/pages/[feature]/`
- **API externa**: se houver, qual é a URL base? (usado em `environment.development.ts`)
- **Models**: estruturas de dados que a aplicação manipula (derivadas da descrição)
- **Enums**: status, tipos ou categorias enumeradas (se houver)
- **Autenticação**: há necessidade de guard de rotas?

> Se houver ambiguidade sobre as pages ou features, inferir a partir da descrição e continuar.
> Não bloquear para pedir confirmação — gerar e deixar o usuário ajustar.

**Sobre os services globais:**

- Se a SPA **não faz nenhuma chamada HTTP**, omitir `http-base.ts`, `loading-interceptor.ts`
  e remover o interceptor do `app.config.ts`. Manter `loading.ts` e `alert.ts` pois controlam
  feedback visual local.
- Se a SPA **consome API externa**, incluir todos os 4 services globais normalmente.

## Passo 3 — Exibir o Manifesto de Arquivos

Antes de escrever qualquer código, exibir o manifesto com os arquivos que serão gerados:

```
## Arquivos que serão gerados

### Services globais
1. src/app/services/loading.ts
2. src/app/services/alert.ts
[3. src/app/services/http-base.ts         ← apenas se houver chamadas HTTP]
[4. src/app/services/loading-interceptor.ts ← apenas se houver chamadas HTTP]

### Components shared
5. src/app/components/spinner/spinner.ts|html|css
6. src/app/components/alert/alert.ts|html|css
7. src/app/components/footer/footer.ts|html|css
8. src/app/components/badge-status/badge-status.ts|html|css

### Shared (models e enums)
9.  src/app/shared/models/[nome].ts
10. src/app/shared/enums/[nome-enum].ts

### Guards (se necessário)
N. src/app/guards/auth.ts

### Pages (por feature)
N. src/app/pages/[feature]/[feature]-page.ts|html|css
N. src/app/pages/[feature]/[feature].routes.ts
[N. src/app/pages/[feature]/[feature].ts  ← service, apenas se houver HTTP nessa feature]

### App root
N. src/app/app.ts|html|css
N. src/app/app.routes.ts
N. src/app/app.config.ts

### Environments
N. src/environments/environment.ts
N. src/environments/environment.development.ts

### Assets e config
N. src/styles.css
N. src/index.html
N. .gitignore
N. README.md
N. CLAUDE.md
```

## Passo 4 — Gerar os arquivos

### Regras gerais Angular 20

- **Angular 20** com componentes **standalone** — sem `NgModule`
- **Sem arquivos de teste** (`.spec.ts`)
- **Cada componente tem 3 arquivos**: `.ts`, `.html`, `.css`
- Usar `styleUrl` (singular) e `templateUrl` — **arquivos separados, não inline**
- **Nomes de arquivos sem sufixos** — no Angular 20 o CLI não adiciona `.component`, `.service`,
  `.pipe` etc. O arquivo é apenas `nome.ts`. O tipo é identificado pelo decorator e pela pasta.
  Exemplos: `spinner.ts` (não `spinner.component.ts`), `loading.ts` (não `loading.service.ts`)
  Exceção: arquivos de rotas mantêm `.routes.ts` para clareza de organização.
- Usar **ReactiveForms** para todos os formulários
- Nomes de arquivos em `kebab-case`
- Usar `inject()` ao invés de constructor injection sempre que possível

### Estrutura de pastas

```
src/
  app/
    components/    → componentes shared reutilizáveis
    services/      → services globais e interceptors
    pages/         → pages organizadas por feature
      [feature]/
        [feature]-page.ts|html|css   ← componente principal da page
        [feature].routes.ts
        [feature].ts                 ← service (apenas se houver HTTP)
    shared/
      models/      → interfaces TypeScript
      enums/       → enums TypeScript
    guards/        → route guards (criar se houver autenticação)
  assets/
  environments/
    environment.ts              ← produção
    environment.development.ts  ← desenvolvimento
  styles.css
  index.html
```

> **Diferença em relação ao angular-scaffolder:** pages usam `[feature]-page.ts` como
> componente principal (sem list/form/detail separados por padrão). Adaptar conforme a
> complexidade da feature — se uma feature tiver listagem + formulário, criar ambos.

### Styling — Bootstrap 5 + Font Awesome 6 + Impeccable

**Bootstrap 5** e **Font Awesome 6** são carregados via CDN no `index.html`.
Ver templates exatos em `references/templates.md`.

**CSS Global** (`src/styles.css`): usar variáveis CSS nativas (`:root { --var: value; }`),
sem SCSS. Ver template em `references/templates.md`.

#### Impeccable — sistema de design para IA

**Impeccable não é uma biblioteca CSS.** É um sistema de skills e comandos de design para Claude Code,
instalado como pasta `.claude` no projeto. Ele orienta a IA a produzir designs de alta qualidade,
evitando os anti-padrões mais comuns gerados por modelos de linguagem.

Referência: https://github.com/pbakaus/impeccable

#### Princípios de design Impeccable a aplicar no código gerado

**Tipografia:** Usar `system-ui` ou uma web font com personalidade — **nunca Inter ou Arial**.
Criar hierarquia clara com variações de peso e tamanho, não só de cor.

**Cores:** Usar neutros **matizados** (levemente quentes ou frios) — nunca cinza puro nem preto puro.
Usar OKLCH ou HSL para garantir contraste acessível. Texto cinza sobre fundo colorido é proibido.

**Espaçamento:** Espaço em branco intencional. Dar "ar" aos elementos. Não comprimir tudo.

**Movimento:** Usar `transition` com `ease-out`. Nunca bounce/elástico. Sempre incluir:
```css
@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
```

**Cards e estrutura:** Não aninhar cards dentro de cards. Nem tudo precisa de card —
listas, tabelas e seções com fundo leve resolvem melhor em muitos casos.

**Interação:** Estados de foco visíveis (`outline`/`box-shadow`). Feedback visual em hover/active.
Formulários com labels sempre visíveis (nunca só placeholder).

### Services globais (`app/services/`)

Copiar dos templates em `references/templates.md`:
- `loading.ts` — controla spinner via `signal(false)`
- `alert.ts` — controla alertas via `signal(null)`
- `http-base.ts` — **apenas se houver chamadas HTTP** — cliente genérico, usa `environment.apiUrl`
- `loading-interceptor.ts` — **apenas se houver chamadas HTTP** — spinner automático por requisição

### Components shared (`app/components/`)

Sempre presentes, independente do sistema:
- `spinner/` — overlay de loading global, controlado por `LoadingService`
- `alert/` — mensagens flutuantes, controlado por `AlertService`
- `footer/` — rodapé fixo com texto exato: `© 2026 César Augusto Vieira Bezerra`
  com link `https://portfolio.cesaraugusto.dev.br/` e `Todos os direitos reservados.`
- `badge-status/` — badge colorido para exibir valores de enum (verde/vermelho/amarelo)

### Models (`app/shared/models/`)

Interface TypeScript por estrutura de dados identificada na descrição.
**Sem sufixo no nome do arquivo.**

```typescript
// app/shared/models/nome.ts
export interface Nome {
  campo: string;
  outro: number;
}
```

### Enums (`app/shared/enums/`)

```typescript
// app/shared/enums/nome-enum.ts
export enum NomeEnum {
  VALOR_A = 'VALOR_A',
  VALOR_B = 'VALOR_B'
}
```

### Services de feature (`app/pages/[feature]/`)

Criar apenas se a feature fizer chamadas HTTP. Sem sufixo no nome do arquivo:

```typescript
// app/pages/[feature]/[feature].ts
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from '../../services/http-base';

@Injectable({ providedIn: 'root' })
export class NomeService {
  private readonly http = inject(HttpBaseService);
  private readonly path = '/endpoint';

  buscar(): Observable<NomeResponse> {
    return this.http.get<NomeResponse>(this.path);
  }
}
```

### Responsividade

- Usar classes Bootstrap 5 para grid (`container`, `row`, `col-sm-*`, `col-md-*`, `col-lg-*`)
- Garantir usabilidade em mobile (< 576px), tablet (768px) e desktop (992px+)

### Rotas (`app.routes.ts`)

```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/[primeira-feature]', pathMatch: 'full' },
  {
    path: '[feature]',
    loadChildren: () =>
      import('./pages/[feature]/[feature].routes').then(m => m.[FEATURE]_ROUTES)
  }
];
```

### Arquivo `app.config.ts`

```typescript
// Com HTTP (SPA que consome API externa):
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([loadingInterceptor]))
  ]
};

// Sem HTTP (SPA puramente estática):
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
```

### Environments

```typescript
// environment.ts (produção) — apiUrl vazio se não há API, ou URL da API externa em produção
export const environment = {
  production: true,
  apiUrl: ''
};

// environment.development.ts — URL da API externa (ex.: 'https://viacep.com.br' ou '')
export const environment = {
  production: false,
  apiUrl: ''  // preencher com a URL da API externa, se houver
};
```

## Passo 5 — Gerar o CLAUDE.md e entregar como zip

Antes de zipar, gerar o `CLAUDE.md` usando o template em `references/spa-claude-md.md`.
Substituir os placeholders `{SPA_PROJECT_NAME}` e `{SPA_REPO_NAME}` pelos valores reais.

Estrutura final do zip:

```
{SPA_PROJECT_NAME}/
  src/
    app/
      components/spinner/  alert/  footer/  badge-status/
      services/
      pages/[feature]/
      shared/models/  enums/
      guards/
      app.ts  app.html  app.css
      app.routes.ts  app.config.ts
    assets/
    environments/
    styles.css
    index.html
  .gitignore
  README.md
  CLAUDE.md
```

Salvar na pasta de trabalho do Cowork. Identificar o ID da sessão a partir dos caminhos
já usados na conversa (ex.: `/sessions/[ID-DA-SESSÃO]/mnt/Claude Cowork/`).
Nome do arquivo: `{SPA_PROJECT_NAME}.zip`

Fornecer um link `computer://` para o zip.

## Checklist de qualidade antes de entregar

- [ ] Angular 20: todos os componentes standalone (sem NgModule)
- [ ] Nenhum arquivo `.spec.ts` gerado
- [ ] Nomes de arquivo sem sufixos (`.component`, `.service`, etc.) — exceto `.routes.ts`
- [ ] Cada componente tem exatamente `.ts`, `.html` e `.css`
- [ ] Services HTTP incluídos apenas se a SPA faz chamadas HTTP
- [ ] Bootstrap 5 + Font Awesome 6 carregados via CDN no `index.html`
- [ ] `CLAUDE.md` gerado com princípios Impeccable e comandos disponíveis
- [ ] `styles.css` usa variáveis CSS nativas (`:root { --var: value; }`) — sem SCSS
- [ ] Spinner e Alert estão incluídos
- [ ] Footer presente com o texto correto
- [ ] Rotas lazy configuradas em `app.routes.ts` e por feature em `[feature].routes.ts`
- [ ] Environments gerados (`environment.ts` e `environment.development.ts`)
- [ ] `.gitignore` exclui `node_modules/`, `dist/`, `.angular/`
- [ ] README.md com instruções de setup e, se houver API externa, como configurá-la
