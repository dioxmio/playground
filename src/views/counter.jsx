import React from "react";

class Counter extends React.Component {
    render() {
        const { increment, decrement, counter} = this.props;
        return (
          <div className="greeting">
            Counter: {counter}
            <button type="button"
              onClick={increment}>
              +
            </button>
            <button type="button"
              onClick={decrement}>
              -
            </button>
          </div>
        );
    }
}

export default Counter;
