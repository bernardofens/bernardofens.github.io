# bernardofens.github.io – Portfólio Pessoal

[![GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-blue)](https://bernardofens.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Preview do site](./Assets/preview.jpg)

Site pessoal de **Bernardo Fensterseifer** – desenvolvedor iOS, estudante de Ciência da Computação na PUCRS e integrante da Apple Developer Academy. O portfólio apresenta projetos reais publicados na App Store, experiência profissional, habilidades técnicas e um pouco do que vai além do código (basquete e piano).

Acesse o site: [bernardofens.github.io](https://bernardofens.github.io)

---

## ✨ Funcionalidades

- **Design responsivo** – adaptado para desktop, tablet e celular.
- **Tema claro/escuro** – alternância manual + detecção da preferência do sistema.
- **Internacionalização (i18n)** – suporte a **Português**, **Inglês** e **Japonês**.
- **Filtro de projetos** – visualize apenas apps iOS, jogos ou trabalhos acadêmicos.
- **Animações suaves** – efeitos de revelação ao rolar a página.
- **Avatar com transição** – quatro variações do pixel-art se alternam a cada 2,5 segundos.
- **Seções completas**:
  - Sobre (com estatísticas)
  - Projetos em destaque (Clairfy, Ziner, Shiro., Zenith, Purrchase)
  - Habilidades técnicas e linguagens
  - Experiência na Apple Developer Academy
  - Reconhecimentos (Startup Garage, podcast BioHub, etc.)
  - Contato e links para currículo (PDF)

---

## 🛠️ Tecnologias utilizadas

| Área          | Tecnologias                                                                 |
|---------------|-----------------------------------------------------------------------------|
| Estrutura     | HTML5 semântico                                                             |
| Estilização   | CSS3 puro (variáveis CSS, Flexbox, Grid, animações keyframes)              |
| Interatividade| JavaScript (ES6) – manipulação de DOM, i18n, tema, filtros, accordions     |
| Hospedagem    | GitHub Pages                                                                |
| Fontes        | Google Fonts – Vollkorn, IM Fell English, DM Mono (fallback)                |
| Assets        | Imagens próprias (pixel art, screenshots dos apps)                          |

---

## 📁 Estrutura de arquivos

```text
bernardofens.github.io/
├── index.html # Página principal (código completo)
├── Assets/
│ ├── preview.jpg # Imagem de capa para o README
│ ├── profileImages/ # face1.png, face2.png, face3.png, face4.png
│ ├── portfolioImages/ # clairfy.jpg, ziner.jpg, shiro.jpg, zenith.png, purrchase.png
│ └── (outras imagens)
├── resume-ptbr.pdf # Currículo em português
├── resume-eng.pdf # Resume in English
└── README.md # Este arquivo
```

> **Nota:** o site é auto‑contido em um único arquivo `index.html` (CSS e JS internos). Para editar, basta modificar esse arquivo.

---

## 🚀 Como executar localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/bernardofens/bernardofens.github.io.git
   cd bernardofens.github.io
   
2. **Abra o arquivo index.html no seu navegador**

Dê um duplo clique no arquivo ou use um servidor local:
```text
bash
npx serve .
```
3. **Personalize**

Altere textos, cores ou imagens diretamente no HTML/CSS.
Para modificar os projetos, edite os ```<article class="project-card">```.
As traduções ficam no objeto translations dentro da tag <script>.

---

## 🌐 Internacionalização

O site detecta o idioma do navegador (pt, en, ja) e permite alternar manualmente.
Para adicionar um novo idioma:

Acrescente as chaves no objeto translations dentro do JavaScript.
Adicione um botão na ```<div class="lang-switcher">``` com onclick="setLang('xx')".

---

## 🎨 Personalização do tema

O tema claro/escuro é controlado pela classe .dark no <body>.
As cores estão definidas nas variáveis CSS dentro de :root e body.dark.
Para alterar a cor de destaque (ex.: azul do Clairfy), modifique --clairfy e as variáveis específicas de cada projeto.

---

## 📦 Deploy no GitHub Pages

O repositório já está configurado para o GitHub Pages. Basta:

Ir em Settings > Pages.
Em "Branch", selecionar main (ou master) e a pasta / (root).
Salvar. O site estará disponível em https://bernardofens.github.io em alguns minutos.
Para atualizar, basta fazer push das alterações para a branch principal.

---

## 📄 Licença

Este projeto está sob a licença MIT. Você pode usá-lo como template para seu próprio portfólio, desde que mantenha os créditos apropriados (ou remova, se preferir).
Consulte o arquivo LICENSE para mais detalhes.

---

## 📬 Contato

Criado por Bernardo Fensterseifer
```text
E‑mail: bernardogarciafen@gmail.com
LinkedIn: https://www.linkedin.com/in/bernardofens
GitHub: https://github.com/bernardofens
```
---

Este README foi gerado com ❤️ para o portfólio de um desenvolvedor que transforma código em soluções reais.

