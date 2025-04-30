import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw'; // Поддержка HTML

function About() {
  const aboutContent = `
# О нас

Представляем удобный **учебник по математике для школьников**.

## Как мы разрабатывали этот сайт?

Работу над проектом мы начали с планирования структуры и функционала. После этого мы использовали современные веб-технологии, чтобы сделать наш учебник интерактивным и красивым.

### 🧱 Структура проекта

В основе проекта — стандартная структура **React + Nodejs**, но с модульной организацией файлов. Вот как выглядит наш репозиторий:

\`\`\`bash
my-math-book/
├── public/
│   └── images/         # Изображения для контента
├── src/
│   ├── components/     # Компоненты: Home, About, Topics, SideBar, menuData.
│   ├── styles/          # CSS-файлы
│   └── App.js           # Главный маршрутизатор
│  
├── README.md
└── package.json
\`\`\`

<figure>
  <img src="/images/repo-structure.jpg" alt="Структура репозитория" />
</figure>

## 🔧 Используемые технологии

### 1. Node.js

Node.js — это среда выполнения JavaScript на стороне сервера. Она позволила нам запустить локальный сервер и работать с пакетами через пакетный менеджер **npm**.

<figure>
  <img src="/images/nodejs.jpg" alt="Node.js" style="max-width: 200px;" />
  <figcaption>Логотип Node.js</figcaption>
</figure>

### 2. React

**React** — библиотека от Facebook для создания пользовательских интерфейсов. С её помощью мы сделали весь интерфейс динамическим, а контент — легко обновляемым.

<figure>
  <img src="/images/favicon.jpg" alt="React" style="max-width: 200px;" />
  <figcaption>Логотип React</figcaption>
</figure>

React помог нам:
- Создать компоненты для каждой страницы (Home, About, Topics и т.д.)
- Удобно внедрять формулы с помощью **KaTeX**
- Добавлять межстраничные переходы с помощью **React Router**

## 💡 Что дало использование этих технологий?

- **Удобное управление состоянием**
- Простая интеграция Markdown с формулами
- Возможность расширения сайта в будущем

## 🥳 Вы можете найти наш репозиторий на GitHub и запустить проект у себя:

\`\`\`bash
git clone https://github.com/blackfyz00/website_MathSchoolbook
cd my-math-book
npm install
npm start
\`\`\`

# Спасибо за внимание!

`;

  return (
    <div className="container markdown">
      <ReactMarkdown
        children={aboutContent}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      />
    </div>
  );
}

export default About;