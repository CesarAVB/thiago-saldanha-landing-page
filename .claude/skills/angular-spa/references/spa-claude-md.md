# Template do CLAUDE.md gerado para cada projeto Angular SPA

Este arquivo é usado pelo Passo 5 da angular-spa para gerar o `CLAUDE.md`
que acompanha o projeto. Substituir os placeholders antes de gravar.

Placeholders: `{SPA_PROJECT_NAME}`, `{SPA_REPO_NAME}`

---

## Conteúdo do CLAUDE.md a ser gerado

```markdown
# CLAUDE.md

## Contexto do Projeto

Este projeto foi gerado automaticamente pela skill angular-spa.

- **Framework**: Angular 20 — componentes standalone, sem NgModule
- **Projeto**: `{SPA_PROJECT_NAME}`
- **Repositório**: `{SPA_REPO_NAME}`
- **Tipo**: SPA standalone (sem backend próprio)

---

## Princípios de Design (Impeccable)

Este projeto segue os princípios do [Impeccable](https://github.com/pbakaus/impeccable).
Se você ainda não instalou:

```bash
git clone https://github.com/pbakaus/impeccable.git /tmp/impeccable
cp -r /tmp/impeccable/dist/claude-code/.claude ./
```

### Anti-padrões a evitar sempre

- **Fontes**: nunca usar Inter ou Arial — usar `system-ui` ou uma web font com personalidade
- **Cores neutras**: nunca cinza puro (#6c757d, #aaa) — sempre matizar levemente (quente ou frio)
- **Preto/branco puros**: usar quase-preto (#1c1917) e quase-branco (#f7f6f3)
- **Cards aninhados**: não colocar card dentro de card — usar listas, tabelas ou seções
- **Texto cinza sobre fundo colorido**: sempre garantir contraste WCAG AA
- **Easing bounce/elástico**: usar `ease-out` — nunca animações que "saltam"

### Sempre incluir

```css
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```

---

## Regras do projeto Angular

### Nomenclatura de arquivos (Angular 20)

O CLI do Angular 20 não adiciona sufixos automáticos. Seguir estas convenções:

| Tipo             | Nome do arquivo          | Exemplo                |
|------------------|--------------------------|------------------------|
| Componente       | `nome.ts`                | `spinner.ts`           |
| Service global   | `nome.ts`                | `loading.ts`           |
| Service feature  | `[feature].ts`           | `clima.ts`             |
| Interceptor      | `nome-interceptor.ts`    | `loading-interceptor.ts` |
| Model            | `[nome].ts`              | `clima-response.ts`    |
| Enum             | `[nome-enum].ts`         | `tipo-clima.ts`        |
| Rotas            | `[feature].routes.ts`    | `clima.routes.ts`      |
| Page principal   | `[feature]-page.ts`      | `clima-page.ts`        |

### Estrutura de pastas

```
src/app/
  components/   → spinner, alert, footer, badge-status
  services/     → loading, alert [+ http-base, loading-interceptor se houver HTTP]
  pages/        → [feature]/ com [feature]-page + routes [+ service se houver HTTP]
  shared/
    models/     → interfaces TypeScript
    enums/      → enums TypeScript
  guards/       → auth guard (se necessário)
```

### Padrões obrigatórios

- Componentes **standalone** — sem NgModule
- `inject()` em vez de constructor injection
- `styleUrl` (singular) — não `styleUrls`
- **ReactiveForms** em todos os formulários
- Sem arquivos `.spec.ts`
- HTTP (se houver) passa pelo `HttpBaseService`
- Spinner ativo via `loading-interceptor` (automático, se HTTP presente)
- Alertas via `AlertService.sucesso()` / `AlertService.erro()`

---

## Comandos Impeccable disponíveis

Após instalar o Impeccable, use estes comandos no Claude Code:

| Comando | Quando usar |
|---------|-------------|
| `/audit` | Antes de cada PR — verifica acessibilidade e responsividade |
| `/polish` | Refinamento final de qualquer componente ou página |
| `/critique` | Revisão de UX: hierarquia, clareza e fluxo |
| `/normalize` | Alinhar um componente novo ao sistema de design existente |
| `/animate` | Adicionar transições e movimento intencional |
| `/colorize` | Aplicar cor estratégica onde está monótono |
| `/bolder` | Amplificar páginas que parecem sem personalidade |
| `/quieter` | Reduzir ruído visual em páginas sobrecarregadas |
| `/distill` | Simplificar componentes complexos |
| `/delight` | Adicionar microinterações e momentos de alegria |
| `/harden` | Garantir tratamento de erros e estados vazios |
```
