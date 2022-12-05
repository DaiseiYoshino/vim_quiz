function* mainFunc() {
  let mode = 'title';
  let input = [];
  input = yield [
    {style: 'blink', animationNum:1, text: 'H'},
    {text: 'ello, world'},
    {style: 'blink', animationNum:2, text:'!'}
  ];

  while (true) {
    input = yield [{text: input}]
  };
};

export default mainFunc;
