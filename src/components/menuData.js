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
            name: 'Подготовка к изучению чисел',
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
            name: 'Нумерация',
            key: 'topic02',
            subtopics: [
              { name: 'Знаки действия', path: '/math/topic02/subtopic4' },
              { name: 'Длиннее, короче, одинаковые по длине', path: '/math/topic02/subtopic6' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic8' },
              { name: 'Точка. Кривая линия. Прямая линия.', path: '/math/topic02/subtopic9' },
              { name: 'Отрезок. Луч', path: '/math/topic02/subtopic10' },
              { name: 'Ломаная линия', path: '/math/topic02/subtopic11' },
              { name: 'Знаки сравнения', path: '/math/topic02/subtopic12' },
              { name: 'Равенство. Неравенство', path: '/math/topic02/subtopic13' },
              { name: 'Многоугольник. Круг', path: '/math/topic02/subtopic14' },
              { name: 'Куб. Шар', path: '/math/topic02/subtopic18' },
              { name: 'Проектные задания', path: '/math/topic02/subtopic21' },
              { name: 'Сантиметр', path: '/math/topic02/subtopic22' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic25' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic26' },
            ],
          },
          {
            name: 'Сложение и вычитание',
            key: 'topic03',
            subtopics: [
              { name: 'Слагаемые. Сумма', path: '/math/topic02/subtopic3' },
              { name: 'Задача', path: '/math/topic02/subtopic4' },
              { name: 'Угол. Прямой угол', path: '/math/topic02/subtopic5' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic6' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic7' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic8' },
              { name: 'Странички для любознательных', path: '/math/topic02/subtopic10' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic11' },
              { name: 'Проверим себя и оценим свои достижения', path: '/math/topic02/subtopic12' },
              { name: 'Перестановка слагаемых', path: '/math/topic02/subtopic15' },
              { name: 'Прямоугольник. Квадрат', path: '/math/topic02/subtopic17' },
              { name: 'Страничка для любознательных', path: '/math/topic02/subtopic18' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic19' },
              { name: 'Связь между суммой и слагаемыми', path: '/math/topic02/subtopic20' },
              { name: 'Уменьшаемое. Вычитаемое. Разность', path: '/math/topic02/subtopic21' },
              { name: 'Килограмм', path: '/math/topic02/subtopic25' },
              { name: 'Литр', path: '/math/topic02/subtopic26' },
              { name: 'Что узнали. Чему научились', path: '/math/topic02/subtopic27' },
              { name: 'Проверим себя и оценим свои достижения', path: '/math/topic02/subtopic28' },
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
              { name: '.....', path: '/math9/topic91/subtopic1' },
            ],
          },
          {
            name: '.....',
            key: 'topic06',
            subtopics: [
              { name: '.....', path: '/math/topic92/subtopic1' },
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
              { name: '.....', path: '/math9/topic91/subtopic1' },
            ],
          },
          {
            name: '.....',
            key: 'topic21',
            subtopics: [
              { name: '.....', path: '/math/topic92/subtopic1' },
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
              { name: '.....', path: '/math9/topic91/subtopic1' },
            ],
          },
          {
            name: '.....',
            key: 'topic31',
            subtopics: [
              { name: '.....', path: '/math/topic92/subtopic1' },
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