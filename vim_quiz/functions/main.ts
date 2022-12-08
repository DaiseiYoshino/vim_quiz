function* mainFunc(): Generator<any[], any, any> {
  let mode = 'title';
  let input = [];
  input = yield [
    {style: 'blink', animationNum:1, text: 'H'},
    'ello, world',
    {style: 'blink', animationNum:2, text:'!'}
  ];

  while (true) {
    input = yield [{style: 'blink', text: 'Enter!'}]
  };
};

export default mainFunc;
