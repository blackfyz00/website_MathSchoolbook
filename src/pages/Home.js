import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function Home() {
  return (
    <div className="container">
      <h1>Добро пожаловать на главную страницу!</h1>
      <p>Это сайт для изучения математики.</p>
      
      <section className="math-section">
        <h2>Формула дискриминанта квадратного уравнения</h2>
        
        <p>Квадратное уравнение общего вида:</p>
        <BlockMath math="ax^2 + bx + c = 0 \quad (a \neq 0)" />
        
        <h3>Вывод формулы дискриминанта</h3>
        
        <p>1. Исходное уравнение:</p>
        <BlockMath math="ax^2 + bx + c = 0" />
        
        <p>2. Разделим обе части на <InlineMath math="a"/>:</p>
        <BlockMath math="x^2 + \frac{b}{a}x + \frac{c}{a} = 0" />
        
        <p>3. Выделим полный квадрат:</p>
        <BlockMath math="x^2 + 2 \cdot \frac{b}{2a}x + \left(\frac{b}{2a}\right)^2 - \left(\frac{b}{2a}\right)^2 + \frac{c}{a} = 0" />
        
        <p>4. Преобразуем:</p>
        <BlockMath math="\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2} + \frac{c}{a} = 0" />
        
        <p>5. Перенесём свободные члены вправо:</p>
        <BlockMath math="\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a}" />
        
        <p>6. Приведём к общему знаменателю:</p>
        <BlockMath math="\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}" />
        
        <p>7. Извлекаем квадратный корень:</p>
        <BlockMath math="x + \frac{b}{2a} = \pm \frac{\sqrt{b^2 - 4ac}}{2a}" />
        
        <p>8. Получаем решение:</p>
        <BlockMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
        
        <p>Выражение под корнем называется дискриминантом:</p>
        <BlockMath math="D = b^2 - 4ac" />
        
        <h3>Анализ дискриминанта</h3>
        <ul>
          <li>Если <InlineMath math="D > 0"/> — два различных действительных корня</li>
          <li>Если <InlineMath math="D = 0"/> — один действительный корень (кратности 2)</li>
          <li>Если <InlineMath math="D < 0"/> — нет действительных корней (есть комплексные)</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;