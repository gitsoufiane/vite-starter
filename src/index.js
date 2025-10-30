import('./counter.js').then(({ initializeCounter }) => {
  initializeCounter();
});

console.log('Counter module loaded and initialized.');
