[![Build Status](https://travis-ci.org/pcardune/pyret-ide.svg?branch=master)](https://travis-ci.org/pcardune/pyret-ide)

# pyret-ide #

UI Components that power the pyret ide

## Installation and Usage ##

This library has not yet been published to npm, so you must install it from a
github branch.  You can do this with:

```
npm install --save pcardune/pyret-ide#master-builds
```

Then usage is as follows:

```javascript
import PyretIDE from 'pyret-ide';

import yourRuntimeApiLoader from './yourRuntimeApiLoader';

PyretIDE.init({
  debug: true,
  rootEl: document.getElementById('pyret-ide-root-element'),
  runtimeApiLoader: yourRuntimeApiLoader
});
```

### Runtime API ###

PyretIDE can work with any runtime that conforms to a specific api. The api
consists of three asynchronous functions, `parse`, `compile`, and `execute` that
end up getting asynchrounously composed in PyretIDE's internals. The workflow
looks something like this:

```
User         PyretIDE           Parser        Compiler        Executor
 |
 |  click run
 |------------->
                |
                |   parse(src)
                |---------------->
                                 |
                <------ast-------|
                |
                |          compile(ast)
                |------------------------------->
                                                 |
                                                 |
                <-----------bytecode-------------|
                |
                |                execute(bytecode)
                |----------------------------------------------->
                                                                |
                                                                |
                <----------------result-------------------------|
                |
      display   |
  <-------------|
  |   result
  |
```

While the parser, compiler, and executor are doing their work asynchronously,
PyretIDE shows an appropriate loading indicator to the user. Once each step of
the parse/compile/execute process has finished, PyretIDE calls the next step,
passing in the result of the last step. By keeping track of the intermediate
results of the parse/compile/execute process, PyretIDE has the opportunity to
expose these results to the user (e.g. # of tokens that were parsed).

Since the `parse`, `compile`, and `execute` functions might need to do some
asynchronous work on a server or in a web worker, they must return `Promise`
objects so that `PyretIDE` can figure out when they have finished.

Thus, to hook your runtime up to PyretIDE, you must have an object with the
following functions:

* `parse(src)` - the parse function should take a src string parameter that contains the
  source code of the program to be compiled/executed. Since parsing may take
  place asychronously (e.g. via a web service or web worker), the `parse` function
  should return a `Promise` object that resolves to the abstract syntax tree
  expected by the compiler. In practice, PyretIDE doesn't actually do anything
  with the AST that gets returned except pass it right into the `compile()`
  function, so all you really have to return from `parse()` is some kind of a
  handle that the compiler can use to look up what it's supposed to be
  compiling.
* `compile(ast)` - the compile function should take an AST (or a handle for
  retrieving the AST) and asynchronously compile it into bytecode (or a handle
  for retrieving the bytecode). Again, just like the `parse` function, it should
  return a `Promise` object that resolves to the bytecode.
* `execute(bytecode)` - the execute function should take bytecode (or a handle
  for retrieving the bytecode) and asychronously execute the bytecode. Again,
  just like the previous two functions, this should return a `Promise` object
  that resolves to the result of execution.

For an example of what a (contrived) runtime api implementation might look like,
see the
[`stubCompiler`](https://github.com/pcardune/pyret-ide/blob/master/src/stubCompiler.js)
that comes with pyret-ide.

### Providing a runtimeApiLoader ###

Since runtimes can often be large and unwieldly, PyretIDE does not require the
runtime to actually be available before PyretIDE gets initialized. As such, in
order to tell PyretIDE when the runtime is available for use, you must provide an
asynchronous loader function that returns a `Promise` object which in turn
resolves to the loaded runtime. For example, it might look like this:

```javascript
function runtimeApiLoader() {
  const RUNTIME_URL = '/path/to/my/runtime.js';
  return new Promise((resolve, reject) => {
    fetch(RUNTIME_URL).then(response => {
      if (response.ok) {
        var myRuntime = eval(response.responseText);
        resolve(myRuntime);
      } else {
        reject(new Error("failed to load runtime. response code:", response.status));
      }
    });
  });
}
```

## Development ##

### Running Tests ###

Automated tests can be run using this command:

```
npm test
```

You can also make tests re-run automatically every time you change a file by
running:

```
npm run test-watch
```

### React Storybook ###

To use React Storybook:

```npm run storybook```

Then open a browser window to localhost:9001

To add to react storybooks you need to:

* Write the stories in the ```src/components/stories/directory```

* Add that story's filename to the the config file located in the ```.storybook/directory```

To learn how to write stories refer to [this guide](https://github.com/kadirahq/react-storybook/blob/master/docs/writing_stories.md)
