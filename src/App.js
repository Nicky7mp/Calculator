import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="calcWrapper">
      <Keypad />
    </div>
  );
}

class Keypad extends React.Component {
  state = {
    maths: [],
    keys: [
      { key: "Clear", button: "clear" },
      { key: "/", button: "operator" },
      { key: "7", button: "number" },
      { key: "8", button: "number" },
      { key: "9", button: "number" },
      { key: "*", button: "operator" },
      { key: "4", button: "number" },
      { key: "5", button: "number" },
      { key: "6", button: "number" },
      { key: "-", button: "operator" },
      { key: "1", button: "number" },
      { key: "2", button: "number" },
      { key: "3", button: "number" },
      { key: "+", button: "operator" },
      { key: "0", button: "number" },
      { key: "=", button: "operator" }
    ]
  };

  number = name => {
    if (name === "Clear") {
      this.setState({ maths: [] });
    } else if (name === "=") {
      this.setState(prevState => ({
        maths: [eval(prevState.maths.join(""))]
      }));
    } else {
      this.setState(prevState => ({
        maths: [...prevState.maths, name]
      }));
    }
  };

  render() {
    return (
      <div className="calc">
        <div className="display">
          <p>{this.state.maths}</p>
        </div>
        <div className="buttonsWrapper">
          <div className="buttons">
            {this.state.keys.map(press => {
              return (
                <button
                  className={press.button}
                  onClick={() => this.number(press.key)}
                >
                  {press.key}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
