# Thiago Saldanha · Personal Trainer & Treinador de Boxe — Landing Page

Landing page profissional desenvolvida para o **Thiago Saldanha**, profissional de Educação Física, Personal Trainer e Treinador de Boxe (FPERJ). O objetivo é apresentar seus serviços, perfil profissional e facilitar o contato de novos clientes via WhatsApp.

---

## Seções

| Seção | Descrição |
|---|---|
| **Cabeçalho** | Navegação fixa com links âncora para cada seção e ícone de marca |
| **Início** | Apresentação principal com vídeo de fundo e CTA para WhatsApp |
| **Sobre** | Perfil profissional e experiência em musculação e boxe |
| **Serviços** | Consultoria Online, Personal Trainer Presencial e Treinamento de Boxe |
| **Contato** | Informações de contato direto e formulário integrado |
| **Rodapé** | Informações institucionais e links rápidos |

---

## Tecnologias

| Ferramenta | Versão |
|---|---|
| [React](https://react.dev) | 18 |
| [TypeScript](https://www.typescriptlang.org) | 5 |
| [Vite](https://vitejs.dev) | 5 |
| [Tailwind CSS](https://tailwindcss.com) | 3 |
| [shadcn/ui](https://ui.shadcn.com) |  |
| [Framer Motion](https://www.framer.com/motion) | 12 |
| [Lucide React](https://lucide.dev) | |

---

## Pré-requisitos

- [Node.js](https://nodejs.org) 18 ou superior
- [Bun](https://bun.sh) (Recomendado) ou npm

---

## Como rodar localmente

```sh
# 1. Clone o repositório
git clone https://github.com/Guto/landing-page-thiago.git
cd landing-page-thiago

# 2. Instale as dependências
bun install

# 3. Inicie o servidor de desenvolvimento
bun run dev
```

---

## Estrutura do projeto

```
src/
 assets/                 # Imagens, logos e vídeo de fundo
 components/
    Header.tsx          # Cabeçalho com navegação
    HeroSection.tsx     # Seção inicial com vídeo
    AboutSection.tsx    # Seção sobre o profissional
    ServicesSection.tsx # Seção de serviços
    ContactSection.tsx  # Formulário de contato
    Footer.tsx          # Rodapé
    ui/                 # Componentes base do shadcn/ui
 hooks/                  # Hooks personalizados
 lib/                    # Utilitários (ex: cn)
 pages/                  # Páginas da aplicação
```

---

## Licença

Projeto de uso privado. Todos os direitos reservados.
