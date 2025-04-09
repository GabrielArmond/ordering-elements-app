## 🛠 Projeto: Ordering Elements App

Este é um aplicativo construído com **Vite + React + TypeScript**, que permite a **edição dinâmica de componentes** através de uma interface amigável com **drag-and-drop**.

### 🛠 Teste o app

- **[Ordering Elements App](https://ordering-elements-app.vercel.app/)**

### 🚀 Tecnologias Utilizadas

- **[Vite](https://vitejs.dev/)** – Build tool ultra-rápida para desenvolvimento moderno com React.
- **React + TypeScript** – Biblioteca para construção de interfaces com tipagem estática.
- **[DND Kit](https://dndkit.com/)** – Biblioteca de drag and drop extensível e acessível.
- **[Bootstrap 5](https://getbootstrap.com/)** – Framework CSS para layout responsivo e estilização.
- **LocalStorage** – Utilizado para persistência dos dados de layout no navegador.
- **Mock de dados** – Um mock de dados inicial foi carregado ao iniciar o projeto.

---

### 🎨 Funcionalidades

- 🧩 Componentes organizados por categorias (links, cards, tarefas, cores, etc.)
- ✍️ Edição dinâmica dos componentes por meio de modais.
- 🔄 Salvamento do layout com persistência via `localStorage`.
- 📦 Sistema de drag-and-drop para reordenar a navbar (e futuramente outros elementos).
- 🔍 Barra de busca para filtrar os componentes dinamicamente.
- 💡 Interface adaptada com Bootstrap para visual moderno e responsivo.

---

### 📁 Estrutura de Pastas

```
src/
├── api/
│    └── endpoints/
│      └── elements.ts
│   └── client.ts
│   └── index.ts
├── components/
├── assets/
├── types/
│   └── elements.ts
├── hooks/
│   └── useElementsData.ts
├── App.tsx
├── main.tsx
├── index.css
└── mock/
    └── elements.ts (mock de dados)
```

---

### ▶️ Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/GabrielArmond/ordering-elements-app.git
cd ordering-elements-app
```

2. Instale as dependências:
```bash
npm install
```

3. Rode a aplicação:
```bash
npm run dev
```

---

### ✏️ Em Desenvolvimento

- 📦 Implementar novos blocos editáveis.
- 🛠️ Melhorias de acessibilidade e UX dos modais.



