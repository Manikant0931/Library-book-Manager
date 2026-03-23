import React, { useState } from 'react';

// export default function functionalcomponent(props) {
export default function FunctionalComponent({ name, course }) {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Functional Component</h2>

      {/* <h2>{props.name}--{props.course}</h2> */}
      {/* <h3>{name}--{course}</h3> */}

      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}