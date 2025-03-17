const menuData = [
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
              { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
              { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
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
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   class: '9 класс',
  //   key: 'class9',
  //   subjects: [
  //     {
  //       name: 'Математика',
  //       key: 'math9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Сложение и вычитание',
  //           key: 'topic91',
  //           subtopics: [
  //             { name: 'Тема 1: Основы сложения', path: '/math/topic91/subtopic1' },
  //             { name: 'Тема 2: Основы вычитания', path: '/math/topic91/subtopic2' },
  //           ],
  //         },
  //         {
  //           name: 'Раздел 2: Умножение и деление',
  //           key: 'topic92',
  //           subtopics: [
  //             { name: 'Тема 1: Основы умножения', path: '/math/topic92/subtopic1' },
  //             { name: 'Тема 2: Основы деления', path: '/math/topic92/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Геометрия',
  //       key: 'geom9',
  //       topics: [
  //         {
  //           name: 'Раздел 1: Основы геометрии',
  //           key: 'geom91',
  //           subtopics: [
  //             { name: 'Тема 1: Точки и линии', path: '/geom/geom91/subtopic1' },
  //             { name: 'Тема 2: Углы', path: '/geom/geom91/subtopic2' },
  //           ],
  //         },
  //       ],
  //     },
      ],
   },
  
  // Добавьте другие классы по аналогии
];

export default menuData;