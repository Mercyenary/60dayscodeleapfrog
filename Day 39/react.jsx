//hello world
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

// export default App;

//component rendering

import React from 'react';

function Header() {
  return <h1>Welcome to React!</h1>;
}

function App2() {
  return (
    <div>
      <Header />
      <p>This is a basic React example.</p>
    </div>
  );
}

// export default App2;

// Counter.js

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// export default Counter;


// ParentComponent.js

import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="Alice" />
      <ChildComponent name="Bob" />
    </div>
  );
}

export default ParentComponent;

// ChildComponent.js

import React from 'react';

function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}

// export default ChildComponent;
