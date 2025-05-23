const menuData = [
  {
    class: '1 класс',
    key: 'class1',
    subjects: [
      {
        name: 'Математика',
        key: 'math1',
        topics: [
          {
            name: 'Нумерация',
            key: 'topic02',
            subtopics: [
              { name: 'Знаки действия', path: '/math/topic02/subtopic4'},
              { name: 'Точка. Кривая линия. Прямая линия.', path: '/math/topic02/subtopic9'},
              { name: 'Отрезок. Луч', path: '/math/topic02/subtopic10'},
              { name: 'Ломаная линия', path: '/math/topic02/subtopic11'},
              { name: 'Знаки сравнения', path: '/math/topic02/subtopic12'},
              { name: 'Равенство. Неравенство', path: '/math/topic02/subtopic13'},
              { name: 'Многоугольник. Круг', path: '/math/topic02/subtopic14'},
              { name: 'Куб. Шар', path: '/math/topic02/cube-sphere'},
              { name: 'Проектные задания', path: '/math/topic02/subtopic21'},
              { name: 'Сантиметр', path: '/math/topic02/subtopic22'},
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic26'},
            ],
          },
          {
            name: 'Сложение и вычитание',
            key: 'topic03',
            subtopics: [
              { name: 'Слагаемые. Сумма', path: '/math1/topic02/subtopic3'},
              { name: 'Задача', path: '/math1/topic02/subtopic4'},
              { name: 'Угол. Прямой угол', path: '/math1/topic02/subtopic5'},
              { name: 'Странички для любознательных', path: '/math1/topic02/subtopic6'},
              { name: 'Что узнали. Чему научились', path: '/math1/topic02/subtopic7'},
              { name: 'Странички для любознательных', path: '/math1/topic02/subtopic8'},
              { name: 'Странички для любознательных', path: '/math1/topic02/subtopic10'},
              { name: 'Что узнали. Чему научились', path: '/math1/topic02/subtopic11'},
              { name: 'Проверим себя и оценим свои достижения', path: '/math1/topic02/subtopic12'},
              { name: 'Перестановка слагаемых', path: '/math1/topic02/subtopic15'},
              { name: 'Прямоугольник. Квадрат', path: '/math1/topic02/subtopic17'},
              { name: 'Страничка для любознательных', path: '/math1/topic02/subtopic18'},
              { name: 'Что узнали. Чему научились', path: '/math1/topic02/subtopic19'},
              { name: 'Связь между суммой и слагаемыми', path: '/math1/topic02/subtopic20'},
              { name: 'Уменьшаемое. Вычитаемое. Разность', path: '/math1/topic02/subtopic21'},
              { name: 'Килограмм', path: '/math1/topic02/subtopic25'},
              { name: 'Литр', path: '/math1/topic02/subtopic26'},
              { name: 'Что узнали. Чему научились', path: '/math1/topic02/subtopic27'},
              { name: 'Проверим себя и оценим свои достижения', path: '/math1/topic02/subtopic28'},
              { name: 'Слагаемые. Сумма', path: '/math/topic02/subtopic3'},
              { name: 'Угол. Прямой угол', path: '/math/topic02/subtopic5'},
              { name: 'Проверим себя и оценим свои достижения', path: '/math/topic02/subtopic12'},
              { name: 'Перестановка слагаемых', path: '/math/topic02/subtopic15'},
              { name: 'Прямоугольник. Квадрат', path: '/math/topic02/subtopic17'},
              { name: 'Связь между суммой и слагаемыми', path: '/math/topic02/subtopic20'},
              { name: 'Уменьшаемое. Вычитаемое. Разность', path: '/math/topic02/subtopic21'},
              { name: 'Проверим себя и оценим свои достижения', path: '/math/topic02/subtopic28'},
            ],
          },
        ],
      },
    ],
  },
  {
    class: '2 класс',
    key: 'class2',
    subjects: [
      {
        name: 'Математика',
        key: 'math2',
        topics: [
          {
            name: 'Числа от 1 до 100. Нумерация',
            name: 'Числа от 1 до 100. Нумерация',
            key: 'topic05',
            subtopics: [
              { name: 'Числа от 1 до 20', path: '/math2/topic05/subtopic1'},
              { name: 'Десяток. Счёт десятками до 100', path: '/math2/topic05/subtopic2'},
              { name: 'Числа от 11 до 100', path: '/math2/topic05/subtopic3'},
              { name: 'Миллиметр', path: '/math2/topic05/subtopic4'},
              { name: 'Метр', path: '/math2/topic05/subtopic5'},
              { name: 'Рубль. Копейка', path: '/math2/topic05/subtopic6'},
              { name: 'Странички для любознательных', path: '/math2/topic05/subtopic7'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic05/subtopic8'},
              { name: 'Числа от 1 до 20', path: '/math2/topic05/subtopic1'},
              { name: 'Десяток. Счёт десятками до 100', path: '/math2/topic05/subtopic2'},
              { name: 'Числа от 11 до 100', path: '/math2/topic05/subtopic3'},
              { name: 'Миллиметр', path: '/math2/topic05/subtopic4'},
              { name: 'Метр', path: '/math2/topic05/subtopic5'},
              { name: 'Рубль. Копейка', path: '/math2/topic05/subtopic6'},
              { name: 'Странички для любознательных', path: '/math2/topic05/subtopic7'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic05/subtopic8'},
            ],
          },
          {
            name: 'Числа от 1 до 100. Сложение и вычитание',
            name: 'Числа от 1 до 100. Сложение и вычитание',
            key: 'topic06',
            subtopics: [
              { name: 'Час. Минута', path: '/math2/topic06/subtopic1'},
              { name: 'Длина ломаной', path: '/math2/topic06/subtopic2'},
              { name: 'Порядок выполнения действий. Скобки', path: '/math2/topic06/subtopic3'},
              { name: 'Числовые выражения', path: '/math2/topic06/subtopic4'},
              { name: 'Периметр многоугольника', path: '/math2/topic06/subtopic5'},
              { name: 'Свойства сложения', path: '/math2/topic06/subtopic6'},
              { name: 'Проектные задания', path: '/math2/topic06/subtopic7'},
              { name: 'Столбчатые диаграммы', path: '/math2/topic06/subtopic8'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic06/subtopic9'},
              { name: 'Устные вычисления', path: '/math2/topic06/subtopic10'},
              { name: 'Вычисление вида 36 + 2, 36 + 20', path: '/math2/topic06/subtopic11'},
              { name: 'Вычисление вида 36 - 2, 36 - 20', path: '/math2/topic06/subtopic12'},
              { name: 'Вычисление вида 26 + 4, 95 + 5', path: '/math2/topic06/subtopic13'},
              { name: 'Вычисление вида 30 - 7', path: '/math2/topic06/subtopic14'},
              { name: 'Вычисление вида 60 - 24', path: '/math2/topic06/subtopic15'},
              { name: 'Вычисление вида 26 + 7', path: '/math2/topic06/subtopic16'},
              { name: 'Вычисление вида 35 - 7', path: '/math2/topic06/subtopic17'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic06/subtopic18'},
              { name: 'Буквенные выражения', path: '/math2/topic06/subtopic19'},
              { name: 'Уравнения', path: '/math2/topic06/subtopic20'},
              { name: 'Проверка сложения', path: '/math2/topic06/subtopic21'},
              { name: 'Проверка вычитания', path: '/math2/topic06/subtopic22'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic06/subtopic23'},
            ],
          },
          {
            name: 'Числа от 1 до 100. Сложение и вычитание (письменные вычисления)',
            key: 'topic07',
            subtopics: [
              { name: 'Вычисление вида 45 + 23', path: '/math2/topic07/subtopic1'},
              { name: 'Вычисление вида 57 - 26', path: '/math2/topic07/subtopic2'},
              { name: 'Виды углов', path: '/math2/topic07/subtopic3'},
              { name: 'Вычисление вида 37 + 48', path: '/math2/topic07/subtopic4'},
              { name: 'Вычисление вида 37 + 53', path: '/math2/topic07/subtopic5'},
              { name: 'Вычисление вида 87 + 13', path: '/math2/topic07/subtopic6'},
              { name: 'Вычисление вида 40 - 8', path: '/math2/topic07/subtopic7'},
              { name: 'Вычисление вида 50 - 24', path: '/math2/topic07/subtopic8'},
              { name: 'Вычисление вида 52 - 24', path: '/math2/topic07/subtopic9'},
              { name: 'Противоположные стороны прямоугольника', path: '/math2/topic07/subtopic10'},
              { name: 'Симметричные фигуры', path: '/math2/topic07/subtopic11'},
              { name: 'Проектные задания', path: '/math2/topic07/subtopic12'},
              { name: 'Странички для любознательных', path: '/math2/topic07/subtopic13'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic07/subtopic14'},
            ],
          },
          {
            name: 'Числа от 1 до 100. Умножение и деление',
            key: 'topic08',
            subtopics: [
              { name: 'Умножение', path: '/math2/topic08/subtopic1'},
              { name: 'Периметр прмямоугольника', path: '/math2/topic08/subtopic2'},
              { name: 'Название чисел при умножении', path: '/math2/topic08/subtopic3'},
              { name: 'Свойство умножения', path: '/math2/topic08/subtopic4'},
              { name: 'Деление', path: '/math2/topic08/subtopic5'},
              { name: 'Название чисел при делении', path: '/math2/topic08/subtopic6'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic08/subtopic7'},
              { name: 'Связь множителей с произведением', path: '/math2/topic08/subtopic8'},
              { name: 'Умножение и деление с числом 10', path: '/math2/topic08/subtopic9'},
              { name: 'Табличное умножение и деление', path: '/math2/topic08/subtopic10'},
              { name: 'Умножение числа 2 и на число 2', path: '/math2/topic08/subtopic11'},
              { name: 'Деление на 2', path: '/math2/topic08/subtopic12'},
              { name: 'Чётные и нечётные числа', path: '/math2/topic08/subtopic13'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic08/subtopic14'},
              { name: 'Умножение числа 3 и на число 3', path: '/math2/topic08/subtopic15'},
              { name: 'Деление на 3', path: '/math2/topic08/subtopic16'},
              { name: 'Порядок выполнения действий', path: '/math2/topic08/subtopic17'},
              { name: 'Умножение и деление с числом 4', path: '/math2/topic08/subtopic18'},
              { name: 'Увеличение числа в несколько раз', path: '/math2/topic08/subtopic19'},
              { name: 'Уменьшение числа в несколько раз', path: '/math2/topic08/subtopic20'},
              { name: 'Во сколько раз больше? Меньше?', path: '/math2/topic08/subtopic21'},
              { name: 'Умножение и деление с числом 5', path: '/math2/topic08/subtopic22'},
              { name: 'Умножение и деление с числом 6', path: '/math2/topic08/subtopic23'},
              { name: 'Умножение и деление с числом 7', path: '/math2/topic08/subtopic24'},
              { name: 'Умножение и деление с числом 8', path: '/math2/topic08/subtopic25'},
              { name: 'Умножение и деление с числом 9', path: '/math2/topic08/subtopic26'},
              { name: 'Таблица умножения', path: '/math2/topic08/subtopic27'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic08/subtopic28'},
              { name: 'Что узнали. Чему научились во 2 классе', path: '/math2/topic08/subtopic29'},
              { name: 'Час. Минута', path: '/math2/topic06/subtopic1'},
              { name: 'Длина ломаной', path: '/math2/topic06/subtopic2'},
              { name: 'Порядок выполнения действий. Скобки', path: '/math2/topic06/subtopic3'},
              { name: 'Числовые выражения', path: '/math2/topic06/subtopic4'},
              { name: 'Периметр многоугольника', path: '/math2/topic06/subtopic5'},
              { name: 'Свойства сложения', path: '/math2/topic06/subtopic6'},
              { name: 'Проектные задания', path: '/math2/topic06/subtopic7'},
              { name: 'Столбчатые диаграммы', path: '/math2/topic06/subtopic8'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic06/subtopic9'},
              { name: 'Устные вычисления', path: '/math2/topic06/subtopic10'},
              { name: 'Вычисление вида 36 + 2, 36 + 20', path: '/math2/topic06/subtopic11'},
              { name: 'Вычисление вида 36 - 2, 36 - 20', path: '/math2/topic06/subtopic12'},
              { name: 'Вычисление вида 26 + 4, 95 + 5', path: '/math2/topic06/subtopic13'},
              { name: 'Вычисление вида 30 - 7', path: '/math2/topic06/subtopic14'},
              { name: 'Вычисление вида 60 - 24', path: '/math2/topic06/subtopic15'},
              { name: 'Вычисление вида 26 + 7', path: '/math2/topic06/subtopic16'},
              { name: 'Вычисление вида 35 - 7', path: '/math2/topic06/subtopic17'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic06/subtopic18'},
              { name: 'Буквенные выражения', path: '/math2/topic06/subtopic19'},
              { name: 'Уравнения', path: '/math2/topic06/subtopic20'},
              { name: 'Проверка сложения', path: '/math2/topic06/subtopic21'},
              { name: 'Проверка вычитания', path: '/math2/topic06/subtopic22'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic06/subtopic23'},
            ],
          },
          {
            name: 'Числа от 1 до 100. Сложение и вычитание (письменные вычисления)',
            key: 'topic07',
            subtopics: [
              { name: 'Вычисление вида 45 + 23', path: '/math2/topic07/subtopic1'},
              { name: 'Вычисление вида 57 - 26', path: '/math2/topic07/subtopic2'},
              { name: 'Виды углов', path: '/math2/topic07/subtopic3'},
              { name: 'Вычисление вида 37 + 48', path: '/math2/topic07/subtopic4'},
              { name: 'Вычисление вида 37 + 53', path: '/math2/topic07/subtopic5'},
              { name: 'Вычисление вида 87 + 13', path: '/math2/topic07/subtopic6'},
              { name: 'Вычисление вида 40 - 8', path: '/math2/topic07/subtopic7'},
              { name: 'Вычисление вида 50 - 24', path: '/math2/topic07/subtopic8'},
              { name: 'Вычисление вида 52 - 24', path: '/math2/topic07/subtopic9'},
              { name: 'Противоположные стороны прямоугольника', path: '/math2/topic07/subtopic10'},
              { name: 'Симметричные фигуры', path: '/math2/topic07/subtopic11'},
              { name: 'Проектные задания', path: '/math2/topic07/subtopic12'},
              { name: 'Странички для любознательных', path: '/math2/topic07/subtopic13'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic07/subtopic14'},
            ],
          },
          {
            name: 'Числа от 1 до 100. Умножение и деление',
            key: 'topic08',
            subtopics: [
              { name: 'Умножение', path: '/math2/topic08/subtopic1'},
              { name: 'Периметр прмямоугольника', path: '/math2/topic08/subtopic2'},
              { name: 'Название чисел при умножении', path: '/math2/topic08/subtopic3'},
              { name: 'Свойство умножения', path: '/math2/topic08/subtopic4'},
              { name: 'Деление', path: '/math2/topic08/subtopic5'},
              { name: 'Название чисел при делении', path: '/math2/topic08/subtopic6'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic08/subtopic7'},
              { name: 'Связь множителей с произведением', path: '/math2/topic08/subtopic8'},
              { name: 'Умножение и деление с числом 10', path: '/math2/topic08/subtopic9'},
              { name: 'Табличное умножение и деление', path: '/math2/topic08/subtopic10'},
              { name: 'Умножение числа 2 и на число 2', path: '/math2/topic08/subtopic11'},
              { name: 'Деление на 2', path: '/math2/topic08/subtopic12'},
              { name: 'Чётные и нечётные числа', path: '/math2/topic08/subtopic13'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic08/subtopic14'},
              { name: 'Умножение числа 3 и на число 3', path: '/math2/topic08/subtopic15'},
              { name: 'Деление на 3', path: '/math2/topic08/subtopic16'},
              { name: 'Порядок выполнения действий', path: '/math2/topic08/subtopic17'},
              { name: 'Умножение и деление с числом 4', path: '/math2/topic08/subtopic18'},
              { name: 'Увеличение числа в несколько раз', path: '/math2/topic08/subtopic19'},
              { name: 'Уменьшение числа в несколько раз', path: '/math2/topic08/subtopic20'},
              { name: 'Во сколько раз больше? Меньше?', path: '/math2/topic08/subtopic21'},
              { name: 'Умножение и деление с числом 5', path: '/math2/topic08/subtopic22'},
              { name: 'Умножение и деление с числом 6', path: '/math2/topic08/subtopic23'},
              { name: 'Умножение и деление с числом 7', path: '/math2/topic08/subtopic24'},
              { name: 'Умножение и деление с числом 8', path: '/math2/topic08/subtopic25'},
              { name: 'Умножение и деление с числом 9', path: '/math2/topic08/subtopic26'},
              { name: 'Таблица умножения', path: '/math2/topic08/subtopic27'},
              { name: 'Что узнали. Чему научились', path: '/math2/topic08/subtopic28'},
              { name: 'Что узнали. Чему научились во 2 классе', path: '/math2/topic08/subtopic29'},
            ],
          },
        ],
      },
    ],
  },
  {
    class: '3 класс',
    key: 'class3',
    subjects: [
      {
        name: 'Математика',
        key: 'math3',
        topics: [
          {
            name: 'Умножение и деление.',
            key: 'topic10',
            subtopics: [
              { name: 'Связь деления с умножением', path: '/math3/topic10/subtopic1'},
              { name: 'Табличное умножение и деление (продолжение)', path: '/math3/topic10/subtopic2'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic3'},
              { name: 'Умножение и деление с числом 5', path: '/math3/topic10/subtopic4'},
              { name: 'Умножение и деление с числом 6', path: '/math3/topic10/subtopic5'},
              { name: 'Умножение и деление с числом 7', path: '/math3/topic10/subtopic6'},
              { name: 'Проектные задания', path: '/math3/topic10/subtopic7'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic8'},
              { name: 'Площадь. Единицы площади', path: '/math3/topic10/subtopic9'},
              { name: 'Квадратный сантиметр', path: '/math3/topic10/subtopic10'},
              { name: 'Площадь прямоугольника', path: '/math3/topic10/subtopic11'},
              { name: 'Умножение и деление с числами 8 и 9', path: '/math3/topic10/subtopic12'},
              { name: 'Квадратный дециметр', path: '/math3/topic10/subtopic13'},
              { name: 'Квадратный метр', path: '/math3/topic10/subtopic14'},
              { name: 'Задачи-расчёты', path: '/math3/topic10/subtopic15'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic16'},
              { name: 'Умножение на 1', path: '/math3/topic10/subtopic17'},
              { name: 'Умножение на 0', path: '/math3/topic10/subtopic18'},
              { name: 'Деление нуля на число', path: '/math3/topic10/subtopic19'},
              { name: 'Внетабличное умножение и деление', path: '/math3/topic10/subtopic21'},
              { name: 'Вычисление вида 80 : 20', path: '/math3/topic10/subtopic22'},
              { name: 'Умножение суммы на число', path: '/math3/topic10/subtopic23'},
              { name: 'Вычисление вида 23 ∙ 4, 4 ∙ 23', path: '/math3/topic10/subtopic24'},
              { name: 'Деление суммы на число', path: '/math3/topic10/subtopic25'},
              { name: 'Деление вида 69 : 3, 78 : 2', path: '/math3/topic10/subtopic26'},
              { name: 'Связь делимого, делителя и частного', path: '/math3/topic10/subtopic27'},
              { name: 'Проверка деления', path: '/math3/topic10/subtopic28'},
              { name: 'Деление вида 87 : 29, 66 : 22', path: '/math3/topic10/subtopic29'},
              { name: 'Проверка умножения', path: '/math3/topic10/subtopic30'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic31'},
              { name: 'Деление с остатком', path: '/math3/topic10/subtopic32'},
              { name: 'Проверка деления с остатком', path: '/math3/topic10/subtopic33'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic34'},
              { name: 'Проектные задания', path: '/math3/topic10/subtopic35'},
            ],
          },
          {
            name: 'Доли',
            key: 'topic11',
            subtopics: [
              { name: 'Окружность. Круг', path: '/math3/topic11/subtopic1'},
              { name: 'Диаметр окружности (круга)', path: '/math3/topic11/subtopic1'},
              { name: 'Единицы времени. Год. Месяц', path: '/math3/topic11/subtopic1'},
              { name: 'Сутки', path: '/math3/topic11/subtopic1'},
              { name: 'Странички для любознательных. Задачи в картинках', path: '/math3/topic11/subtopic1'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic11/subtopic1'},
            ],
          },
          {
            name: 'Числа от 1 до 1000. Нумерация',
            key: 'topic12',
            subtopics: [
              { name: 'Счётная единица - сотня', path: '/math3/topic12/subtopic1'},
              { name: 'Образование и название трёхзначных чисел', path: '/math3/topic12/subtopic2'},
              { name: 'Разряды счётных единиц. Запись трёхзначных чисел', path: '/math3/topic12/subtopic3'},
              { name: 'Увеличение и уменьшение числа в 10, в 100 раз', path: '/math3/topic12/subtopic4'},
              { name: 'Замена числа суммой разрядных слагаемых', path: '/math3/topic12/subtopic5'},
              { name: 'Сравнение трёхзначных чисел', path: '/math3/topic12/subtopic6'},
              { name: 'Определение общего количества единиц, десятков, сотен', path: '/math3/topic12/subtopic7'},
              { name: 'Единицы массы. Грамм', path: '/math3/topic12/subtopic8'},
              { name: 'Единицы длины. Километр', path: '/math3/topic12/subtopic9'},
              { name: 'Единицы времени. Секунда', path: '/math3/topic12/subtopic10'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic12/subtopic11'},
            ],
          },
          {
            name: 'Числа от 1 до 1000. Сложение и вычитание',
            key: 'topic13',
            name: 'Числа от 1 до 100. Сложение и вычитание (продолжение)',
            key: 'topic09',
            subtopics: [
              { name: 'Решение уравнений', path: '/math3/topic09/subtopic1'},
              { name: 'Обозначение геометрических фигур буквами', path: '/math3/topic09/subtopic2'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic09/subtopic3'},
            ],
          },
          {
            name: 'Числа от 1 до 100. Умножение и деление (продолжение)',
            key: 'topic10',
            subtopics: [
              { name: 'Связь деления с умножением', path: '/math3/topic10/subtopic1'},
              { name: 'Табличное умножение и деление (продолжение)', path: '/math3/topic10/subtopic2'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic3'},
              { name: 'Умножение и деление с числом 5', path: '/math3/topic10/subtopic4'},
              { name: 'Умножение и деление с числом 6', path: '/math3/topic10/subtopic5'},
              { name: 'Умножение и деление с числом 7', path: '/math3/topic10/subtopic6'},
              { name: 'Проектные задания', path: '/math3/topic10/subtopic7'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic8'},
              { name: 'Площадь. Единицы площади', path: '/math3/topic10/subtopic9'},
              { name: 'Квадратный сантиметр', path: '/math3/topic10/subtopic10'},
              { name: 'Площадь прямоугольника', path: '/math3/topic10/subtopic11'},
              { name: 'Умножение и деление с числами 8 и 9', path: '/math3/topic10/subtopic12'},
              { name: 'Квадратный дециметр', path: '/math3/topic10/subtopic13'},
              { name: 'Квадратный метр', path: '/math3/topic10/subtopic14'},
              { name: 'Задачи-расчёты', path: '/math3/topic10/subtopic15'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic16'},
              { name: 'Умножение на 1', path: '/math3/topic10/subtopic17'},
              { name: 'Умножение на 0', path: '/math3/topic10/subtopic18'},
              { name: 'Деление нуля на число', path: '/math3/topic10/subtopic19'},
              { name: 'Внетабличное умножение и деление', path: '/math3/topic10/subtopic21'},
              { name: 'Вычисление вида 80 : 20', path: '/math3/topic10/subtopic22'},
              { name: 'Умножение суммы на число', path: '/math3/topic10/subtopic23'},
              { name: 'Вычисление вида 23 ∙ 4, 4 ∙ 23', path: '/math3/topic10/subtopic24'},
              { name: 'Деление суммы на число', path: '/math3/topic10/subtopic25'},
              { name: 'Деление вида 69 : 3, 78 : 2', path: '/math3/topic10/subtopic26'},
              { name: 'Связь делимого, делителя и частного', path: '/math3/topic10/subtopic27'},
              { name: 'Проверка деления', path: '/math3/topic10/subtopic28'},
              { name: 'Деление вида 87 : 29, 66 : 22', path: '/math3/topic10/subtopic29'},
              { name: 'Проверка умножения', path: '/math3/topic10/subtopic30'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic31'},
              { name: 'Деление с остатком', path: '/math3/topic10/subtopic32'},
              { name: 'Проверка деления с остатком', path: '/math3/topic10/subtopic33'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic10/subtopic34'},
              { name: 'Проектные задания', path: '/math3/topic10/subtopic35'},
            ],
          },
          {
            name: 'Доли',
            key: 'topic11',
            subtopics: [
              { name: 'Окружность. Круг', path: '/math3/topic11/subtopic1'},
              { name: 'Диаметр окружности (круга)', path: '/math3/topic11/subtopic1'},
              { name: 'Единицы времени. Год. Месяц', path: '/math3/topic11/subtopic1'},
              { name: 'Сутки', path: '/math3/topic11/subtopic1'},
              { name: 'Странички для любознательных. Задачи в картинках', path: '/math3/topic11/subtopic1'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic11/subtopic1'},
            ],
          },
          {
            name: 'Числа от 1 до 1000. Нумерация',
            key: 'topic12',
            subtopics: [
              { name: 'Счётная единица - сотня', path: '/math3/topic12/subtopic1'},
              { name: 'Образование и название трёхзначных чисел', path: '/math3/topic12/subtopic2'},
              { name: 'Разряды счётных единиц. Запись трёхзначных чисел', path: '/math3/topic12/subtopic3'},
              { name: 'Увеличение и уменьшение числа в 10, в 100 раз', path: '/math3/topic12/subtopic4'},
              { name: 'Замена числа суммой разрядных слагаемых', path: '/math3/topic12/subtopic5'},
              { name: 'Сравнение трёхзначных чисел', path: '/math3/topic12/subtopic6'},
              { name: 'Определение общего количества единиц, десятков, сотен', path: '/math3/topic12/subtopic7'},
              { name: 'Единицы массы. Грамм', path: '/math3/topic12/subtopic8'},
              { name: 'Единицы длины. Километр', path: '/math3/topic12/subtopic9'},
              { name: 'Единицы времени. Секунда', path: '/math3/topic12/subtopic10'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic12/subtopic11'},
            ],
          },
          {
            name: 'Числа от 1 до 1000. Сложение и вычитание',
            key: 'topic13',
            subtopics: [
              { name: 'Приёмы устных вычислений', path: '/math3/topic13/subtopic1'},
              { name: 'Приёмы письменных вычислений', path: '/math3/topic13/subtopic2'},
              { name: 'Виды треугольников', path: '/math3/topic13/subtopic3'},
              { name: 'Страничка для любознательных', path: '/math3/topic13/subtopic4'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic13/subtopic5'},              
              { name: 'Приёмы устных вычислений', path: '/math3/topic13/subtopic1'},
              { name: 'Приёмы письменных вычислений', path: '/math3/topic13/subtopic2'},
              { name: 'Виды треугольников', path: '/math3/topic13/subtopic3'},
              { name: 'Страничка для любознательных', path: '/math3/topic13/subtopic4'},
              { name: 'Что узнали. Чему научились', path: '/math3/topic13/subtopic5'},              
            ],
          },
        ],
      },
    ],
  },

  {
    class: '4 класс',
    key: 'class4',
    subjects: [
      {
        name: 'Математика',
        key: 'math4',
        topics: [
          {
            name: '',
            key: 'null',
            subtopics: []
          }
        ]
      }
    ]
  },

  {
    class: '5 класс',
    key: 'class5',
    subjects: [
      {
        name: 'Математика',
        key: 'math5',
        topics: [
          {
            name: '',
            key: 'null',
            subtopics: []
          }
        ]
      }
    ]
  },

  {
    class: '6 класс',
    key: 'class6',
    subjects: [
      {
        name: 'Математика',
        key: 'math6',
        topics: [
          {
            name: '',
            key: 'null',
            subtopics: []
          }
        ]
      }
    ]
  },

  {
    class: '7 класс',
    key: 'class7',
    subjects: [
      {
        name: 'Математика',
        key: 'math7',
        topics: [
          {
            name: '',
            key: 'null',
            subtopics: []
          }
        ]
      }
    ]
  },

  {
    class: '8 класс',
    key: 'class8',
    subjects: [
      {
        name: 'Математика',
        key: 'math8',
        topics: [
          {
            name: 'Квадратные уравнения',
            key: 'topic01',
            subtopics: [
              { name: 'Дискриминант', path: '/math8/topic01/discriminant'},
            ]
          }
        ]
      }
    ]
  },

  {
    class: '9 класс',
    key: 'class3',
    subjects: [
      {
        name: 'Математика',
        key: 'math9',
        topics: [
          {
            name: '',
            key: 'null',
            subtopics: []
          }
        ]
      }
    ]
  },

  {
    class: '10 класс',
    key: 'class10',
    subjects: [
      {
        name: 'Математика',
        key: 'math10',
        topics: [
          {
            name: '',
            key: 'null',
            subtopics: []
          }
        ]
      }
    ]
  },

  {
    class: '11 класс',
    key: 'class11',
    subjects: [
      {
        name: 'Математика',
        key: 'math11',
        topics: [
          {
            name: '',
            key: 'null',
            subtopics: []
          }
        ]
      }
    ]
  },

];

export default menuData;