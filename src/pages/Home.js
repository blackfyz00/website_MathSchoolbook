import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

function Home() {
  const mathContent = `
# Добро пожаловать на главную страницу!

Это сайт для изучения математики.

## Формула дискриминанта квадратного уравнения

Квадратное уравнение общего вида:

$$
ax^2 + bx + c = 0 \\quad (a \\neq 0)
$$

### Вывод формулы дискриминанта

1. Исходное уравнение:

$$
ax^2 + bx + c = 0
$$

2. Разделим обе части на $a$:

$$
x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0
$$

3. Выделим полный квадрат:

$$
x^2 + 2 \\cdot \\frac{b}{2a}x + \\left(\\frac{b}{2a}\\right)^2 - \\left(\\frac{b}{2a}\\right)^2 + \\frac{c}{a} = 0
$$

4. Преобразуем:

$$
\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a^2} + \\frac{c}{a} = 0
$$

5. Перенесём свободные члены вправо:

$$
\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{c}{a}
$$

6. Приведём к общему знаменателю:

$$
\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}
$$

7. Извлекаем квадратный корень:

$$
x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}
$$

8. Получаем решение:

$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

Выражение под корнем называется дискриминантом:

$$
D = b^2 - 4ac
$$

### Анализ дискриминанта

- Если $D > 0$ — два различных действительных корня
- Если $D = 0$ — один действительный корень (кратности 2)
- Если $D < 0$ — нет действительных корней (есть комплексные)
`;

  return (
    <div className="container">
      <ReactMarkdown
        children={mathContent}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
}

export default Home;