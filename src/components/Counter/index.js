import React, { useMemo, useState } from "react";
import "./index.css";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);

//   const getModifier = useMemo(() => {
//     if (counter > 0) return "counter__title--increment";
//     if (counter < 0) return "counter__title--decrement";
//     return "";
//   }, [counter]);

//   return (
//     <div className="counter">
//       <h1 className={`counter__title ${getModifier}`}>{counter}</h1>
//       <section className="buttons">
//         <button
//           onClick={() => {
//             setCounter(counter + 1);
//           }}
//           className="button button--increment"
//         ></button>
//       </section>
//     </div>
//   );
// };

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  getModifier() {
    if (this.state.counter < 0) return "counter__title--increment";
    if (this.state.counter > 0) return "counter__title--decrement";
    return "";
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1 className={`counter__title ${this.getModifier}`}>{counter}</h1>
        <section className="buttons">
          <button
            onClick={() => {
              this.setState({ counter: counter + 1 });
            }}
            className="button button--increment"
          >
            incrementar
          </button>
          <button
            onClick={() => {
              this.setState({ counter: counter - 1 });
            }}
            className="button button--decrement"
          >
            incrementar
          </button>
        </section>
      </div>
    );
  }
}

export default Counter;
