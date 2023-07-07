function* mainFunc(): Generator<any[], any, any> {
  let mode = 'title';
  let input = [];
  input = yield [
    [
      {style: 'blink', text: 'H'},
      'ello, world!'
    ],
    [
      'Hello, world',
      {style: 'blink', text: '!'}
    ]
  ];

  while (true) {
    input = yield [[{style: 'blink', text: 'Enter!'}]]
  };
};

export default mainFunc;
