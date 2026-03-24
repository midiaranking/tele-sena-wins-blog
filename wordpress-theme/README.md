# Blog Tele Sena — Tema WordPress

## Arquivos do Tema

```
wordpress-theme/
├── style.css                      # Estilos completos (CSS puro)
├── functions.php                  # Setup do tema, SEO, JSON-LD, helpers
├── header.php                     # Cabeçalho com logo, busca, menu, CTA
├── footer.php                     # Rodapé com social, links, disclaimer legal
├── index.php                      # Home page (hero, categorias, posts, sidebar)
├── single.php                     # Página de artigo individual
├── category.php                   # Página de categoria/subcategoria (archive)
├── search.php                     # Página de resultados de busca
├── sidebar.php                    # Sidebar (mais lidos + CTA)
├── page-equipe.php                # Template: Equipe Tele Sena (E-E-A-T / YMYL)
├── 404.php                        # Página não encontrada
├── template-parts/
│   ├── post-card.php              # Card de post reutilizável
│   └── newsletter.php             # Widget de newsletter
├── js/
│   └── mobile-menu.js             # Toggle do menu mobile
├── assets/                        # ⬅️ Coloque aqui os logos e imagens
│   ├── logo-telesena.png
│   ├── logo-gss.png
│   └── logo-lideranca.png
└── screenshot.png                 # ⬅️ Substitua com screenshot real (1200x900)
```

## Como usar

1. Copie a pasta `wordpress-theme` para `wp-content/themes/blog-telesena/`
2. Coloque os logos na pasta `assets/`
3. Substitua `screenshot.png` por uma imagem 1200×900 do tema
4. Ative o tema no painel do WordPress
5. Configure o menu em **Aparência → Menus** (localização: Menu Principal)
6. Configure o logo em **Aparência → Personalizar → Identidade do Site**

## Estrutura de Categorias

Crie as categorias e subcategorias no WordPress:

- **Entender a Tele Sena** → O que é? / Como funciona? / Histórias de ganhadores
- **Organizar as finanças** → Pagamentos e contas / Educação financeira / Dicas para economizar / Consumo consciente
- **Sair das dívidas** → Tipos de dívidas / Dicas para renegociar / Empréstimos e financiamentos / Nome sujo e negativação
- **Ganhar dinheiro** → Renda extra / Pequenos negócios / Internet e redes sociais / Título de capitalização / Apps e plataformas
- **Planejar o futuro** → Como guardar dinheiro / Pequenos investimentos / Realização de sonhos / Aposentadoria

## SEO incluído

- JSON-LD BreadcrumbList (categorias e posts)
- JSON-LD Article (posts individuais)
- Meta tags dinâmicas via `title-tag`
- Semântica HTML5
- Schema author para E-E-A-T (YMYL)

## Página Equipe

Crie uma página no WordPress com o título "Equipe" e selecione o template **Equipe Tele Sena**.
