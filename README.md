👩‍💻 Autoria
Desenvolvido por Ana Clara(RA:22453030), Sabria Cardoso(RA:22451426) e Vinícius Bernardo(22453058), como parte do Bootcamp de Desenvolvimento Web.
O projeto foi evoluído de uma extensão Chrome para um PWA completo com backend próprio, dentro de uma arquitetura monorepo.

# BlockPWA

O **BlockPWA** é uma aplicação web progressiva (PWA) que também pode ser utilizada como **extensão do Google Chrome**, permitindo ao usuário criar e gerenciar uma lista de sites bloqueados.  
O objetivo é promover foco e produtividade ao evitar o acesso a páginas indesejadas durante o uso do navegador.

## 🧩 Descrição Geral

O projeto faz parte de um **monorepo**, onde a pasta `apps/web` contém o código-fonte da aplicação PWA/extensão e a pasta `apps/api` hospeda o backend que fornece suporte aos dados da aplicação.

A versão **web/PWA** foi desenvolvida com **Vite**, oferecendo uma arquitetura moderna, leve e compatível com navegadores atuais.  
A aplicação também foi configurada para ser **containerizada com Docker** e testada via **Playwright**, garantindo portabilidade e confiabilidade.

## ⚙️ Funcionalidades Principais

- Adicionar e remover sites de uma lista de bloqueio.  
- Bloqueio automático de URLs da lista.  
- Interface leve, responsiva e intuitiva.  
- Armazenamento local persistente.  
- Suporte ao modo **PWA** (instalável e funcional offline).  
- Compatibilidade com o **modo de extensão do Chrome**.  
- Testes automatizados com **Playwright**.

## 🏗️ Estrutura do Projeto

monorepo/
└── apps/
├── api/ # Backend (servidor Node.js/Express)
└── web/ # Extensão e PWA (Vite + Playwright)
├── public/ # Arquivos estáticos e manifest.json
├── src/ # Componentes e lógica da aplicação
├── tests/ # Testes automatizados
├── index.html # Página principal do PWA
└── package.json

bash
Copiar código

## 🚀 Como Executar Localmente

### 1. Clonar o Repositório
```bash
git clone https://github.com/anaacllara/monorepo.git
cd monorepo/apps/web
2. Instalar Dependências
bash
Copiar código
npm install
3. Executar o Projeto em Desenvolvimento
bash
Copiar código
npm run dev
O servidor local será iniciado (geralmente em http://localhost:5173).

4. Gerar Build de Produção
bash
Copiar código
npm run build
5. Visualizar Build
bash
Copiar código
npm run preview
6. Rodar Testes Automatizados (opcional)
bash
Copiar código
npx playwright test
🔧 Tecnologias Utilizadas
Vite – ferramenta de build e desenvolvimento rápido

JavaScript / HTML / CSS – base da aplicação

Playwright – testes automatizados de interface

PWA APIs – suporte offline e instalação no dispositivo

Chrome Extensions API – integração com o navegador

🧱 Requisitos
Node.js 18+

npm 9+

Google Chrome (para testes da extensão)

