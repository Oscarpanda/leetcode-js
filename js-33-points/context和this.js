const defer = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

function machine_this(name) {
  const tasks = [];
  const initTask = () => {
    console.log(`start ${name}`);
  };
  tasks.push(initTask);

  function _do(str) {
    const task = () => {
      console.log(`${name} ${str}`);
    };
    tasks.push(task);
    return this;
  }

  function wait(sec) {
    const task = async () => {
      console.log(`wait ${sec}s`);
      await defer(sec);
    };
    tasks.push(task);
    return this;
  }

  function waitFirst(sec) {
    const task = async () => {
      console.log(`wait ${sec}s`);
      await defer(sec);
    };

    tasks.unshift(task);
    return this;
  }

  function execute() {
    tasks.reduce(async (promise, task) => {
      await promise;
      await task();
    }, Promise.resolve);
  }

  return {
    do: _do,
    wait,
    waitFirst,
    execute,
  };
}
function machine(name) {
  const context = {};
  const tasks = [];
  const initTask = () => {
    console.log(`start ${name}`);
  };
  tasks.push(initTask);

  function _do(str) {
    const task = () => {
      console.log(`${name} ${str}`);
    };
    tasks.push(task);
    return context;
  }

  function wait(sec) {
    const task = async () => {
      console.log(`wait ${sec}s`);
      await defer(sec);
    };
    tasks.push(task);
    return context;
  }

  function waitFirst(sec) {
    const task = async () => {
      console.log(`wait ${sec}s`);
      await defer(sec);
    };

    tasks.unshift(task);
    return context;
  }

  function execute() {
    tasks.reduce(async (promise, task) => {
      await promise;
      await task();
    }, Promise.resolve);
  }

  // 用 Object.freeze 来防止调用者修改内部函数，保障安全
  return Object.freeze(
    Object.assign(context, {
      do: _do,
      wait,
      waitFirst,
      execute,
    })
  );
}
machine_this('ygy')
  .do('eat')
  .execute();