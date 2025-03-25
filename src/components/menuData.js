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
            name: 'ПОДГОТОВКА К ИЗУЧЕНИЮ ЧИСЕЛ',
            key: 'topic01',
            subtopics: [
              { name: 'Один, два, три... Первый, второй, третий', path: '/math/topic91/subtopic1' },
              { name: 'Вверху. Внизу. Слева. Справа', path: '/math/topic91/subtopic2' },
              { name: 'Раньше. Позже. Сначала. Потом', path: '/math/topic91/subtopic3' },
              { name: 'Столько же. Больше. Меньше', path: '/math/topic91/subtopic4' },
              { name: 'На сколько больше? На сколько меньше?', path: '/math/topic91/subtopic5' },
              { name: 'Странички для любознательных', path: '/math/topic91/subtopic6' },

            ],
          },
          {
            name: 'ЧИСЛА ОТ 1 ДО 10. Нумерация',
            key: 'topic02',
            subtopics: [
              { name: 'Много. Один. Число 1. Цифра 1', path: '/math/topic02/subtopic1' },
              { name: 'Число 2. Цифра 2', path: '/math/topic02/subtopic2' },
              { name: 'Число 3. Цифра 3', path: '/math/topic02/subtopic3' },
              { name: 'Знаки действия', path: '/math/topic02/subtopic4' },
              { name: 'Число 4. Цифра 4', path: '/math/topic02/subtopic5' },
              { name: 'Длиннее, короче, одинаковые по длине', path: '/math/topic02/subtopic6' },
              { name: 'Число 5. Цифра 5', path: '/math/topic02/subtopic7' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic8' },
              { name: 'Точка. Кривая линия. Прямая линия.', path: '/math/topic02/subtopic9' },
              { name: 'Отрезок. Луч', path: '/math/topic02/subtopic10' },
              { name: 'Ломаная линия', path: '/math/topic02/subtopic11' },
              { name: 'Знаки сравнения', path: '/math/topic02/subtopic12' },
              { name: 'Равенство. Неравенство', path: '/math/topic02/subtopic13' },
              { name: 'Многоугольник. Круг', path: '/math/topic02/subtopic14' },
              { name: 'Числа 6 и 7. Цифра 6', path: '/math/topic02/subtopic15' },
              { name: 'Числа 6 и 7. Цифра 7', path: '/math/topic02/subtopic16' },
              { name: 'Числа 8 и 9. Цифра 8', path: '/math/topic02/subtopic17' },
              { name: 'Куб. Шар', path: '/math/topic02/subtopic18' },
              { name: 'Числа 8 и 9. Цифра 9', path: '/math/topic02/subtopic19' },
              { name: 'Число 10', path: '/math/topic02/subtopic20' },
              { name: 'Проектные задания', path: '/math/topic02/subtopic21' },
              { name: 'Сантиметр', path: '/math/topic02/subtopic22' },
              { name: 'Увеличить на ... Уменьшить на ...', path: '/math/topic02/subtopic23' },
              { name: 'Число 0. Цифра 0', path: '/math/topic02/subtopic24' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic25' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic26' },
            ],
          },
          {
            name: 'ЧИСЛА ОТ 1 ДО 10. Сложение и вычитание',
            key: 'topic03',
            subtopics: [
              { name: 'Вычисление вида _ + 1, _ - 1', path: '/math/topic02/subtopic1' },
              { name: 'Вычисление вида _ + 2, _ - 2', path: '/math/topic02/subtopic2' },
              { name: 'Слагаемые. Сумма', path: '/math/topic02/subtopic3' },
              { name: 'Задача', path: '/math/topic02/subtopic4' },
              { name: 'Угол. Прямой угол', path: '/math/topic02/subtopic5' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic6' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic7' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic8' },
              { name: 'Вычисление вида _ + 3, _ - 3', path: '/math/topic02/subtopic9' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic10' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic11' },
              { name: 'Проверим себя и оценим свои достижения', path: '/math/topic02/subtopic12' },
              { name: 'Вычитание вида _ + 4, _ - 4', path: '/math/topic02/subtopic13' },
              { name: 'На скоолько больше? На сколько меньше?', path: '/math/topic02/subtopic14' },
              { name: 'Перестановка слагаемых', path: '/math/topic02/subtopic15' },
              { name: 'Вычитание вида _ + 5, _ + 6, _ + 7, _ + 8, _ + 9', path: '/math/topic02/subtopic16' },
              { name: 'Прямоугольник. Квадрат', path: '/math/topic02/subtopic17' },
              { name: 'Страничка для любознательных', path: '/math/topic02/subtopic18' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic19' },
              { name: 'Связь между суммой и слагаемыми', path: '/math/topic02/subtopic20' },
              { name: 'Уменьшаемое. Вычитаемое. Разность', path: '/math/topic02/subtopic21' },
              { name: 'Вычитание вида 6 - _, 7 - _', path: '/math/topic02/subtopic22' },
              { name: 'Вычитание вида 8 - _, 9 - _', path: '/math/topic02/subtopic23' },
              { name: 'Вычитание вида 10 - _', path: '/math/topic02/subtopic24' },
              { name: 'Килограмм', path: '/math/topic02/subtopic25' },
              { name: 'Литр', path: '/math/topic02/subtopic26' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic27' },
              { name: 'Проверим себя и оценим свои достижения', path: '/math/topic02/subtopic28' },
            ],
          },
          {
            name: 'ЧИСЛА ОТ 11 ДО 20. Нумерация. Сложение и вычитание',
            key: 'topic04',
            subtopics: [
              { name: 'Нумерация', path: '/math/topic02/subtopic1' },
              { name: 'Дециметр', path: '/math/topic02/subtopic2' },
              { name: 'Вычисление вида 10 + 7, 17 - 7, 17 - 10', path: '/math/topic02/subtopic3' },
              { name: 'Счёт десятками', path: '/math/topic02/subtopic4' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic5' },
              { name: 'План решения задачи в два действия', path: '/math/topic02/subtopic6' },
            ],
          },
          {
            name: 'Сложение и вычитание. Табличное сложение',
            key: 'topic05',
            subtopics: [
              { name: 'Сложение вида _ + 2, _ + 3', path: '/math/topic02/subtopic1' },
              { name: 'Сложение вида _ + 4', path: '/math/topic02/subtopic2' },
              { name: 'Сложение вида _ + 5', path: '/math/topic02/subtopic3' },
              { name: 'Сложение вида _ + 6', path: '/math/topic02/subtopic4' },
              { name: 'Сложение вида _ + 7', path: '/math/topic02/subtopic5' },
              { name: 'Сложение вида _ + 8, _ + 9', path: '/math/topic02/subtopic6' },
              { name: 'Таблица сложения', path: '/math/topic02/subtopic7' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic8' },
              { name: 'Табличное вычитание', path: '/math/topic02/subtopic9' },
              { name: 'Вычитание вида 11 - _', path: '/math/topic02/subtopic10' },
              { name: 'Вычитание вида 12 - _', path: '/math/topic02/subtopic11' },
              { name: 'Вычитание вида 13 - _', path: '/math/topic02/subtopic12' },
              { name: 'Вычитание вида 14 - _', path: '/math/topic02/subtopic13' },
              { name: 'Вычитание вида 15 - _', path: '/math/topic02/subtopic14' },
              { name: 'Вычитание вида 16 - _', path: '/math/topic02/subtopic15' },
              { name: 'Вычитание вида 17 - _, 18 - _', path: '/math/topic02/subtopic16' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic17' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic18' },
              { name: 'Проверим себя и оценим свои достижения', path: '/math/topic02/subtopic19' },
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
            name: '.....',
            key: 'topic05',
            subtopics: [
              { name: '......', path: '/math9/topic91/subtopic1' },
            ],
          },
          {
            name: '.........',
            key: 'topic06',
            subtopics: [
              { name: '........', path: '/math/topic92/subtopic1' },
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
            name: '.....',
            key: 'topic20',
            subtopics: [
              { name: '......', path: '/math9/topic91/subtopic1' },
            ],
          },
          {
            name: '.........',
            key: 'topic21',
            subtopics: [
              { name: '........', path: '/math/topic92/subtopic1' },
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
            name: '.....',
            key: 'topic30',
            subtopics: [
              { name: '......', path: '/math9/topic91/subtopic1' },
            ],
          },
          {
            name: '.........',
            key: 'topic31',
            subtopics: [
              { name: '........', path: '/math/topic92/subtopic1' },
            ],
          },
        ],
      },
    ],
  },
  {
    class: '9 класс',
    key: 'class9',
    subjects: [
      {
        name: 'Математика',
        key: 'math9',
        topics: [
          {
            name: 'Раздел 1: Сложение и вычитание',
            key: 'topic91',
            subtopics: [
              { name: 'Тема 1: Основы сложения', path: '/math9/topic91/subtopic1' },
              { name: 'Тема 2: Основы вычитания', path: '/math9/topic91/subtopic2' },
              { name: 'Тема 3: Основы вычитания', path: '/math9/topic91/subtopic3' },
            ],
          },
          {
            name: 'Раздел 2: Умножение и деление',
            key: 'topic92',
            subtopics: [
              { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
              { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
            ],
          },
        ],
      },
    ],
  },

];

export default menuData;